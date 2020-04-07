export const formatDate = function (date) {
    date = date.replace(/-/g, '/')
    const _dateMs = Date.parse(date)
    const _date = new Date(_dateMs)
    const _formattedDate = _date.getFullYear() + '/' + (formatZeros(_date.getMonth() + 1)) + '/' + formatZeros(_date.getDate()) + ' : ' + _date.getHours() + ':' + _date.getMinutes()
    return _formattedDate
}

export const formatZeros = function (number) {
    return number < 9 ? `0${number}` : number
}
