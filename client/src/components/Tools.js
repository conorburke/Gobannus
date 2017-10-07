import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

import Tool from './Tool';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {tools: []}
    }

    componentDidMount() {
        axios.get('api/tools').then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({tools: res.data});
            console.log(this.state.tools);
        });
        // console.log(tools);
    }
    
    render() {
        return (
            <ListGroup>
                {this.state.tools.map(tool => {
                    return <Tool key={tool._id} type={tool.type} />;
                })}
            </ListGroup>
            
        )
    }
}

export default Tools;