import React, { Component } from 'react';

import smithGod from '../images/picturegod.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Welcome to Gobannus</h1>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', maxHeight: 500}} >
                    <img src={smithGod} alt='Celtic God of Smiths' style={{maxWidth: 600, height: 'auto'}}/>
                    <div style={{flex: 4}}>
                        <h3>Gobannus is a one-stop shop for renting tools</h3>
                        <ul style={{display: 'block'}}>
                            <li>Find tools in your area</li>
                            <li>Set up time and place for rental</li>
                            <li>Payment taken care of in app</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}