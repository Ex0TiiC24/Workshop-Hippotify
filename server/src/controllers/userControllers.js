import * as userModels from '../models/userModels.js' 

const id = 6

export const getUserId = async (req,res) =>{
    try {
        const userId = await userModels.getUser(id);
        return res.status(200).json({
            status:'Success',
            data: userId,
            message:'UserId retreive succesfully'
        })
        
      } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
          success: false,
          data: null,
          message: "Internal server error",
        });
      }

}
