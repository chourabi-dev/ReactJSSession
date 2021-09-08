import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
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



  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/home" component={ Home } exact />
          <Route path="/movie/:id" component={ Movie } exact />
          
          
        </Switch>
      </Router>
    );
  }
}

export default App;
