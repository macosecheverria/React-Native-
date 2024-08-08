import { useCounter } from "../hooks"



export const Counter = () => {
    const {count,increaseBy} = useCounter({initialValue: 2});

  return (
    <div>
        <h3>Contador <small>{count}</small></h3>
        <div>
            <button onClick={increaseBy}>+1</button>
            &nbsp;
            <button onClick={increaseBy}>-1</button>
        </div>
    </div>
  )
}
