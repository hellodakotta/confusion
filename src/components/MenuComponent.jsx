import React from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Container, Row} from 'reactstrap';
import s from './MenuComponent.module.css';


const MenuCard = ({dish, onClick}) => {
    return (
        <Card onClick={() => onClick(dish.id)} className={s.foodCard}>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardBody>
                    <CardTitle tag="h5">
                        {dish.name}
                    </CardTitle>
                </CardBody>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <Col md="5" key={dish.id} className="position-relative m-1">
                <MenuCard onClick={props.onClick} dish={dish} />
            </Col>
        );
    });
    return (
        <Container>
            <Row sm="1" className="d-flex">
                {menu}
            </Row>
        </Container>
    );
}

export default Menu