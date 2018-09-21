import React, { Component } from 'react';
import axios from ',,/../../axios-order';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button'
import classes from './Form.css';
//import qs from 'qs';


class CreateMedicine extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            batch: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Batch'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            quantity: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Quantity of medicines'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                },
                valid: false,
                touched: false
            },
            expiration: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'The date of expiration'
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

    sendMedicineToServer = () => {
        const url = '/register-medicine';
        let date = {},
        
        auth = {
            username: Config.clientId,
            password: Config.clientSecret
        };

        for(let key in this.state.orderForm){
            date[key] = this.state.orderForm[key].value;
        }
        date = JSON.stringify(date);
        axios.post( url , date, { headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }, auth: this.state.user.token
        }
    )
            .then( response => {
                // Redux with confirmation. 
            })
            .catch( error => {
                // Redux with error.
            } );
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
                <Button btnType="Success" clicked={this.props.sendMedicineToServer} disabled={!this.state.formIsValid}>SEND</Button>
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
