const {Router} = require('express')
const router =Router()
const {getTasks,getTask,createTasks,updateTasks,deletTasks} = require('../controllers/tasks.controllers')

router.get('/tasks', getTasks)
router.get('/tasks/:id',getTask )
router.post('/tasks', createTasks)
router.put('/tasks/:id', updateTasks)
router.delete('/tasks/:id', deletTasks)

module.exports = router