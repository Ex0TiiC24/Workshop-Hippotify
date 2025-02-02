import express from 'express'
import * as playlistsController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("/owned",playlistsController.getOwnedPlaylist);

playlistRoute.get("/",playlistsController.getUserPlaylists);

playlistRoute.get("/:playlistId",playlistsController.getUserPlaylistById)

playlistRoute.put("/:playlistId",playlistsController.updatePlaylist)

playlistRoute.post("/:playlistId/track/:trackId",playlistsController.addTrackToPlaylist)

playlistRoute.delete("/:playlistId/track/:trackId",playlistsController.removeTrackFromPlaylist)

export default playlistRoute;

