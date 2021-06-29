import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [toggle, setToggle] = useState(false)

    const onCl = () => {
        setToggle(toggle => !toggle)
    }
    
    return (
        <div className={toggle && "body-pd"}>
            <header className={toggle ? "header body-pd" : "header"} id="header">
                <div className={toggle ? "header_toggle bx-x" : "header_toggle"} onClick={onCl}> 
                    <i className={toggle ?  "fas fa-times" :"fas fa-bars"} id="header-toggle"></i> 
                </div>
            </header>
            <div className={toggle ? "l-navbar show" : "l-navbar"} id="nav-bar">
                <nav className="nav">
                    <div> 
                        <a href="#" className="nav_logo"> <i className="fas fa-compass"></i> <span className="nav_logo-name">Меню</span> </a>
                        <div className="nav_list"> 
                            <Link to="/cranes" className="nav_link active"> <i className="fas fa-columns"></i> <span className="nav_name">Краны</span> </Link> 
                            <Link to="/add-crane" className="nav_link"> <i className="fas fa-edit"></i> <span className="nav_name">Добавить кран</span> </Link> 
                            <a href="#" className="nav_link"> <i className="fas fa-user"></i> <span className="nav_name">Пользователи</span> </a> 
                        </div>
                    </div> 
                    <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">Выйти</span> </a>
                </nav>
            </div>

            <div className="height-100 bg-light main-component">
                <Form />
            </div>
        </div>
    )
}

export default Sidebar
