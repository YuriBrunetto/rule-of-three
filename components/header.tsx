import type { NextComponentType } from 'next'
import styles from '../styles/Home.module.css'

const Header: NextComponentType = () => (
  <>
    <h1 className={styles.title}>rule-of-three.js</h1>
    <p className={styles.description}>
      created for you to use in a typescript website
    </p>
  </>
)

export default Header
