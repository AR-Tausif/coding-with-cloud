import React, { FC,  } from "react";
interface ICounterWithFuncProps { 
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    dispatch: any,
    state: number,
 };

export const CounterWithFunc: FC<ICounterWithFuncProps> = ({state, setCount, dispatch}) => {
    

    return (
        <div className="border p-10">
            <p>you are not bad But you are amazing! :D  </p>
            <h2>{state}</h2>
            <button className="btn bg-blue-500 p-2" onClick={() => dispatch({type: 'DECREAMENT'})}>increament</button>
        </div>
    );
}
