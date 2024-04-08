export const aormatedTime = (numb) => numb < 10 ? '0' + numb : numb

export function appFetch(url, options) {
  return fetch(url, options)
    .then(resp => resp.json())
    .catch(err => {
      throw new Error(err)
    })
}