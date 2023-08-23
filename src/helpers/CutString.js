const CutString = (max,string) => {
    let resultString= ''
    resultString = string.length > max  ? `${string.slice(0,max)}...` : string
    return resultString
}


export default CutString