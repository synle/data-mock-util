const moment = require('moment');

// funcs
const getRandomItem = function getRandomItem(list) {
    return list[Math.floor(Math.random() * (list.length -1))];
}

const getRandomPosInteger = function getRandomPosInteger(max) {
    return getRandomFromRange(1, max);
}

const getRandomFromRange = function getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomPhoneNumber = function getRandomPhoneNumber(){
    let resp = '';
    for (let i = 0; i < 10; i++){
        resp += getRandomFromRange(0,9)
    }
    return resp;
}

const getRandomZipCode = function getRandomZipCode(){
    let resp = '';
    for (let i = 0; i < 5; i++){
        resp += getRandomFromRange(0,9)
    }
    return resp;
}


const getRandomDateObject = function getRandomDateObject(dayDelta, hourDelta){
    hourDelta = hourDelta || 24;
    dayDelta = dayDelta || 30;

    const diffDay = getRandomPosInteger(dayDelta);
    const diffHour = getRandomPosInteger(hourDelta)

    return moment()
        .startOf('day')
        .add(dayDelta, 'day')
        .add(hourDelta, 'hour');
}

module.exports = {
    getRandomItem,
    getRandomPosInteger,
    getRandomFromRange,
    getRandomPhoneNumber,
    getRandomZipCode,
    getRandomDateObject,
}
