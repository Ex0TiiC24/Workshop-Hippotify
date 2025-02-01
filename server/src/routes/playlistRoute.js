import express from 'express'
import * as playlistsController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get("/owned",playlistsController.getOwnedPlaylist);

playlistRoute.get("/",playlistsController.getUserPlaylists);

playlistRoute.get("/:playlistId",playlistsController.getUserPlaylistById)

export default playlistRoute;

