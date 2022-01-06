import { Router } from "express";
import {renderTasks, createTask, renderTaskEdit, taskEdit, taskDelate, taskDone} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post('/tasks/add', createTask);

router.get("/task/:id/toogleDone", taskDone)

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", taskEdit);

router.get("/task/:id/delete", taskDelate)


export default router
