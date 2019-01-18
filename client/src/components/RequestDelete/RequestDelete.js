import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../UI/button/Button';

class RequestDelete extends Component {

  delete() {
    const path = this.props.path,
      id = this.props.id;

    axios.delete(path,
      { params: { id } }
    )
      .then(response => {
        this.props.successRequestDelete();
      })
      .catch(error => {
        this.props.errorRequestDelete(error);
      });
  }

  render() {
    return (
      <Button btnType={"Send"} disabled={false} clicked={this.delete}>Delete</Button>
    )
  }
}

export default RequestDelete;
