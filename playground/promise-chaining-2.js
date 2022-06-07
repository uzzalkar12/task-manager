require('../src/db/mongoose')
const Task = require('../src/models/task')

// 6278df0dc5dd2446d20cdb3f
//
// Task.findByIdAndDelete('6278e686fb14a9d331d115bd').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6278e686fb14a9d331d115bd')
    .then((count) => {
        console.log(count)
    })
    .catch((e) => {
        console.log(e)
    })