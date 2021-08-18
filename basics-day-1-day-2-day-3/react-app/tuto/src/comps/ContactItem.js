import React from 'react';

class ContactItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            phone: props.phone,
            email: props.email,


            isShowed: false
        }
    }



    render(){
        return(
            <li>
                <h3>{this.state.name}</h3>
                <p>
                    { this.state.email }
                </p>

                {
                    this.state.isShowed === false ?<button onClick={ ()=>{ this.setState({ isShowed: true }) } } >show phone number</button> : <span>{this.state.phone}</span>
                }

                
            </li>
        );
    }

}

export default ContactItem;