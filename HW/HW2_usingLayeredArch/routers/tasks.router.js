import express from "express";
import tasksController from "../controllers/tasks-ctrl.js";
import tasksService from "../services/tasks-service.js"
import tasksDao from '../daos/tasks-dao.js'
const router = express.Router();

const tasksCtrl = tasksController(tasksService(tasksDao()));

router.route('/')
    .post(tasksCtrl.create)
    .get(tasksCtrl.getAll)
router.route('/:id')
    .get(tasksCtrl.getById)
    .delete(tasksCtrl.deleteById);

export default router;