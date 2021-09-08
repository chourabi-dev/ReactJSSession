import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getListArtciles();
  }


  getListArtciles() {
    // HTTP

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          articles: result
        })
      })
      .catch(error => console.log('error', error));


  }


  render() {
    return (
      <div  >
        <ul>
          {
            this.state.articles.map((a) => {
              return (
                <li key={a.id}> 
                  <h3> {a.title} </h3>
                  <p>
                    {a.body}
                  </p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
