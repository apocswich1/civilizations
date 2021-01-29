import React, { Component } from 'react';
import data from '../data';

class AllRequest extends Component {

    getResults = () => {

        const civilizations = this.props.civilizations ? this.props.civilizations : data.civilizations;
        if (civilizations.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {civilizations.map((item, i) => (
                            <div className="grid" key={i}>
                            <div className="col-100">
                              <div className="block gutter text-left">
                                <p>Id: {item.id}</p>
                                <p>Civilization: {item.name}</p>
                                <p>Expansion: {item.expansion}</p>
                                <p>Army type: {item.army_type}</p>
                                <p>Unique units: {"[]"}</p>
                                <p>Unique tech: {"[]"}</p>
                                <p>Team bonus: {item.team_bonus}</p>
                                <p>Civilization bonus:</p>
                                {item.civilization_bonus.map((el, i) => (
                                    <p key={i} style={{paddingLeft:"15px"}}>-{el}</p>
                                ))}
                              </div>
                              <hr style={{backgroundColor:"#ffffff"}}/>
                            </div>
                            <div className="clear"></div>
                          </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                { this.getResults()}
            </React.Fragment>
        )
    }
}




export default AllRequest;
