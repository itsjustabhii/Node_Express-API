import express from 'express'
const router = express.Router()
//Importing UUID Package for unique USer IDs
import {v4 as uuidv4} from 'uuid'


let users = []


//All routes here are starting with /users
router.get('/', (req,res)=> {
    res.send(users)
})

//Browsers can only do GET request, that's why we use POSTMAN for other types of request
router.post('/', (req, res) => {
    const user = req.body       //req.body is the object which we are passing
    // const userwithId = {...user, id: uuidv4()}  //Adding userID
    users.push({...user, id: uuidv4()})
    res.send(`User with the username ${user.firstName} added to the database!`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params //id are stored in req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    //
    //filter method is used to filter and remove 
    //if user.id == id, then it is deleted
    users = users.filter((user)=> user.id !== id) //if true, it'll keep in the array else remove it
    res. send(`User with the id ${id} deleted from the database`)
})

//PUT is used to completely override 
//PATCH - For Partial modification like a aprt of the data, we use PATCH

router.patch('/:id', (req, res) => {
    const {id} = req.params //We are receiving a request parameter id from the client
    const {firstName, lastName, age} = req.body //

    const userToBeUpdated = users.find((user)=> user.id === id) //if user.id is equal to id, then it is updated

        //We can change one or many properties of the user
    if(firstName) {
        userToBeUpdated.firstName = firstName
    }

    if(lastName) {
        userToBeUpdated.lastName = lastName
    }
    if(age) {
        userToBeUpdated.age = age
    }

    res.send(`User with the id ${id} has been updated!`)

})

// module.exports = router
export default router