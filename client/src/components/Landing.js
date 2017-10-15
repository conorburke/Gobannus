import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import smithGod from '../images/picturegod.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Welcome to Gobannus</h1>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}} >
                    <div style={{display: 'flex', flexDirection: 'row', maxHeight: 480}}>
                        <img src={smithGod} alt='Celtic God of Smiths' style={{height: 'auto', maxWidth: 'auto', border: '5px solid black'}}/>
                    </div>
                    <div style={{textAlign: 'center', width: '40%'}}>
                        {/* <h3>Gobannus is a one-stop shop for renting tools</h3>
                        <ul style={{display: 'block'}}>
                            <li>Find tools in your area</li>
                            <li>Set up time and place for rental</li>
                            <li>Payment taken care of in app</li>
                        </ul> */}
                        <Panel style={{margin: 10}} collapsible defaultExpanded header="Gobannus is a one-stop shop for renting tools">
                            <ListGroup fill>
                                <ListGroupItem>Find tools in your area</ListGroupItem>
                                <ListGroupItem>Set up time and place for rental</ListGroupItem>
                                <ListGroupItem>Payment taken care of in app</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </div>
                </div>
                
            </div>
        )
    }
}