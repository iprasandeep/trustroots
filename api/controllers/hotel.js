import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next)=>{
     // hotel info from user
     const newHotel = new Hotel(req.body)
     try{
         const savedHotel = await newHotel.save()
         res.status(200).json(savedHotel);
 
     }catch(error){
         next(error)
     }
}
// Update 
export const updateHotel = async (req, res, next)=>{
    // hotel info from user
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {
            new: true }
        );
        res.status(200).json(updateHotel);

    }catch(error){
        next(error);
    }
}
// delete
export const deleteHotel = async (req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted!');
 
     }catch(error){
         next(error);
     }
}
// get hotel
export const getHotel = async (req, res, next)=>{
    
    try{
        const hotel =  await Hotel.findById(
          req.params.id
          );
          res.status(200).json(hotel);
  
      }catch(error){
          next(err);
      }
}
// Get all Hotels
export const getHotels = async (req, res, next)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
     }catch(error){
         next(error);
     }
}