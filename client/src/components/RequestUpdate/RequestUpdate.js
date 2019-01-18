import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../UI/button/Button';

class RequestUpdate extends Component {

  update() {
    const propertiesForUpdate = this.props.propertiesForUpdate;

    if(typeof propertiesForUpdate  !== 'object') {
      // error
      return;
    }

    axios.put(this.props.path,
      propertiesForUpdate
    ).then(response => {
      this.props.successRequestUpdate();
    }
    ).catch(error => {
      this.props.errorRequestUpdate(error);

    }
    );
  }

  render() {
    return (
      <Button btnType={"Send"} disabled={false} clicked={this.update}>Send</Button>
    )
  }
}

export default RequestUpdate;
