import React, { Component } from 'react'
import styles from '../styles/Dialog.module.css'

class Dialog  extends Component{
    constructor(){
      super();
      this.state = {
        message : [
          '', 
          'Hey I\'m Enrique.',
          'I know you are busy, but hear me out...',
          'You really want to hire me',
          'Why? you may ask.',
          'After 10 years working on the films industry',
          'I\'ve decided to start a new journey in tech',
          'I found my new passion in Frontend Engineering',
          'and I\'m determined to thrive as such.',
          'Since I\'m a proven professional',
          'I\'ll bring with me great buisness acumen...',
          'A strong work ethic...',
          'and lot\'s of energy',
          'Sure, there\'s a lot I\'ll need to learn as a programmer',
          'And that\'s why I\'m looking for an entry level job.',
          'But you\'ll get much more than a Junior Engineer.',
          'Don\'t miss out on this opportunity : )',
          'Intrigued?',
          'Let\'s have a chat.',
        ],
        number : 0
      }
    }
    
    componentDidUpdate(prevProps) {
      const talkingStateChanged = prevProps.talking !== this.props.talking
      
      if (talkingStateChanged && this.props.talking) {
        this.next()
      } 
    }
    
    next(){
      let newNumber = this.state.number + 1

      if (newNumber >= this.state.message.length) {
        newNumber = 0
      }
      
      this.setState ({ number: newNumber })    
    }
    
    render(){
      return (
        <h1 className={ styles.dialog_animation } key={this.state.number }> {this.state.message[this.state.number]}</h1>
      )
      
    }
}

export default Dialog
