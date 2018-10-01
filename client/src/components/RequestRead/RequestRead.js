import React, { Component } from 'react';
import axios from '../../../axios-orders';
import input from '../UI/Input/Input';
import classes from './RequestRead.css'
import validator from 'validator';

class RequestRead extends Component {

  state = {
    orderForm: {
      seach: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seach...'
        },
        value: '',
        validation: {
          required: true,
          alphanumeric: true
        },
        valid: false,
        touched: false
      },
      formIsValid: false,
      loading: false
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.alphanumeric) {
      isValid = validator.isAlphanumeric(value) !== false && isValid;
    }

    return isValid;
  }

  inputChangeHandler = event => {
    let updatedFormElement = this.state.orderForm;

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;

    let formIsValid = updatedFormElement.valid;
    this.setState({ orderForm: updatedFormElement, formIsValid: formIsValid });
  }

  read() {
    axios.get(this.props.url)
      .then(response => {
        this.setstate({
          listItems: response.data
        }
        )
      }).catch(error => {
        return error;
      });
  }

  render() {
    return (
      <Input
        elementType={'input'}


      />
      <Button></Button>
    )
  }
}