export function addProduct(product){
    return {
        type : 'ADD_PRODUCT',
        payload : product,
    }
}