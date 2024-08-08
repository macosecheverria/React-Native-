import { useState } from "react";
interface Options {
    initialValue: number;
  }

export const useCounter = ({initialValue}: Options) => {
    const [ count, setCount] = useState<number>(initialValue);

    const increaseBy = () => {
        setCount(count + initialValue);
    }
  
  
    return {
        count,
        increaseBy
  }
}
