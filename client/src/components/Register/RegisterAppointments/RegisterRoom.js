import React, { Component } from 'react';
import input from '../../UI/Input/Input';

import Button from '../../UI/button';

class From extends Component {
  state = {
    orderFrom: {
      RoomType: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Room type',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      RoomIndentification: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Room Identification'
        },
        value: '',
        validation: {
          requied: true
        },
        valid: false,
        touched: false
      },
      period: {
        elementType: 'input',
        elementCongif: {
          type: 'data',
          placeholder: 'The time of alocation.'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      }

    },
    formIsValid: false,
    loading: false
  }
  checkValidaty(value, rules) {
    let isValid = true;

    if (rules.requied) {
      idValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    
    return isValid;
  }
  inputChangeHandler = (event, inputIdentifier) => {
    const updateOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updateOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, fromIsValid: formIsValid });    
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
      //eslint-disable-next-line
      let form = (
        <form>
          {formElementsArray.map(formElement => {
            return <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            value={formElement.config.value}
            invalid={!formElement.config.value}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, fromElement.id)}/>
          })}
          <Button btnType="Success" disabled={!this.state.formIsValid}>SEND</Button>
        </form>
      );
      return (
        <div className={classes.Form}>
             {form}
        </div>
      )
    }
  }
}
export default Form;
