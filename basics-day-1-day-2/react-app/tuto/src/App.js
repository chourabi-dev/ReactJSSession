import './App.css';
import Carrousel from './comps/Carrousel';
import ContactListItem from './comps/ContactListItem';
import FooterBloc from './comps/Footer';
import Highlights from './comps/Highlights';
import NavBar from './comps/NavBar';




function App() {
 

  return (

     <div>
       {
         /**
          * <button className="btn btn-primary" >click me </button>


       <h3>Contact List:</h3>
       <ul>

          <ContactListItem name="chourabi taher from props" email="tchourabi@gmail.com" phone="11225588" />
          <ContactListItem name="test user" email="test@gmail.com" phone="99887744" />
          
          


       </ul>
          */
       }


       <NavBar/>

       <Carrousel img="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"/>

       <Highlights />

       <FooterBloc/>



     </div>
  );
}

export default App;
