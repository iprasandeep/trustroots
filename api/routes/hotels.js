import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { createHotel, updateHotel, deleteHotel, getHotel,getHotels } from '../controllers/hotel.js';
const router = express.Router();

// create hotel
router.post('/',createHotel)
// update hotel
router.put('/:id', updateHotel);
// delete hotel
router.delete('/:id', deleteHotel)
// get hotel
router.get('/:id', getHotel);
// GET ALL
router.get('/', getHotels);


export default router;