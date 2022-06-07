require('../src/db/mongoose')
const User = require('../src/models/user')

// 6278df0dc5dd2446d20cdb3f

// User.findByIdAndUpdate('6278df0dc5dd2446d20cdb3f', {age: 23}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 30})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age: age})
    return count
}

updateAgeAndCount('6278df0dc5dd2446d20cdb3f', 3)
    .then((count) => {
        console.log(count)
    })
    .catch((e) => {
        console.log(e)
    })