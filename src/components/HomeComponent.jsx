import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import Loader from "./LoadingComponent";


const RenderCard = ({item, isLoading, errMess}) => {
    if (isLoading) {
        return (
            <Loader/>
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else
        return (
            <Card>
                <CardImg src={item.image} alt={item.title}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

const Home = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="12" md="4" className="m-1">
                    <RenderCard item=
                                    {props.dish}
                                isLoading={props.isLoading}
                                errMess={props.errMess}
                    ></RenderCard>
                </Col>
                <Col xs="12" md className="m-1">
                    <RenderCard item={props.promotion}></RenderCard>
                </Col>
                <Col xs="12" md className="m-1">
                    <RenderCard item={props.leader}></RenderCard>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;