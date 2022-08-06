import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

// const workoutReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_WORKOUT":
//       return {
//         workouts: action.payload,
//       };
//     case "CREATE_WORKOUT":
//       return [action.payload, ...state.workouts];
//     default:
//       return state;
//   }
// };

const workoutReducer = (state, action) => {
  if (action.type === "SET_WORKOUT") {
    return {
      workouts: action.payload,
    };
  }
  if (action.type === "CREATE_WORKOUT") {
    return [action.payload, ...state.workouts];
  }
  if (action.type === "DELETE") {
    return {
      workouts: state.workouts.filter((w) => w._id !== action.payload._id),
    };
  } else return state;
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
