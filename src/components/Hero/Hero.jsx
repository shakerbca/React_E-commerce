import React from 'react'
import css from './Hero-module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {

  const transition = {duration: 3,type: "spring"}
  return (
    <div className="container">
      

      {/* left side */}
      <div className="h_sides">
        <span className="text1">skin protection cream</span>

        <div className="text2">
          <span>Trendy Collection</span>
          <span>{" "}
            Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
        </div>
      </div>

      {/* middle side hero image  */}
      <div className="wrapper">

        {/* blue circle  */}
        <motion.div
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        className="blueCircle" transition={transition}></motion.div>

        {/* hero image  */}
        <motion.img
        transition={transition}
        initial={{bottom: "-2rem"}}
        whileInView={{bottom: "0rem"}}
        
        src={HeroImg} alt="" width={600} />

        {/* cart div animating  */}
        <motion.div
        transition={transition}
        initial={{right : "4%"}}
        whileInView={{right: "-2%"}}
        
        className="cart2">
          <RiShoppingBagFill/>

          <div className="signup">
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight/>
            </div>
          </div>
        </motion.div>
      </div>


      {/* Right side  */}

      <div className="h_sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>

        </div>
        <div className="customers">
          <span>100k</span>
          <span>Happy Customer</span>

        </div>

      </div>
    </div>
  )
}

export default Hero