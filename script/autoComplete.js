import { appFetch } from "./helper.js";
import { Routers } from "./constants.js";

let listCity = []
async function getData() {
  const data = await appFetch(Routers.city);
  const list = data.map(element => element.name);

  listCity = [...new Set(list)]
}

getData();

const resultBoxDesktop = document.querySelector('.result__box')
const inputBoxDesktop = document.getElementById("autoComplete")

const resultBoxTablet = document.querySelector('.result__box1')
const inputBoxTablet = document.getElementById("autoComplete1")


function autoComplete(inputBox, resultBox) {
  inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
      result = listCity.filter((keyword) => {
       return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }
    display(result)

    if(!result.length) {
      resultBox.innerHTML = '';
    }
  }

  function display(result) {

    const ul = document.createElement('ul');

    for (let i = 0; i < result.length; i++) {
        if (i > 100) {
          break
        }
        const li = document.createElement('li');
        li.textContent = result[i];
        li.onclick = () => selectInput(result[i]);
        ul.appendChild(li);
    }

    resultBox.innerHTML = '';
    resultBox.appendChild(ul);
  }

  function selectInput(list) {
    inputBox.value = list;
    resultBox.innerHTML = '';
  }
}

autoComplete(inputBoxDesktop, resultBoxDesktop) //desktop
autoComplete(inputBoxTablet, resultBoxTablet) //tablet
