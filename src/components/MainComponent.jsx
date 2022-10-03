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
import {postComment, fetchDishes, fetchLeaders, fetchPromos, fetchComments} from '../redux/ActionCreators'
import {actions} from "react-redux-form";


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromos();
        this.props.fetchComments();

    }
    render() {

        return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home
                        dishesIsLoading={this.props.dishes.isLoading}
                        promotionsIsLoading={this.props.promotions.isLoading}
                        leadersIsLoading={this.props.leaders.isLoading}
                        dishesErrMess={this.props.dishes.errMess}
                        promotionsErrMess={this.props.promotions.errMess}
                        leadersErrMess={this.props.leaders.errMess}
                        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    />}/>
                    <Route exact path="/menu"
                           element={<Menu
                               dishesIsLoading={this.props.dishes.isLoading}

                               dishesErrMess={this.props.dishes.errMess}

                               fetchDishes={this.props.fetchDishes}
                               dishes={this.props.dishes.dishes}/>
                           }/>
                    <Route path="/menu/:id" element={<DishWithId
                        postComment={this.props.postComment}
                        dishes={this.props.dishes.dishes}
                        dishesIsLoading={this.props.dishes.isLoading}
                        promotionsIsLoading={this.props.promotions.isLoading}
                        leadersIsLoading={this.props.leaders.isLoading}
                        dishesErrMess={this.props.dishes.errMess}
                        promotionsErrMess={this.props.promotions.errMess}
                        leadersErrMess={this.props.leaders.errMess}
                        commentsErrMess={this.props.comments.errMess}
                        comments={this.props.comments.comments}/>}/>
                    <Route exact path="/aboutus" element={<About leaders={this.props.leaders.leaders}/>}/>
                    <Route exact path="/contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
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
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    fetchLeaders: () => { dispatch(fetchLeaders())},
    fetchPromos: () => { dispatch(fetchPromos())},
    fetchComments: () => { dispatch(fetchComments())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});

export default (connect(mapStateToProps, mapDispatchToProps))(Main)

