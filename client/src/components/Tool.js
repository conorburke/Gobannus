import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap'

class Tool extends Component {
    render() {
        return (
            <ListGroupItem style={{ textAlign: 'center' }}>{this.props.type}</ListGroupItem>
        )
    }
}

export default Tool;