import React from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Container, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import s from './MenuComponent.module.css';
import DishDetail from "./DishDetailComponent";
import {Link} from "react-router-dom";
import Loader from "./LoadingComponent";


const MenuCard = ({dish}) => {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardBody>
                    <CardTitle tag="h5">
                        {dish.name}
                    </CardTitle>
                </CardBody>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = ({isLoading, errMess, dishes}) => {

    if (isLoading) {
        return (
            <Loader/>
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else {
        const menu = dishes.map((dish) => {
            return (
                <Col md="5" key={dish.id} className="position-relative m-1">
                    <MenuCard dish={dish}/>
                </Col>
            );
        });
        return (
            <div>
                <Container>
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={`/home`}>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <Row sm="1" className="d-flex">
                        <h3>Menu</h3>
                        {menu}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Menu