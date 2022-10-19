
import React, { Component } from 'react'
import styles from "../styles/Background.module.css"

class Image extends Component{

  
  render (){
    let backgroundClass


    if (this.props.talking === true) {
      backgroundClass = styles.background_gif
    } else {
      backgroundClass =  styles.background_fixed
    }
    

    return (
      <div className= {styles.screen}>
          <div className={backgroundClass}> </div>
      </div>
    )

  } 
}


export default Image