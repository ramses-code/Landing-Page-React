import React from 'react'

const Cards = (props) => {

    return (
            <div className="card-group col-sm-12 col-md-6 col-lg-3 px-0" >
                
                <img src={props.img} className="card-img-top"  style={{height: "50%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
                
            </div>
    )
}

export default Cards