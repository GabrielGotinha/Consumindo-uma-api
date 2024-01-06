
import { Link } from "react-router-dom"
import HeaderMain from "../../components/headermain/headermain"

import More from "../../images/more.svg"

import './feed.css'

function feed(){
    return (
        <div>
            <HeaderMain/>
            <main>
                <div className="cards">
                    <div className="card">
                        <header >
                            <h2>Consumindo uma api</h2>
                            <img src={More}/>
                        </header>
                        <div className="line"></div>
                        <p>conteudo</p>
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to="/edit">
                                <button>Edit</button>
                                </Link>
                            </div>
                            <div className="btn-readmore">
                               <Link to="/lermais">
                               <button>Read More</button>
                               </Link>
                            </div>
                            <div className="btn-delete">                                <button>Delete</button>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default feed