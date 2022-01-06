import Taks from "../models/Taks";

export const renderTasks =  async (req, res) => {
    const tasks = await Taks.find().lean();
    res.render('index', { tasks: tasks });
};

export const createTask = async (req, res) => {
    try {
      const tasks = Taks(req.body)
  
      await tasks.save()
      res.redirect('/')
  
    } catch (err) {
      console.log(err);
    }
};

export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Taks.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (err) {
      console.log(err.message);
    }
};

export const taskEdit =  async (req, res) => {
    const { id } = req.params;
    await Taks.findByIdAndUpdate(id, req.body)
    res.redirect("/")
};

export const taskDelate = async (req, res) => {
    const {id} = req.params;
    await Taks.findByIdAndDelete(id)
    res.redirect("/");
};

export const taskDone = async (req, res) => {
    const {id} = req.params;
    const task = await Taks.findById(id)
    task.done = !task.done;
    await task.save();
    res.redirect("/");
}
