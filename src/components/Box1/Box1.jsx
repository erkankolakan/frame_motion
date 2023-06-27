import React, { useState } from 'react'
import { motion } from "framer-motion"


const Box = () => {

  const [isAnimating, setIsAnimating] = useState(false) //tıklanmışmı tıklanmamış mı kontorolü yapmak için bakıyoruz.



  return (
    <div className='box-container'>
        <motion.div className='box'
          onClick={() => {
            setIsAnimating(!isAnimating) //tıklandığı zaman "isAnimating" in tersi olacal
          }}

          initial={{
            opacity:.1
          }}
          animate={{
            x: isAnimating ? 1440 : 0 ,
            opacity:isAnimating ? 1 : 0.5,
            rotate:isAnimating ? 360 : 0,
             
          }}
          transition={{
            type:"spring",
            damping:"10",
            stiffness:60,
          }}
        
        
        >

        </motion.div>
    </div> 
  )
}

export default Box


//motion değerini tüm html öğelerine verebiliriz. motion.img , motion.span
//bir div e motion vermeden o div e animasyon  veremeyiz.
//initial bir div e başlangıç değerini söylmek için kullanılır.
//animate bir div e sayfa yüklendiği zaman ne yapması gerektiğini söyleriz
//animate nin içerisine çoğu css değerlerini yazabiliriz
//transition bir div e animasyonun ne kadar sürmesi gerektiğini söyleriz. 

