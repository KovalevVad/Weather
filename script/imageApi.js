import { appFetch } from "./helper.js";
import { CLIENT_ID } from "./constants.js";

export function fetchByImage(weather) {
  return appFetch(`https://api.unsplash.com/photos/random/?query=${weather}&client_id=${CLIENT_ID}`)
}