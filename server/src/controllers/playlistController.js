import * as playlistModel from '../models/playlistModel.js'
import { timeFormat, timeFormatHMS } from '../utils/timeformat.js';
const userId = 6;
export const getOwnedPlaylist = async (req,res)=>{
    try{
        const playlist = await playlistModel.getOwnedPlaylist(userId);
        
        return res.status(200).json({
            status:'Success',
            data: playlist,
            message:'Playlist retreive succesfully'
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

export const getUserPlaylists = async (req,res)=>{
    try{
        const playlist = await playlistModel.getPlaylists(userId);
        
        return res.status(200).json({
            status:'Success',
            data: playlist,
            message:'Playlist retreive succesfully'
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
export const getUserPlaylistById = async (req, res) => {
    try {
        const { playlistId } = req.params; //param in route
        if(!playlistId){
            return res.status(400).json({
                success: false,
                data: null,
                message: "Playlist ID is required"
            });
        }
        const playlist = await playlistModel.getPlaylistsInfo(playlistId, userId);
        if(!playlist){
            return res.status(403).json({
                success: false,
                data: null,
                message: "Access denied"
            });
        }
        const tracks = await playlistModel.getPlaylistsTrack(playlistId);
 
        let totalDuration = 0;
        tracks.forEach((track)=>{
            totalDuration += track.duration;
        })
        const response = {
            ...playlist,
            duration: timeFormatHMS(totalDuration),
            edit_access: playlist.author_id === userId,
            tracks: tracks.map((track) => ({
                ...track,
                duration: timeFormat(track.duration)
            }))
        }
        console.log(response)
        return res.status(200).json({
            success: true,
            data: response,
            message: "Playlist retrieved successfully"
        });
    } catch (error) {
        console.log("Error: ",error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}