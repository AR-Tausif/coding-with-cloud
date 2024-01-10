import React, { FC,  } from "react";
import { ActionTypes } from "../App";
interface ICounterWithFuncProps { 
    dispatch: any,
    state: {
        count: number,
    },
 };

export const CounterWithFunc: FC<ICounterWithFuncProps> = ({state, dispatch}) => {
    

    return (
        <div className="border p-10">
            <p>you are not bad But you are amazing! :D  </p>
            <h2>{state.count}</h2>
            <button className="btn bg-blue-500 p-2" onClick={() => dispatch({type: ActionTypes.DECREASE, payload: 200 })}>Decreamnt</button>
        </div>
    );
}
