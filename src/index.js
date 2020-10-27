import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const reset = document.getElementById("reset");

number.innerText = 0;

// modify global data
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else if (action.type === "RESET") {
    return (count = 0);
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
reset.addEventListener("click", () => countStore.dispatch({ type: "RESET" }));
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

// countModifier의 값을 가져옴( data)
// console.log(countStore.getState());
