import React, { useState } from 'react'
import {  FaUser } from 'react-icons/fa'
 import { motion } from 'framer-motion'
 import './Navbar.css'

const Navbar = () => {

     const [isOpen, setIsOpen] = useState(true);
     const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <motion.div
                animate={{
                    width: isOpen ? "100%" : "90px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 11
                    }
                }}
                className='nav'>
                <div className='nav_container'>
                    <a href="#unitOfMeasure">SERVICENOW</a>
                    <p>Das, Bapi</p>
                    <div className='icon_container'>
                        <i><FaUser /></i>
                    </div>
                </div>
            </motion.div>
        </>

    )
}

export default Navbar
