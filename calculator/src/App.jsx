import Display from './components/Display'

import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer/>
    </div>
  )
}

export default App
