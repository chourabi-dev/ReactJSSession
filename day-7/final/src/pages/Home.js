
import React from 'react';
import NavBar from '../components/Navbar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }

        this.searchFor = this.searchFor.bind(this);
    }

    componentDidMount() {
        this.getMoviesList();
    }


    getMoviesList() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=s0kggkjn7vttjcttg0l9fj8b73");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json", requestOptions)
            .then(response => response.json())
            .then(result => {

                this.setState({ movies: result.data.movies })
            })
            .catch(error => console.log('error', error));
    }


    goToMovieDetails(id) {
        console.log(id);
        this.props.history.push('/movie/' + id)
    }


    searchFor(query){
        console.log(query);

        // HTTP params url !!
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=s0kggkjn7vttjcttg0l9fj8b73");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json?query_term="+query, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.data.movies != null) {
                this.setState({ movies: result.data.movies })
            }
        })
        .catch(error => console.log('error', error));
    }




    render() {
        return (
            <div  >
                <NavBar searchFor={this.searchFor} />



                <div className="container mt-5">
                    <div className="row">
                        {
                            this.state.movies.map((m) => {
                                return (
                                    <div className="col-sm-6 col-md-3">

                                        <div onClick={() => {
                                            this.goToMovieDetails(m.id)
                                        }} className="movie-holder" style={{ backgroundImage: 'url(' + m.large_cover_image + ')' }}>

                                        </div>

                                    </div>

                                );
                            })
                        }

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
