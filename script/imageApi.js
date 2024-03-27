import { appFetch  } from "./helper.js";

export function fetchByImage(weather) {
  const CLIENT_ID = '79G_i9r2lZetICsZue9VtkOLuXg-fJ-dCbv8V5HQkLA'

  return appFetch(`https://api.unsplash.com/photos/random/?query=${weather}&client_id=${CLIENT_ID}`)
}