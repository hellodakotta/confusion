import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Container, Row} from 'reactstrap';
import s from './MenuComponent.module.css';


class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col md="5" key={dish.id} className="position-relative m-1">
                    <Card onClick={() => this.props.onClick(dish.id)} className={s.foodCard}>

                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {dish.name}
                                </CardTitle>
                            </CardBody>
                        </CardImgOverlay>
                    </Card>

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
}

export default Menu