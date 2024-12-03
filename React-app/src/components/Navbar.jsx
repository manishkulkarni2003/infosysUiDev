import React from 'react'

const Navbar = (props) => {
    //or we can Destructure this
    // const Navbar =({name})
    return (
        <div>
            <ul className='nav'>
                <li>HOme</li>
                <li>About</li>
                <li>Contact</li>
                <li>Hello:{props.name}</li>
                {/* <li>Hello:{name}</li> */}
            </ul>
        </div>
    )
}

export default Navbar
