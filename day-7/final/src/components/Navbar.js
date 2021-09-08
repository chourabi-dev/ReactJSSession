
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFor: props.searchFor
        }
    }

    componentDidMount() {

    }



    render() {
        return (
            <div  >

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">MoviesFlix</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home" >Home</Link>
                                </li>


                            </ul>
                            <form className="d-flex">
                                {
                                    this.state.searchFor != null ?
                                        <div>
                                            <input onChange={(e) => {
                                                const value = e.target.value;
                                                this.state.searchFor(value);

                                            }} className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-warning" type="submit">Search</button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default NavBar;
