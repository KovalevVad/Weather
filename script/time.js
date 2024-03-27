import { aormatedTime  } from "./helper.js";

const textDate = document.querySelector('#textDate')

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function updateTime() {
  let date = new Date();
  const minutes = aormatedTime(date.getMinutes())
  const hours = aormatedTime(date.getHours())
  let str = hours + ':' + minutes + ' - ' + days[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ‘' + String(date.getFullYear()).slice(2, 4)
  textDate.innerHTML = str
}


updateTime()
setTimeout(() => {
  updateTime()
}, 1000)

