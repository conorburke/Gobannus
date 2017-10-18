import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import smithGod from '../images/picturegod.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div id='landing-div'>
                <h1 id='welcome-header'>Welcome to Gobannus</h1>
                <div id='landing-content'>
                    <img src={smithGod} alt='Celtic God of Smiths' style={{border: '5px solid black'}}/>
                    <div>
                        <Panel collapsible defaultExpanded header="Gobannus is a one-stop shop for renting tools">
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