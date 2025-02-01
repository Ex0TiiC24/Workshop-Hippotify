import express from 'express'
import {getOwnedPlaylist} from "../controllers/playlistController.js";

const playlistRoute = express.Router();

playlistRoute.get("",getOwnedPlaylist);

export default playlistRoute;

