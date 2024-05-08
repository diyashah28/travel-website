import express from 'express'
import { deleteUser, updateUser, getSingleUser, getAllUser } from '../controllers/userController.js';
const router = express.Router()
import { verifyUser } from '../utils/verifyToken.js';



router.put('/:id' ,  updateUser);
router.delete('/:id' ,  deleteUser);
router.get('/:id' , getSingleUser);
router.get('/' ,  getAllUser);
export default router;