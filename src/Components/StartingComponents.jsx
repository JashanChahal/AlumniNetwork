import React,{Fragment} from 'react'
export default function StartingComponent(){
    return (
        <div className="container" >
            <div className="row justify-content-md-around">
                <Card  className="col" name="Alumni" imgUrl='https://cdn3.iconfinder.com/data/icons/education-flat-icon-1/130/148-512.png'/> 
                <Card className="col" name="College" />
                <Card className="col" name="Authority" />
                </div>
        </div>
    )    
}

function Card(props){
    var _style={
        width: '200px',
        height: '200px'
    }
    return (
        <div className="card">
            <img src={props.imgUrl} style={_style} className="card-img-top " alt="Image" /> 
            <div className="card-body">
                 <h5 className="card-title">{props.name}</h5>
            </div>
        </div>

    )
}
