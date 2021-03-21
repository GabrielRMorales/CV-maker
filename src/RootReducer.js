import {ADD_TO_CV, EDIT_CV, UPDATE_CV } from "./ActionCreators";
const initialState = {
    generalInfo: {},
    educationXP: {},
    workXP: [],
    generalInfoState: false,
    educationXPState: false,
    workXPState: false
};

export default function rootReducer(state=initialState, action){

    switch (action.type){
        case ADD_TO_CV: {
            //return data for new state
            let newState = {...state};
            return Object.assign({}, newState, {[action.id]: action.formData,
                [`${action.id}State`]: !state[`${action.id}State`]});
        }
        case EDIT_CV: {   
            let newState = {...state};         
            return Object.assign({}, newState, {
                [action.id]: !state[action.id]
            });
        }

        
     case UPDATE_CV: {
         //tweak this for workXP as needed-also this only updates one at a time
            let newState = Object.assign({}, state, {
                [action.element]: {
                    [action.name]: action.value
                }
            });
            
            return newState;
        }
       
       /* case educationXP: {
            return {
                educationXP: action.data,
                educationXPState: true
            }
        }
        case workXP: {
            return {
                workXP: action.data,
                workXPState: true
            }
        }*/
        default: {
            return state;
        }

    }



}
