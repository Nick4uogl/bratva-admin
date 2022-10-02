import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './Navbar.scss'

function Navbar() {
    return (
        <div className='__container'>
            <nav className="nav">
                <NavLink className="nav__link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })} to={"/"} end>Выкладывание проекта</NavLink>
                <NavLink className="nav__link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })} to={"statistic"} >Статистика</NavLink>
                <Link className="nav__link">Выход</Link>
            </nav>
        </div>
    )
}

export default Navbar