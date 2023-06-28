import React from 'react'
import { motion } from "framer-motion"


const Box = () => {

  return (
    <div className='box-container'>
        <motion.div className='box'
            whileHover={{
                 scale:1.1,
            }}
            whileTap={{
                scale:.9,
            }}
            drag
            dragConstraints={{
                top:5,
                left:-20,
                right:20,
                bottom:5,
            }}
        >

        </motion.div>
    </div> 
  )
}

export default Box




