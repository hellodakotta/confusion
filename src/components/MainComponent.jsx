import Menu from "./MenuComponent";
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes} from 'react-router-dom';
import Home from "./HomeComponent";
import {Navigate} from "react-router";
import Contact from "./ContactComponent2";
import DishWithId from "./DishWithId";
import About from "./AboutComponent";
import {connect} from 'react-redux';
import {addComment, fetchDishes} from '../redux/ActionCreators'


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home
                        isLoading={this.props.dishes.isLoading}
                        errMess={this.props.dishes.errMess}
                        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    />}/>
                    <Route exact path="/menu"
                           element={<Menu
                               isLoading={this.props.dishes.isLoading}
                               errMess={this.props.dishes.errMess}
                               fetchDishes={this.props.fetchDishes}
                               dishes={this.props.dishes.dishes}/>
                           }/>
                    <Route path="/menu/:id" element={<DishWithId
                        addComment={this.props.addComment}
                        dishes={this.props.dishes.dishes}
                        isLoading={this.props.dishes.isLoading}
                        errMess={this.props.dishes.errMess}
                        comments={this.props.comments}/>}/>
                    <Route exact path="/aboutus" element={<About leaders={this.props.leaders}/>}/>
                    <Route exact path="/contactus" element={<Contact/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/home" replace/>}
                    />
                </Routes>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    };
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())}
});

export default (connect(mapStateToProps, mapDispatchToProps))(Main)

