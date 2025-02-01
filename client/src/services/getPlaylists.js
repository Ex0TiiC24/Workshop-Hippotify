import { axiosInstance } from "../utils/axiosInstance"


export const getPlaylists = async () =>{
    try{
        const response = await axiosInstance('/playlists')
        console.log(response.data.data)
        return response.data.data
    }
    catch (e) {
        return e.response
    }

}

export const getPlaylistsById = async (id) =>{
    try{
        const response = await axiosInstance(`/playlists/${id || 1}`)
        console.log(response.data.data)
        return response.data.data
    }
    catch (e) {
        return e.response
    }
}