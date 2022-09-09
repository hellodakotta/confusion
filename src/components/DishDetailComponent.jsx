import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, List, Row} from "reactstrap";
import React from "react";

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
                <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
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

const DishDetail = (props) => {
    let {dish} = props;
    return dish ? (
        <Container>
            <Row sm="1">
                <Col md="5" sm="12" className="m-1">
                    <DishDetailCard dish={dish} />
                </Col>
                <Col md="5" sm="12" className="m-1">
                    <Comments comments={dish.comments} />
                </Col>
            </Row>
        </Container>
    ) : (<div></div>);
}


export default DishDetail;