import {
    Breadcrumb,
    BreadcrumbItem, Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container, Label,
    List, Modal, ModalBody, ModalHeader,
    Row
} from "reactstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";

const DishDetailCard = ({dish}) => {
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle tag="h5">
                    {dish.name}
                </CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
    );
}
const Comments = ({comments}) => {
    const commentsHtml = comments.map((comment) => {
        return (
            <li key={comment.id} className="mb-2">
                <div className="mb-1">{comment.comment}</div>
                <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))}</div>
            </li>
        )
    })
    return comments ? (
        <div>
            <h4>Comments</h4>
            <List type="unstyled">
                {commentsHtml}
            </List>
        </div>
    ) : (<div></div>);
}

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

const DishDetail = (props) => {
    console.log(props)
    let {dish} = props;
    return dish ? (
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={`/home`}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to={`/menu`}>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>

                </Breadcrumb>
                <h3>{dish.name}</h3>
                <hr/>
            </Row>
            <Row sm="1">
                <Col md="5" sm="12" className="m-1">
                    <DishDetailCard dish={dish}/>
                </Col>
                <Col md="5" sm="12" className="m-1">
                    <Comments comments={props.comments}/>
                    <CommentForm comments={props.comments} />
                </Col>

            </Row>
        </Container>
    ) : (<div></div>);
}


export default DishDetail;