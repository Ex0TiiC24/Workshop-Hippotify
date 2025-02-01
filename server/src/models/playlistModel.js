import db from "../config/database.js"

export const getOwnedPlaylist = async (userID) =>{
    const [response] = await db.promise().query(

        'SELECT id,title FROM playlists WHERE id= ?',[userID]
    );
    console.log('model',response)
    return response

}

