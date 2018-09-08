import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button'
import classes from './Form.css';
import validator, { isAlpha, isEmail, isAlphanumeric } from 'validator';

class Form extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                    isAppha: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    isAlphanumeric: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            job: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Patient', displayValue: 'Patient' },
                        { value: 'Doctor', displayValue: 'Doctor' },
                        { value: 'Nurse', displayValue: 'Nurse' },
                        { value: 'Receptionist', displayValue: 'Receptionist' },
                        { value: 'Pharmacist', displayValue: 'Pharmacist' },
                        { value: 'Accountant', displayValue: 'Accountant' },
                        { value: 'Patient', displayValue: 'Patient' },
                    ]
                },
                value: '',
                valid: false,
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isAlpha) {
            isValid = isAlpha(value) && isValid;
        }
        if (rules.isEmail) {
            isValid = isEmail(value) && isValid;
        }
        if (rules.isAlphanumeric) {
            isValid = isAlphanumeric(value) && isValid;
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