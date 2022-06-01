import axios from "axios";

/**
 * Base url to make requests to the movie database
 */
const instance = axios.create({
    baseURL: "https://api.themoviedv.org/3",
    })
export default instance;