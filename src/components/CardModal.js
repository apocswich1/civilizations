import React from 'react';

const CardModal = (props) => {
    return (
        <div className="col-12 mb-4">
            <div className="card">
                <img src={`/images/${props.civilization.name}.jpg`} alt="" style={{ height: '220px' }} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">Civilization: {props.civilization.name}</p>
                    <p className="card-text">Expansion: {props.civilization.expansion}</p>
                    <p className="card-text">Army type: {props.civilization.army_type}</p>
                    <p className="card-text">Unique units: {"[]"}</p>
                    <p className="card-text">Unique tech: {"[]"}</p>
                    <p className="card-text">Team bonus: {props.civilization.team_bonus}</p>
                    <p className="card-text">Civilization bonus:</p>
                    {props.civilization.civilization_bonus && props.civilization.civilization_bonus.map((el, i) => (
                        <p className="card-text" key={i} style={{ paddingLeft: "15px" }}>-{el}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardModal;
