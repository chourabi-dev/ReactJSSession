
import React from 'react';
import NavBar from '../components/Navbar';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: props.match.params.id,
            movie: null
        }
    }

    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=s0kggkjn7vttjcttg0l9fj8b73");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + this.state.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.data.movie != null) {
                    this.setState({ movie: result.data.movie })
                }
            })
            .catch(error => console.log('error', error));
    }



    render() {
        return (
            <div  >

                <NavBar searchFor={null} />


                <div className="container mt-5">
                    {
                        this.state.movie != null ?
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src = {this.state. movie.large_cover_image}  className="w-100" />
                                </div>
                                <div className="col-sm-8">
                                    <h1> {this.state.movie.title} </h1>
                                    <p>
                                        {
                                            this.state.movie.description_full
                                        }
                                    </p>

                                    <div className="mt-5">
                                        {
                                            this.state.movie.torrents.map((t)=>{
                                               return  <a className="btn btn-primary" href={this.state. movie.large_cover_image} download>{t.quality}</a>
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            :
                            <div className="text-center">
                                chargement ...
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Movie;
