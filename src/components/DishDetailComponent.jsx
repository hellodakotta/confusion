import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    List,
    Row
} from "reactstrap";
import React from "react";
import {Link} from "react-router-dom";

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
                </Col>
            </Row>
        </Container>
    ) : (<div></div>);
}


export default DishDetail;