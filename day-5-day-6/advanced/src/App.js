 
import React from 'react';
 

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        articles: [],
        isLoading: true
    }
  }



  getListArticles(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                articles : result,
                isLoading: false
            })
        })
        .catch(error => console.log('error', error));
  }

  componentDidMount(){
      this.getListArticles();
  }

  render(){
    return (
      <div  >

          <h3>List des articles:</h3>
          {
              this.state.isLoading === true 
              ?

              <h1>Chargement...</h1>
              :

              <ul>
              {
                  this.state.articles.map((a)=>
                  <li key={a.id}>
                  <p>
                      <strong>{a.title}</strong> <br/>
                      {a.body}
                  </p>
              </li>)


              }
          </ul>

          }

         
      </div>
    );
  }
}

export default App;
