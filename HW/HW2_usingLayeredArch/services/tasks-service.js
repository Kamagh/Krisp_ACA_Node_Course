export default (tasksDao) => { //for further business logics
    return {
        getById: (id) => tasksDao.getById(id),
        getAll: async (status) => {
            const allTasks = await tasksDao.getAll();
            const filteredTasks = status ? allTasks.filter(el => el.status === status) : allTasks
            return filteredTasks;
        },
        create: () => tasksDao.create(),
        deleteById: (id) => tasksDao.deleteById(id),
    }
}