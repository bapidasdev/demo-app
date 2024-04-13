import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { IoIosColorPalette } from "react-icons/io";

import { TbBrandAppleArcade } from "react-icons/tb";
import {  FaAnglesRight } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { MdAdUnits } from "react-icons/md";

import { RiFontSize2 } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";
import { MdHardware } from "react-icons/md";

import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/logo2.png'



const routes = [
    {
        path: "/",
        name: "Product Manager",
        icon: <MdHardware />,
    },
    {
        path: "/productList",
        name: "Product List",
        icon: <FaRegListAlt />,
    },
    {
        path: "/category",
        name: "Category",
        icon: <MdCategory />,
    },
    {
        path: "/subCategory",
        name: "SubCategory",
        icon: <TbMenuDeep />,
    },
    {
        path: "/brand",
        name: "Brand",
        icon: <TbBrandAppleArcade />,
    },
    {
        path: "/size",
        name: "Size ",
        icon: <RiFontSize2 /> ,
    },
    {
        path: "/colour",
        name: "Colour",
        icon: <IoIosColorPalette />,
    },
    {
        path: "/unitOfMeasure",
        name: "Unit of Measure",
        icon: <MdAdUnits />,  
    },
]

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className='main-container'>
            <motion.div
                animate={{
                    // width: isOpen ? "200px" : "90px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 11
                    }
                }}
                className='sidebar'
                style={{flex: isOpen ? 1 : 0.3}}
            >
                <div className='top_section'>
                    {isOpen && <img src={logo} alt="logo" id='img' />}
                    <div className="bars">
                        {isOpen ? <FaAngleDoubleLeft className='leftArrow' onClick={toggle}  /> : <FaAnglesRight  onClick={toggle}/>}
                    </div>
                </div>
                <hr />

                <section className='routes'>
                    {routes.map((route, index) => {
                        return (
                            <NavLink to={route.path} key={index} className='link'>
                                <div className='icon'>
                                    {route.icon}
                                </div>
                                <div className='link_text '>
                                    {isOpen && route.name}
                                </div>
                            </NavLink>
                        )
                    })}
                </section>
            </motion.div>
            <main style={{flex: 4}}>{children}</main>
        </div>
    )
}

export default Sidebar
