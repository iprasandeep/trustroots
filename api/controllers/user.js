import Hotel from "../models/User.js";

export const createUser = async (req, res, next)=>{
     // hotel info from user
     const newUser = new User(req.body)
     try{
         const savedUser = await newUser.save()
         res.status(200).json(savedUser);
 
     }catch(error){
         next(error)
     }
}
// Update 
export const updateUser = async (req, res, next)=>{
    // hotel info from user
    try{
        const updateUser = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {
            new: true }
        );
        res.status(200).json(updateUser);

    }catch(error){
        next(error);
    }
}
// delete
export const deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted!');
 
     }catch(error){
         next(error);
     }
}
// get hotel
export const getUser = async (req, res, next)=>{
    
    try{
        const user =  await User.findById(
          req.params.id
          );
          res.status(200).json(user);
  
      }catch(error){
          next(error);
      }
}
// Get all Hotels
export const getUsers = async (req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
     }catch(error){
         next(error);
     }
}