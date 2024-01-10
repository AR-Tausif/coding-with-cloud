
export enum ActionTypes {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE'
  }
  export type TAction={
    type: ActionTypes,
    payload: number
  }
export  type TCurrState = {
     count: number 
  }