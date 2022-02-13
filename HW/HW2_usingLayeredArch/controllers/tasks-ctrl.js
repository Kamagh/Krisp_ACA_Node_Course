import InvalidArgumentsError from "../errors/invalid-arguments.error.js";

export default (tasksService) => {
    return {
        getById: (req, res) => {
            const id = +req.params.id;
            tasksService.getById(id).then((task) => {
                res.status(200).send({
                    status: 'OK',
                    response: task,
                })
            });

        },
        getAll: async (req, res) => {
            const status = req.query.status;
            const allTasks = await tasksService.getAll(status);
            res.status(201).send({
                status: 'OK',
                response: allTasks,
            })
        },
        create: async (req, res, next) => {
            const {title, status = 'pending'} = req.body
            if (!title) return next(new InvalidArgumentsError())

            const newTask = {title, status}
            await tasksService.create(newTask);

            res.status(201).send({
                status: 'OK',
                response: newTask,
            })
        },

        deleteById: async (req, res) => {
            const id = +req.params.id;
            const task = await tasksService.deleteById(id);

            res.status(202).send({
                status: 'OK',
                response: task,
            })
        }
    }
}