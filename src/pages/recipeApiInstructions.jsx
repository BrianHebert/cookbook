import React from "react";
import {useLocation} from 'react-router-dom'

export default function recipeApiInstructions(props){
    const location = useLocation();
    const { recipe } = location.state
    console.log(recipe.label)
    return(
        <div>
            HI
        </div>
    )
}