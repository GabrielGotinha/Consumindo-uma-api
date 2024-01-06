import { Link } from "react-router-dom"
import './header.css'
import Back from '../../images/back-button.svg'

function Header (){
    return (
        <header>
            <div className="container">

                <Link to="/">
                    <img src={Back} style={{width: "50px"}}/>
                </Link>
            </div>
        </header>
    )
}

export default Header