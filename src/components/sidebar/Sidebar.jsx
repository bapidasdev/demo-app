import React, { useState } from 'react'
import { motion } from 'framer-motion'

import {  FaLock, FaUser } from "react-icons/fa";
import { MdMessage, MdDashboard } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FaSuitcaseRolling, FaAnglesRight } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { CgLogIn } from "react-icons/cg";
import { FaAngleDoubleLeft } from "react-icons/fa";

import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/logo2.png'


const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <MdDashboard />,
    },
    {
        path: "/clientLiabilities",
        name: "client Liabilities",
        icon: <FaUser />,
    },
    {
        path: "/invoicingReceiption",
        name: "invoicing Receiption",
        icon: <MdMessage />,
    },
    {
        path: "/listManagement",
        name: "list Management",
        icon: <BiAnalyse />,
    },
    {
        path: "/reports",
        name: "reports",
        icon: <TbReportSearch />,
    },
    {
        path: "/ruleSet",
        name: "ruleSet ",
        icon: <FaUser />,
    },
    {
        path: "/ruleSetGroup",
        name: "ruleSetGroup",
        icon: <FaLock />,
    },
    {
        path: "/settings",
        name: "settings",
        icon: <IoSettings />,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "profile",
                icon: <FaUser />,
            },
            {
                path: "/settings/login",
                name: "login",
                icon: <CgLogIn />,
            },
            {
                path: "/settings/logout",
                name: "logout",
                icon: <TbLogout2 />,
            },
        ]
    },
    {
        path: "/caseManagement",
        name: "case Management",
        icon: <FaSuitcaseRolling />,
    },
]

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className='main-container'>
            <motion.div
                animate={{
                    width: isOpen ? "200px" : "90px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 11
                    }
                }}
                className='sidebar'
            >
                <div className='top_section'>
                    {isOpen && <img src={logo} alt="logo" id='img' />}
                    <div className="bars">
                        {isOpen ? <FaAngleDoubleLeft onClick={toggle}  /> : <FaAnglesRight onClick={toggle}/>}
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
            <main>{children}</main>
        </div>
    )
}

export default Sidebar
