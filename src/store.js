// Import Redux and create Store
import { createStore } from 'redux';

// Create initial store state
const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
};


// Create Action Types
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";

// Create reducer function (takes in a state and an action and then updates the new state)
function reducer( state = initialState, action ) {
    const { type, payload } = action;
    console.log('Reducer: Action: ', type, 'Payload: ', payload );
    switch ( type ) {
        case UPDATE_NAME:
            return { ...state, name: payload };
        case UPDATE_CATEGORY:
            return { ...state, category: payload };
        case UPDATE_AUTHOR_FIRST:
            return { ...state, authorFirst: payload };
        case UPDATE_AUTHOR_LAST:
            return { ...state, authorLast: payload };
        case ADD_INGREDIENT:
            const newIngredients = [ ...state.ingredients, payload ];
            return { ...state, ingredients: newIngredients };
        case ADD_INSTRUCTION:
            const newInstruction = [ ...state.instructions, payload ];
            return { ...state, instructions: newInstruction };
        case ADD_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            };
            const newRecipes = [ ...state.recipes, recipe ];
            return { ...state, recipes: newRecipes  };
        default:
            return state;
    }
    

}

export default createStore(reducer);




