import { useState } from 'react'
import styles from './styles.module.css';

function App() {
  const [mathString, setMathString] = useState<string>('');
  const [spanResult, setSpanResult] = useState<string>('0');

  const addMathString = (value: string) => {
    setMathString(previousValue => previousValue + value);
    setSpanResult(mathString + value);
  }

  const calculateResult = () => {
    const result = eval(mathString);
    setMathString('');
    setSpanResult(result);
  }

  const clearDisplay = () => {
    setMathString('');
    setSpanResult('0');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.display}>
          <span>{spanResult}</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => addMathString('*')}>x</button>
          <button onClick={() => addMathString('/')}>/</button>
          <button onClick={clearDisplay}>c</button>
          <button onClick={() => addMathString('.')}>.</button>
          <button onClick={() => addMathString('7')}>7</button>
          <button onClick={() => addMathString('8')}>8</button>
          <button onClick={() => addMathString('9')}>9</button>
          <button onClick={() => addMathString('-')}>-</button>
          <button onClick={() => addMathString('4')}>4</button>
          <button onClick={() => addMathString('5')}>5</button>
          <button onClick={() => addMathString('6')}>6</button>
          <button onClick={() => addMathString('+')}>+</button>
          <button onClick={() => addMathString('1')}>1</button>
          <button onClick={() => addMathString('2')}>2</button>
          <button onClick={() => addMathString('3')}>3</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
