import { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Home.module.css'

type ICalculate = {
  firstValue: number
  setFirstValue: Dispatch<SetStateAction<number>>
  partialValue: number
  setPartialValue: Dispatch<SetStateAction<number>>
  result: number
  calculateRuleOfThree: () => void
}

const Calculate: React.FC<ICalculate> = ({
  firstValue,
  setFirstValue,
  partialValue,
  setPartialValue,
  result,
  calculateRuleOfThree,
}) => (
  <>
    <div className={styles.row}>
      <input
        type='number'
        placeholder='first value'
        onChange={(e) => setFirstValue(+e.target.value)}
        value={firstValue}
      />
      <p>= 100%</p>
    </div>
    <div className={styles.row}>
      <input
        type='number'
        placeholder='partial value'
        onChange={(e) => setPartialValue(+e.target.value)}
        value={partialValue}
      />
      <p>= ?%</p>
    </div>

    <button className={styles.calculateBtn} onClick={calculateRuleOfThree}>
      Calcular
    </button>

    <p className='result'>{result}</p>
  </>
)

export default Calculate
