
export const BasicFunctions = () => {
    
    const addTwoNumber = (a: number, b: number): string => {
        return `${a + b}`;
    }

    return (
    <div>
        <h3>Functions</h3>
        <span>El resultado de sumar: {addTwoNumber(2,2)}</span>
    </div>
  )
}
