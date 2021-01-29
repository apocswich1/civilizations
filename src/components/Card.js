import React from 'react';

const Card = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
            <div className="card">
                <img src={`/images/${props.civilization.name}.jpg`} alt="" style={{height:'220px'}} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">Civilization: {props.civilization.name}</p>
                    <p className="card-text">Expansion: {props.civilization.expansion}</p>
                    <a href="#" onClick={() => props.dataById(props.civilization.id)} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary btn-block">Ver mas</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
