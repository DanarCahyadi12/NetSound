const UpperCaseFirstArrayChar = (array) => {
    const firstElement = array[0].replace(array[0][0],array[0][0].toUpperCase())
    array[0] = firstElement
    return array
        
}


export default UpperCaseFirstArrayChar