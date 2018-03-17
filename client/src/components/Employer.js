import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableEmployer from './TableEmployer';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      percetegens: '',
      employees: []
    };
  }

  componentDidMount() {
    axios.get('/employer')
      .then(res => {
        this.setState({ employees: res.data });
        console.log(this.state.employees);
      });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, percetegens } = this.state;
    axios.post('/employer', { name, lastName, percetegens })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, lastName, percetegens } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD employer
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>            
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="lastName">lastName:</label>
                <input type="number" class="form-control" name="lastName" value={latName} onChange={this.onChange} placeholder="last name" />
              </div>
              <div class="form-group">
                <label for="percetegens">percetages:</label>
                <input type="text" class="form-control" name="percetegens" value={percetegens} onChange={this.onChange} placeholder="percetegens" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
        <TableEmployer/>
      </div>
    );
  }
}
