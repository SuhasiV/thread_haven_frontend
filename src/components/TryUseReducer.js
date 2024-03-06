// import { useReducer } from "react";

// const reducerFn = (currentCounter, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return currentCounter + 1;
//     case "DECREMENT":
//       return currentCounter - 1;
//     case "RESET":
//       return 0;
//     case "SET VALUE":
//       return action.newCounterValue;
//     default:
//       return null;
//   }
// };

// const TryUseReducer = () => {
//   const [counter, dispatch] = useReducer(reducerFn, 0); //useReducer function when triggerd based on the action type will trigger certain function and set the state value which is counter in this case and initial state is set to be 0 and reducerFn is the function beign triggerd upon a certain type of action

//   const onInc = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const onDec = () => {
//     dispatch({ type: "DECREMENT" });
//   };
//   const onReset = () => {
//     dispatch({ type: "RESET" });
//   };
//   const onSetValue = () => {
//     dispatch({ type: "SET VALUE", newCounterValue: 500 });
//   };

//   return (
//     <div>
//       Cpunter value: {counter}
//       <button onClick={onInc}>Inc</button>
//       <button onClick={onDec}>Dec</button>
//       <button onClick={onReset}>Reset</button>
//       <button onClick={onSetValue}>Set Value</button>
//     </div>
//   );
// };

// export default TryUseReducer;

import { useReducer } from "react";

const initialState = {
  products: [
    {
      id: 1,
      name: "pd1",
    },
    {
      id: 2,
      name: "pd2",
    },
    {
      id: 3,
      name: "pd3",
    },
    {
      id: 4,
      name: "pd4",
    },
  ],
  wishlistedProductIds: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        wishlistedProductIds: [...state.wishlistedProductIds, action.id],
      };
    case "UNLIKE":
      return {
        ...state,
        wishlistedProductIds: state.wishlistedProductIds.filter(
          (id) => id !== action.id
        ),
      };
    default:
      return state;
  }
};

const TryUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnLike = (id) => {
    state.wishlistedProductIds.includes(id)
      ? dispatch({ type: "UNLIKE", id })
      : dispatch({ type: "LIKE", id });
  };
  console.log(state);

  return (
    <div>
      <ul>
        {initialState.products.map((item) => (
          <li key={item.id}>
            Product {item.name}{" "}
            <button onClick={() => handleOnLike(item.id)}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TryUseReducer;
