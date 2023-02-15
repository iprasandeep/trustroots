import express from 'express';
import Hotel from '../models/User.js';
import { createError } from '../utils/error.js';
import { createUser, updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

// check authentication
router.get('/checkauthentication', verifyToken, (req, res, next)=>{
    res.send('Hello user, You are logged In!');
})
// check user by id
router.get('/checkuser/:id', verifyUser, (req, res)=>{
    res.send('Hello user,you are logged in and you can delete your account');
})
// create User
router.post('/',createUser)
// update User
router.put('/:id', updateUser);
// delete user
router.delete('/:id', deleteUser)
// get User
router.get('/:id', getUser);
// GET ALL
router.get('/', getUsers);


export default router;