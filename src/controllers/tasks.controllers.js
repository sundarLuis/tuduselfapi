const {getConnection} = require('../database')
const {v4} = require('uuid')
const getTasks = (req,res) => {
    const tasks = getConnection().get('tasks').value()
   res.json(tasks)
};
const getTask = (req,res) => {
    const task = getConnection().get('tasks').find({id:req.params.id}).value()
   res.json(task)
};

const createTasks = (req,res) => {
    const newTasks = {
        id:v4(),
        name:req.body.name,
        description:req.body.description
    }
    getConnection().get('tasks').push(newTasks).write()
    res.json(newTasks)
}
const updateTasks = async (req,res) => {
    const result = await getConnection().get('tasks').find({id:req.params.id})
    .assign(req.body)
    .write()
    res.json(result)

}
const deletTasks = (req,res) => {
    const result = getConnection().get('tasks').remove({id:req.params.id}).write()
    res.json({message: "deleted successfull"})
}
module.exports = {
    getTasks,
    getTask,
    createTasks,
    updateTasks,
    deletTasks
}