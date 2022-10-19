import React from 'react'
import Dialog from './Dialog'
import Character from './Character'
import styles from '../styles/Home.module.css'
import Background from "./Background"

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      talking: true
      
    }
 
    this.timeOutInstance = null
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('click', this.onClick)
    this.startTalking()
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('click', this.onClick)
  }

  onKeyDown = () => {
    this.startTalking()
  }

  onClick = () => {
    this.startTalking()
  }

  startTalking = () => {

    window.clearTimeout(this.timeOutInstance) 
    
    this.setState({ talking: false }, () => {
      this.setState({talking: true})
      
      setTimeout(() => {
        this.setState({talking: false})
      }, 1500)
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <Background talking = {this.state.talking}/>
          <div className={styles.character}>
            <Character talking = {this.state.talking} ></Character>
          </div>
          <div className={styles.dialog}>
            <Dialog talking = {this.state.talking} ></Dialog>
          </div>    
        </main>
      </div>
    )
  }
}

export default Home