import React from 'react';

import DishDetail from "./DishDetailComponent";
import {useParams} from "react-router-dom";

const DishWithId = ({dishes, comments}) => {


    let { id } = useParams();
    let dish = dishes.filter((dish) => dish.id === parseInt(id, 10))[0]
    let dishComments = comments.filter((comment) => comment.dishId === parseInt(id, 10));


return (

    <DishDetail dish={dish} comments={dishComments}/>
);
}

export default DishWithId;