import React from 'react'
import axios from 'axios'
import ImageComponent from '../components/image'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
const index = ({images}) => {
  return (
      <>
    <Header/>
    <div style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
    <div className={styles.container}>
        {
        images.map((image, idx) =>{
            return (<ImageComponent key ={idx} src={image.data.thumbnail}></ImageComponent>)
        })
        }
    </div>
    </div>
    </>
  )
}

export default index


export const getStaticProps=async ()=>{
    let res=await axios.get('https://www.reddit.com/r/images/top.json?limit=100&t=month')

    let images=res.data.data.children
    return {
        props:{
            images:images
        }
    }

}

