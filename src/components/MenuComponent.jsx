import React, {Component} from 'react';
import {
    Card,
    CardBody, CardImg, CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from 'reactstrap';
import s from './MenuComponent.module.css';


class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }

    renderDish(dish) {
        if (!dish) {
            return (<div></div>);
        } else {
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
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col key={dish.id} className="position-relative">
                    <Card onClick={() => {
                        this.onDishSelect(dish)
                    }} className={s.foodCard}>

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
                <Row xs="1" sm="2" md="4" className="mt-5 d-flex">
                    {menu}
                </Row>
                <Row>
                    <Col xs="4">
                        {this.renderDish(this.state.selectedDish)}
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default MenuComponent