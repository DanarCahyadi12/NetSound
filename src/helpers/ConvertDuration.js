const ConvertDuration = ms => {
    let hour  = Math.floor(ms / 3600000)
    let minute  = Math.floor(ms / 60000)
    let second  = Math.floor(ms / 1000)
    second  = Math.floor(second % 60)


    if( hour === 0 ){
        if(minute < 10 ) minute = `0${minute}`
        if(second < 10) second = `0${second}`
        return `${minute } : ${second}`
    }else{
        if(hour < 10 ) hour = `0${hour}`
        if(minute < 10) minute = `0${minute}`
        if(second < 10) second = `0${second}`
        return `${hour} : ${minute } : ${second}`
    }
}

export default ConvertDuration
