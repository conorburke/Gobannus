import React, { Component } from 'react';
import axios from 'axios';

class ToolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {tool: ''};
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({tool: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
    //   const data = new FormData(event.target);
    //   console.log(data);
        console.log(this.state.tool);
        // axios({
        //     url: '/api/tools',
        //     method: 'POST',
        //     body: {
        //         tool: this.state.value
        //     }
        // });
        const { tool } = this.state ;
        axios.post('/api/tools', {tool}).then(window.location = '/tools');
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name='tool' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ToolForm;