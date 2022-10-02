import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({feedback: InitialFeedback})
        }),
        applyMiddleware(thunkMiddleware, logger)
    );
    return store;
}
export default  configureStore;


