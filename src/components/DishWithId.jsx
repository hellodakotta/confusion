import React from 'react';

import DishDetail from "./DishDetailComponent";
import {useParams} from "react-router-dom";
import Loader from "./LoadingComponent";

const DishWithId = ({dishes, comments, addComment, isLoading, errMess}) => {


    let {id} = useParams();
    let dish = dishes.filter((dish) => dish.id === parseInt(id, 10))[0]
    let dishComments = comments.filter((comment) => comment.dishId === parseInt(id, 10));


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
            <DishDetail addComment={addComment} dish={dish} comments={dishComments}/>
        );
}

export default DishWithId;