import React, {useState} from "react";
import {
    Button, Col, Form, FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalHeader, Row
} from "reactstrap";
import {Control, Errors, LocalForm} from 'react-redux-form';

const CommentForm = (props) => {

    let [isModalOpen, setIsModalOpen] = useState(false);

    const RenderComments = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleSubmit = (values) => {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));

    return(
        <div>
            <Button onClick={RenderComments}><i className="fa fa-lg fa-edit"></i> Submit Comment</Button>
            <Modal isOpen={isModalOpen} toggle={RenderComments}>
                <ModalHeader toggle={RenderComments}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Col>
                                <Control.select model=".rating"
                                                validators={{required, isNumber}}
                                                className="form-control">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>

                                <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    messages={{
                                        required: 'The required field.',
                                        isNumber: 'Must be a number'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="yourName">Your Name</Label>
                            <Col>
                                <Control.input model=".yourName" id="yourName" name="yourName"
                                               placeholder="Your Name"
                                               className="form-control"
                                               validators={{
                                                   required, minLength: minLength(3), maxLength: maxLength(15)
                                               }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".yourName"
                                    show="touched"
                                    messages={{
                                        required: 'The required field.',
                                        minLength: 'Must be greater than 2 characters.',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            <Col>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  rows="6"
                                                  className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CommentForm;