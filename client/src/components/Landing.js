import React, { Component } from 'react';

import smithGod from '../images/picturegod.jpg'

export default class Landing extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Welcome to Gobannus</h1>
                </div>
                <img src={smithGod} alt='Celtic God of Smiths' style={{display: 'block', maxHeight: 800}}/>
            </div>
        )
    }
}