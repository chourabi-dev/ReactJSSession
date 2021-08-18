import HighLightProduct from "./HighLightProduct";

function Highlights(){

    return(
        <section className="my-5">
            <div className="container">
                <div className="text-center">
                    <h3>OUR HIGHLITHED PRODUCT</h3>
                    
                    <div className="row">
                        <HighLightProduct photoURL="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.1677798981.1628812800" title="PRODUCT A" />
                        <HighLightProduct photoURL="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.1677798981.1628812800" title="PRODUCT B" />
                        <HighLightProduct photoURL="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.1677798981.1628812800" title="PRODUCT C" />
                        
                    </div>



                </div>
            </div>
        </section>
    );
}


export default Highlights;