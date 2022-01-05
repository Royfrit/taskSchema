import { Router } from "express";
import Taks from "../models/Taks";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Taks.find().lean();
  res.render('index', { tasks: tasks });
});

router.post('/tasks/add', async (req, res) => {
  try {
    const tasks = Taks(req.body)

    await tasks.save()
    res.redirect('/')

  } catch (err) {
    console.log(err);
  }
})

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Taks.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Taks.findByIdAndUpdate(id, req.body)
  res.redirect("/")
});

router.get("/delete/:id", async (req, res) => {
  const {id} = req.params;
  await Taks.findByIdAndDelete(id)
  res.redirect("/");
})

router.get("/toogleDone/:id", async (req, res) => {
  const {id} = req.params;
  const task = await Taks.findById(id)
  task.done = !task.done;
  await task.save();
  res.redirect("/");
})

export default router
