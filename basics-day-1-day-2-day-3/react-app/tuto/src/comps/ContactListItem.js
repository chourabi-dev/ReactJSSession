function ContactListItem(props){

    console.log(props);

    return(
        <li>
            { props.name }  <br/>
           <small>{props.email}</small><br/>
           <small>{props.phone}</small>
         </li>

    );
}


export default ContactListItem;