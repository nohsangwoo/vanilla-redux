import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const reset = document.getElementById("reset");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
const RESET = "RESET";

// modify global data
// 전송받은 data는 action으로 저장됨
// 첫번째 인자는 current state이다.
const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    case RESET:
      return (count = 0);
    default:
      return count;
  }
};

// data를 control하기위한 세팅
const countStore = createStore(countModifier);

// 이벤트리스터 호출
//dispatch를 이용하여 countModifier로 데이터를 전송가능
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
reset.addEventListener("click", () => countStore.dispatch({ type: RESET }));

const onChange = () => {
  // countModifier의 값을 가져옴( data)
  number.innerText = countStore.getState();
};

// 여기서 countModifider를 구독
countStore.subscribe(onChange);

// console.log(countStore.getState());
