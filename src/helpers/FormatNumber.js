const FormatNumber = number => {
    const num = number.toString()
    let index = 0;
    let formated = ''
    if(num.length < 4) return number
    if(num.length >= 4 && num.length <= 6 ){
        for(let i = num.length; i > 0 ; i--){
            if( i % 3 === 0 && i !== 6) formated += "."
            formated += num[index]
            index++
        }
        
    }
    if (num.length >= 7 && num.length <= 9){
        for(let i = num.length; i > 0 ; i--){
            if( i % 3 === 0 && i !== 9) formated += "."
            formated += num[index]
            index++
        }
        const splitedNumber = formated.split('.')
        formated = splitedNumber[1][0] === '0' ?  `${splitedNumber[0]}M` :  `${splitedNumber[0]}.${splitedNumber[1][0]}M`
    
        
    }

    if (num.length >= 10 && num.length <=  13){
        for(let i = num.length; i > 0 ; i--){
            if( i % 3 === 0 && i !==12) formated += "."
            formated += num[index]
            index++
        }
        const splitedNumber = formated.split('.')
        formated = splitedNumber[1][0] === '0' ?  `${splitedNumber[0]}B` :  `${splitedNumber[0]}.${splitedNumber[1][0]}B`
        
        
        
    }
    
    return `${formated}`
    
}



export default FormatNumber