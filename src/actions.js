//actions
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const MODIFY_QUANTITY = 'MODIFY_QUANTITY'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

//action creators
export const addProduct = product => {
    return { type: ADD_PRODUCT, product }
}

export const modifyQuantity = product => {
    return { type: MODIFY_QUANTITY, product }
}

export const removeProduct = name =>{
    return { type: REMOVE_PRODUCT, name }
}