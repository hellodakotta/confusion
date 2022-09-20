import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label, Row, FormFeedback} from "reactstrap";
import {Link} from "react-router-dom";


const Contact = (props) => {

    let [fieldsObj, updateFields] = useState(
        {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            contactType: 'phone',
            message: '',
            agree: false
        }
    );

    let [isTouched, setTouched] = useState(
        {
            firstname: false,
            lastname: false,
            phone: false,
            email: false
        }
    );

    const handleInputChange = (e) => {
        const target = e.target;
        const field = target.getAttribute('name');
        const fieldType = target.getAttribute('type');
        const value = (fieldType === 'checkbox') ? target.checked : target.value;

        updateFields((prevState => ({
            ...prevState,
            [field]: value
        })));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Current State is${JSON.stringify(fieldsObj)}`);
        alert(`Current State is${JSON.stringify(fieldsObj)}`);
    }

    const handleBlur = (e) => {
        const target = e.target;
        const field = target.getAttribute('name');
        setTouched(prevState => ({
            ...prevState,
            [field]: true
        }));
    }

    const validate = (firstname, lastname, phone, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            phone: '',
            email: ''
        };

        if (isTouched.firstname) {
            if (!firstname) {
                errors.firstname = 'First name is empty';
            } else if (firstname.length < 2) {
                errors.firstname = 'First name should be >= 2 symbols.';
            } else if (firstname.length > 12) {
                errors.firstname = 'First name should be <= 12 symbols.';
            }
        }

        if (isTouched.lastname) {
            if (!lastname) {
                errors.lastname = 'Last name is empty';
            } else if (lastname.length < 2) {
                errors.firstname = 'Last name should be >= 2 symbols.';
            } else if (lastname.length > 20) {
                errors.lastname = 'Last name should be <= 20 symbols.';
            }
        }

        if (isTouched.phone) {
            const onlyDigitsReg = /^\d+$/;
            if (!onlyDigitsReg.test(phone)) {
                errors.phone = 'Phone should contain only numbers.';
            } else if (phone.length !== 8 && phone.length !== 12) {
                errors.phone = 'Phone should contain 8 or 12 numbers.';
            }
        }

        if (isTouched.email) {
            const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailReg.test(email)) {
                errors.email = 'Email has incorrect format.';
            }
        }

        return errors;
    }

    const errors = validate(fieldsObj.firstname, fieldsObj.lastname, fieldsObj.phone, fieldsObj.email);

    return (
        <div className="container">
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={`/home`}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Contact Us</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br/>
                        Clear Water Bay, Kowloon<br/>
                        HONG KONG<br/>
                        <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                        <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i
                            className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i
                            className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <Row className="row-content">
                <Col xs="12">
                    <h3>Send Us Your Feedback</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md="2">First Name</Label>
                            <Col md="10">
                                <Input type="text"
                                       id="firstname"
                                       name="firstname"
                                       placeholder="First Name"
                                       value={fieldsObj.firstname}
                                       valid={isTouched.firstname && errors.firstname === ''}
                                       invalid={errors.firstname !== ''}
                                       onChange={handleInputChange}
                                       onBlur={handleBlur}
                                />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md="2">Last Name</Label>
                            <Col md="10">
                                <Input type="text"
                                       id="lastname"
                                       name="lastname"
                                       placeholder="Last Name"
                                       value={fieldsObj.lastname}
                                       valid={isTouched.lastname && errors.lastname === ''}
                                       invalid={errors.lastname !== ''}
                                       onChange={handleInputChange}
                                       onBlur={handleBlur}
                                />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phone" md="2">Your Phone</Label>
                            <Col md="10">
                                <Input type="text"
                                       id="phone"
                                       name="phone"
                                       placeholder="Your Phone"
                                       value={fieldsObj.phone}
                                       valid={isTouched.phone && errors.phone === ''}
                                       invalid={errors.phone !== ''}
                                       onChange={handleInputChange}
                                       onBlur={handleBlur}
                                />
                                <FormFeedback>{errors.phone}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md="2">Email</Label>
                            <Col md="10">
                                <Input type="email"
                                       id="email"
                                       name="email"
                                       placeholder="Email"
                                       value={fieldsObj.email}
                                       valid={isTouched.email && errors.email === ''}
                                       invalid={errors.email !== ''}
                                       onChange={handleInputChange}
                                       onBlur={handleBlur}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                               id="agree"
                                               name="agree"
                                               placeholder="agree"
                                               value={fieldsObj.agree}
                                               onChange={handleInputChange}
                                        /> {' '} May we contact you?
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input type="select"
                                       name="contactType"
                                       value={fieldsObj.contactType}
                                       onChange={handleInputChange}>
                                    <option value="phone">Tel.</option>
                                    <option value="email">Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md="2">Your Feedback</Label>
                            <Col md="10">
                                <Input type="textarea"
                                       id="message"
                                       name="message"
                                       rows="12"
                                       value={fieldsObj.message}
                                       onChange={handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;