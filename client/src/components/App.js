import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Form = () => <h2>Form</h2>

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/tools' component={Dashboard} />
                        <Route path='/tools/new' component={Form} />
                    </div>
                </BrowserRouter>
            </div>
        ); 
    }
}