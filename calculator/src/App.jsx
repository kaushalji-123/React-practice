import Display from './components/Display'
import Fetch from './components/Fetch'


import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
function App() {
  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <Display />
      <ButtonsContainer/>
    </div>
  )
}

export default App
