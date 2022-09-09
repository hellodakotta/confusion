import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, List, Row} from "reactstrap";
import React from "react";
import * as PropTypes from "prop-types";

class DishDetail extends React.Component {
    renderComments(comments) {
        const commentsHtml = comments.map((comment) => {
            let date = new Date(comment.date);

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

    render() {
        let {dish} = this.props;
        return dish ? (
            <Container>
                <Row sm="1">
                    <Col md="5" sm="12" className="m-1">
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
                    </Col>
                    <Col md="5" sm="12" className="m-1">
                        {this.renderComments(dish.comments)}
                    </Col>
                </Row>
            </Container>
        ) : (<div></div>);
    }
}

DishDetail.propTypes = {dish: PropTypes.object}

export default DishDetail;