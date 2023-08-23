import CutString from "./CutString"

const CutArtistsString = (max,artists) => {
    let name = ''
    for(let i =0; i < artists.length; i++) {
        name +=  artists[i].name.replace(/,/i,'-')
        if( i !== artists.length-1) name += ','

    }
    const nameResult =  CutString(max,name).split(',')
    let datas = []
    nameResult.forEach((name,index) => {
        datas.push({
            id : artists[index].id,
            name  : name.replace(/-/,',')
        })
    })

    return datas
    
    


}

export default CutArtistsString