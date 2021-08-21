import logo from './logo.svg';
import './App.css';
import react from 'react';
import Parent from './components/Parent';

const style = {
  btnStyle : { color:'white', border:0,backgroundColor:'blue',padding:15 },
  customStyle : {  }
}


class App extends react.Component {

  constructor(props){
    super(props);
    this.state = {
      inputX:'',
      inputY:'',
      somme:null,
      op:'-1'
      
    }
  }
  inputChange(event){
    const newValue = event.target.value;
    this.setState({
      inputX : newValue
    })
  }
  inputChangeY(event){
    const newValue = event.target.value;
    this.setState({
      inputY : newValue
    })
  }
  render(){
    return (
      <div className="App">
          <label>Value X: {this.state.inputX} </label><br/>
          


          <input className={ this.state.inputX === '' ? 'danger c1 c2 c3' : 'success' } type="number" onChange={ (event)=>{ this.inputChange(event) } }    value={ this.state.inputX }  /><br/>


        

          <select onChange={ (event)=>{ this.setState({op:event.target.value}) } }    value={ this.state.op } >
            <option value="-1">Please choose</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            
          </select><br/>


          <label style={  { color: this.state.inputY === '' ? 'red' : 'green' }  } >Value Y: {this.state.inputY} </label><br/>




          <input    type="number"  onChange={ (event)=>{ this.inputChangeY(event) } }   value={ this.state.inputY }  /><br/>

          <button

          style = { style.btnStyle }

          disabled = { ! ( this.state.inputX !== '' && this.state.inputY !== '' ) }
          
          
          onClick = { ()=>{

           switch (this.state.op) {
             case '+':
              this.setState({
                somme: ( Number(this.state.inputX ) + Number(this.state.inputY) )
              })
               
               break;

               case '-':
                this.setState({
                  somme: ( Number(this.state.inputX ) - Number(this.state.inputY) )
                })
                 
                 break;   
                 case '*':
                  this.setState({
                    somme: ( Number(this.state.inputX ) * Number(this.state.inputY) )
                  })
                   
                   break;
             default:
               break;
           }

          } } >CALCULER</button>

          {
            this.state.somme === null ? <div></div> : <div> {this.state.somme} </div>
          }
          


      </div>
    );
  }
}

export default App;
