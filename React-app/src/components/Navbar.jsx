import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    //or we can Destructure this
    // const Navbar =({name})
    return (
        <div>
            <ul className='nav'>
                <li>HOme</li>
                <li><Link to='/tictactoe'>Tictactoe</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li>Hello:{props.name}</li>
                
                {/* <li>Hello:{name}</li> */}
            </ul>
        </div>
    )
}

export default Navbar
