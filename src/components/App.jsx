import React from 'react';
import Table from './Table';


export default class App extends React.Component {
    render() {
        return (
            <div className="grid">
                <div className="row">
                    <div className="cell cell-align-center">Sould I Eat At McDonalds?</div>
                </div>
                <div className="row main">
                    <Table title="PROS"/>
                    <Table title="CONS"/>
                </div>
            </div>
        );
    }

};

