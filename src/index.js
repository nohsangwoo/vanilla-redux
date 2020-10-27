import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// modify global data
const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

// countModifier의 값을 가져옴( data)
console.log(countStore.getState());
