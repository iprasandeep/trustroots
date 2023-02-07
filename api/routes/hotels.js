import express from 'express';
import Hotel from '../models/Hotel.js';
const router = express.Router();

// CREATE
router.post('/', async (req, res)=>{
    // hotel info from user
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);

    }catch(error){
        res.status(500).json(error)
    }
})
// UPDATE
router.put('/:id', async (req, res)=>{
    // hotel info from user
    // const newHotel = new Hotel(req.body)
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {
            new: true }
        );
        res.status(200).json(updateHotel);

    }catch(error){
        res.status(500).json(error)
    }
})
// DELETE
router.delete('/:id', async (req, res)=>{
    // hotel info from user
    // const newHotel = new Hotel(req.body)
    try{
       await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json('Hotel has been deleted!');

    }catch(error){
        res.status(500).json(error)
    }
})
// GET
// GET ALL

export default router;