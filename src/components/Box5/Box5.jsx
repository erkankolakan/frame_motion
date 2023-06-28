import React from 'react'
import { motion,  useAnimation } from "framer-motion"


const Box5 = () => {

    const control = useAnimation()
   
  return (
    <div className='box-container'>
        
        <button
              onClick={() => {
                control.start({
                    x:0,
                    transition:{
                        type:"spring",
                        damping:10
                    }
                
                })
            }}
        >Move Left</button>

        <button
            onClick={() => {
                control.start({
                    x:1330,
                    transition:{
                        type:"spring",
                        damping:10
                    }
                
                })
            }}
        
        >Move Right</button>



        <button
            onClick={() => {
                control.start({
                    borderRadius:"50%",
                    transition:{
                        duration:1 
                    }
                })
            }}
        >Circle</button>

        <button
             onClick={() => {
                control.start({
                    borderRadius:"1rem",
                    transition:{
                        duration:1 
                    }
                })
            }}
        >Square</button>
        <button
              onClick={() => {
                control.stop()       
            }}
        >Stop</button>


        <motion.div className='box'
            animate={control}
        >


        </motion.div>
     
    </div> 
  )
}

export default Box5

// useAnimate hook unu kullanırken useAnimate i bir değişkene atarız ve daha sonrasonda bir div in içerisine animate={ xxx } şeklinde yazarak o div e çeşitli özellikler vermiş oluruz. Verdiğimiz div e önem göstermeliyiz.

