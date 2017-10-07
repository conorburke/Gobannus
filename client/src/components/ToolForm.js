import React, { Component } from 'react';

class ToolForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} action='/api/tools' method='post'>
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