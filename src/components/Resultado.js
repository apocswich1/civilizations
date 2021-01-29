import React, { Component } from 'react';
import Card from './Card';

class Resultado extends Component {

    getResults = () => {

        const civilizations = this.props.civilizations;
        if (civilizations.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {civilizations.map((item, i) => (
                        i < 9 ? (
                            <Card
                                dataById={this.props.dataById}
                                key={item.id}
                                civilization={item}
                            />
                        ) : ('')

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




export default Resultado;
