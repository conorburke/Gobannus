import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import ToolForm from './ToolForm';
import Tools from './Tools';

// const Dashboard = () => <h2>Dashboard</h2>
// const Form = () => <h2>Form</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/tools' component={Tools} />
                        <Route exact path='/tools/new' component={ToolForm} />
                    </div>
                </BrowserRouter>
            </div>
        ); 
    }
}

export default connect(null, actions)(App);