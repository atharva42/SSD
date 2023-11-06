import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()
export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer( {
        workouts:null
    })

    return  (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}