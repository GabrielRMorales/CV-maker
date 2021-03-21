export const ADD_TO_CV = "ADD_TO_CV";
export const EDIT_CV = "EDIT_CV";
export const UPDATE_CV = "UPDATE_CV";

export const addToCV = (formData, id)=>{
    return {
        type: ADD_TO_CV,
        formData,
        id

    }
}

export const editCV = (id)=>{
    return {
        type: EDIT_CV,
        id
    }
}

export const updateCV = (element, name, value)=>{
    return {
        type: UPDATE_CV,
        element,
        name,
        value
    }
}