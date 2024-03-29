import React from "react";
import {useLocation} from 'react-router-dom'
import styled from "styled-components";

const RecipeStyling = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    img{
        float: right;
        width: 49%;
        display: block;
        
    }
    .recipe{
        font-family: 'Poppins', sans-serif;

    }
    .ingredients{
        white-space: pre-wrap; /* makes it so \n works as a new line */
        margin-top: 0px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
    h2{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
    .preperation{
        white-space: pre-wrap; /* makes it so \n works as a new line */
        margin: 0px;
        width 49%;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function recipeInstructions(props){
    const location = useLocation();
    const { url } = location.state
    const { ingredients } = location.state
    const { preperation } = location.state
    const { name } = location.state

    

    return(
        <RecipeStyling>
            <img src={url}/>
            <h1 className="recipe">{name}</h1>
            <h2>Ingredients</h2>
            <p className="ingredients">{ingredients}</p>
            <h2>Instructions</h2>
            <p className="preperation">{preperation}</p>
        </RecipeStyling>
    )
}
