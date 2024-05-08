import express from 'express'
import {createBooking, getAllBooking, getBooking} from "./../controllers/bookingController.js";
import {verifyUser, verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()
router.post('/:tourId', createBooking)
router.get('/:tourId', getBooking)
router.get('/', getAllBooking)
export default router 