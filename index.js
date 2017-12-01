const moment = require('moment');

// funcs
const getItem = function getItem(list) {
    return list[Math.floor(Math.random() * (list.length -1))];
}

const getPositiveInteger = function getPositiveInteger(max) {
    return getInteger(1, max);
}

const getInteger = function getInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getPhoneNumber = function getPhoneNumber(){
    let resp = '';
    for (let i = 0; i < 10; i++){
        resp += getInteger(0,9)
    }
    return resp;
}

const getZipCode = function getZipCode(){
    let resp = '';
    for (let i = 0; i < 5; i++){
        resp += getInteger(0,9)
    }
    return resp;
}


const getDateObject = function getDateObject(dayDelta, hourDelta){
    hourDelta = hourDelta || 24;
    dayDelta = dayDelta || 30;

    const diffDay = getPositiveInteger(dayDelta);
    const diffHour = getPositiveInteger(hourDelta)

    return moment()
        .startOf('day')
        .add(dayDelta, 'day')
        .add(hourDelta, 'hour');
}

module.exports = {
    getItem,
    getPositiveInteger,
    getInteger,
    getPhoneNumber,
    getZipCode,
    getDateObject,
}
