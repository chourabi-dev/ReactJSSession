import React from 'react';
import './App.css';
import Carrousel from './comps/Carrousel';
import ContactItem from './comps/ContactItem';
import ContactListItem from './comps/ContactListItem';
import FooterBloc from './comps/Footer';
import Highlights from './comps/Highlights';
import NavBar from './comps/NavBar';


class App extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         /*'title':'this is a title from the state object',
         'subtitle':'this is a subtitle from the state object'*/ 
         /*date: new Date(), 
         clicked: 0*/ 
         contacts : [ 
            { name:"chourabi taher",email:"tchourabi@gmail.com", phone:"44885566"  },
            { name:"jason",email:"tchourabi@gmail.com" , phone:"44885566"  },
            { name:"mark",email:"tchourabi@gmail.com" , phone:"44885566"  },
            { name:"ali",email:"tchourabi@gmail.com" , phone:"44885566"  },
            { name:"jane",email:"tchourabi@gmail.com" , phone:"44885566"  }, 
         ],

         query:""
      }; 
   }

   componentDidMount(){
     /*setInterval(()=>{
      this.setState({
         date: new Date()
      })
     },1000)*/
   }  
 
   render(){
      return(
         <div>
            
            <input type="search" onChange={ (e)=>{ 
               const recherche = e.target.value;
               this.setState({
                  query:recherche
               })
             } } />
            <ul>
               {
                   this.state.contacts.filter( (rc)=> rc.name.indexOf(this.state.query) != -1 ) .map((c)=>{
                      return (
                        <ContactItem name={c.name} email={c.email} phone={c.phone} />
                        

                      );
                   })
               }
            </ul>


            {
               /**
                * 
                * <h1>you have clicked on the clock { this.state.clicked} times </h1>
            <h1 onClick = { ()=>{  this.setState({ clicked: (this.state.clicked +1) })  } } > { this.state.date.toISOString() } </h1>
                */
            }


         </div>
      );
   }
 
}

export default App;
