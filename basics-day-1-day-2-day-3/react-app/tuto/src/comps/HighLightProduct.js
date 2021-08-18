function HighLightProduct(props){

    return(
        <div className="col-sm-6 col-md-4">
            <div className="card">
                <img src={props.photoURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    
                </div>
            </div>
        </div>
    );
}


export default HighLightProduct;