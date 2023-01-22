import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { RickAndMortyAPI } from '../context/RickAndMortyContext'


import Characters from './Characters';
import Episodes from './Episodes';
import Locations from './Locations';

function Routers() {
    const {  filterText, setFilterText } = RickAndMortyAPI()

    return (
        <div>
            <Router>
                <div>
                    {/* Navbar Start */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient ">
                        <div className="container d-flex justify-content-center flex-row">
                            <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link className="navbar-brand text-light" to="/" > <img className='w-25' src="https://iconarchive.com/download/i106878/goodstuff-no-nonsense/free-space/rick.ico" alt="" /> </Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className="nav-link  active text-light" aria-current="page" to="/">Characters</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/episodes">Episodes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/locations" >Locations</Link>
                                    </li>
                                </ul>
                                {/* <form name="search" onSubmit={(e) => e.preventDefault()} className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form> */}
                                <div className="box">
                                    <form name="search">
                                        <input value={filterText} onChange={(e)=>setFilterText(e.target.value)} type="text" className="input" name="txt"  />
                                    </form>
                                    <i className="fas fa-search"></i>

                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}

                    <Switch>
                        <Route path="/locations" component={Locations} />
                        <Route path="/episodes" component={Episodes} />
                        <Route exact path="/" component={Characters} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routers