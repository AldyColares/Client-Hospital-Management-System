import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button'
import classes from './Form.css';
import validator from 'validator';

class Form extends Component {
    state = {
        orderForm: {
          patientId: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Indentification Patient',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            recordNo: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Number Record'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            discription: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                },
                valid: false,
                touched: false
            },
            appoinmest: {
                elementType: 'input',
                elementConfig: {
                    type: 'string',
                    placeholder: 'appoinmest'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        // eslint-disable-next-line
        let form = (
            <form>
                {formElementsArray.map(formElement => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
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

export default Form;
