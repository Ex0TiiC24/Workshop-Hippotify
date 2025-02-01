import * as playlistModel from '../models/playlistModel.js'

const userid = 1;
export const getOwnedPlaylist = async (req,res)=>{
    try{
        const playlist = await playlistModel.getOwnedPlaylist(userid);
        console.log('get playlist OK')
        return res.status(200).json({
            status:'Success',
            data: playlist,
            message:'Playlist retrieve succesfully'
        })

    }
    catch (e){
        console.log(e)
        return res.status(500).json({
            status:'Failed',
            data:null,
            message:'Internal Server Error'
        })
    }
}