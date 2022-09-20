import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Form, FormGroup, Input, Label, Row, Button} from "reactstrap";
import {Link} from "react-router-dom";


const Contact = (props) => {

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
                                       onChange={handleInputChange}
                                />
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
                                       onChange={handleInputChange}
                                />
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
                                       onChange={handleInputChange}
                                />
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
                                       onChange={handleInputChange}
                                />
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
                                       onChange={handleInputChange}/>
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