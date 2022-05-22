import React from 'react'
import styles from './image.module.css'

const ImageComponent = ({src,title}) => {
  return (
    <div>
        <img className={styles.image} src={src} style={{height:'200px'}}/>
    </div>
  )
}

export default ImageComponent