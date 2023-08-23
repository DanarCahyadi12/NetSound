const FormatDate = (dates) => {
    const date = dates.split('T')[0].split('-')
    const day= date[2]
    const year = date[0]
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const dateObj = new Date()
    const curMonth = dateObj.getMonth()

    return `${day} ${months[curMonth]}, ${year}`

}

export default FormatDate