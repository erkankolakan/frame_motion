import React from 'react'
import { motion } from "framer-motion"


const Box3 = () => {

    // const boxVariant={
    //     lion:{
    //         x:100,
    //         scale:1.5,
    //     },
    //     elephant:{
    //         x:1000,
    //         scale:0.3,
    //     }
    // } bu şekilde de kullanılabilir bu sayede her dive 100 satır animasyon yazmaktansa bu şekilde class mantığıyla istediğimiz div e bir kaç satırda istediğimiz animasyonşarı verebiliriz

    //----------------------------

    const boxVariant ={
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:0,
            transition:{
                delay:.5,
                when:"beforeChildren",
                staggerChildren: 0.5
    


            }
        }
    }

    const lisVariant={
        hidden:{
            x:"-10",
            opacity:0,
         
        },
        visible:{
            x:0,
            opacity:1,
        }
    }
 
  return (
    <div className='box-container'>
        <motion.div className='box'
            variants={boxVariant}
            animate="visible"
            initial="hidden"
   
        >
            {[1,2,3].map(box => {
                return <motion.li className='boxItem'
                    variants={lisVariant}
         
                ></motion.li>
            })}
        </motion.div>
    </div> 

  )
}

export default Box3




//when değerini kapsayıcıya vermek burada çok önemli çünkü biz ilk kapsayıcı gelsin daha sonra içindekiler gelsin diyoruz.
// staggerChildren değerini de whenle beraber kullanıyoruz ki içindeki itemler daha sonradan tane tane gelmesini sağlar
//staggerChildren değerini 0.5 yaptık ki her bir item 0.5 saniye arayla gelsin