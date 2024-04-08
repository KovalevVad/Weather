import { aormatedTime } from "./helper.js";
import { days, month} from "./constants.js"

const textDate = document.querySelector('#textDate')

function updateTime() {
  let date = new Date();
  const minutes = aormatedTime(date.getMinutes())
  const hours = aormatedTime(date.getHours())
  let str = hours + ':' + minutes + ' - ' + days[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ‘' + String(date.getFullYear()).slice(2, 4)
  textDate.innerHTML = str
}

updateTime()
setInterval(() => {
  updateTime()
}, 1000)

