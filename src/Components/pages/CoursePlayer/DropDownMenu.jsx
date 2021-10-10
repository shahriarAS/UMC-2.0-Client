import React, { useState } from 'react'

function DropDownMenu(props) {
    let { title, chapterStatus, height } = props
    const [showMenu, setShowMenu] = useState(false)
    const [dropStatus, setDropStatus] = useState(false)

    const toggleMenu = () => {
        setShowMenu(showMenu ? false : true)
    }

    return (
        <li className="font-semibold text-md list-none block">
            <div className={`flex items-center justify-between mb-2 cursor-pointer ${chapterStatus && chapterStatus == "running" ? "text-blue-400" : chapterStatus == "completed" ? "text-green-400" : ""}`} onClick={toggleMenu}>
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={showMenu ? "dropdown-menu rotate-90" : "dropdown-menu"} viewBox="0 0 24 24">
                    <path fill="white" d="M0 0h24v24H0V0z" /><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
            </div>
            <ul className={`ml-4 overflow-hidden dropdown-menu font-normal transition-all duration-300 ${showMenu ? height : "h-0"}`}>
                {props.children}
            </ul>
        </li>
    )
}

export default DropDownMenu
