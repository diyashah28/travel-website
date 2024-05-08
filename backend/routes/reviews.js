import express from 'express'
import {createReview,getReview} from "./../controllers/reviewController.js";


const router = express.Router()
router.post('/:tourId', createReview)
router.get('/:id',getReview)
export default router 