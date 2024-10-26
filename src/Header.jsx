import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/callback">useCallback</NavLink>
                    </li>
                    <li>
                        <NavLink to="/refs">useRef</NavLink>
                    </li>
                    <li>
                        <NavLink to="/useeffect">useEffect</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usereducer">useReducer</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header