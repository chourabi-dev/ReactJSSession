import React from 'react';

class Child extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            message: props.message,
            responseFunction : props.response
            //const fn = ()=>{ return 1 }
            //fn()
        }
    }
    render(){
        return(
            <div>
                <h1>Hi i'm the child</h1>
                <p> {this.state.message} </p>
                <button onClick = { 
                    ()=>{
                        this.state.responseFunction("i'm fine dad !!!");
                    }
                 } >answare</button>
            </div>
        );

    }

}

export default Child;