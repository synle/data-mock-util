const moment = require('moment');
const mockData = require('./data');

const email_domain_list = mockData.email_domain_list;
const name_list = mockData.name_list;
const city_list = mockData.city_list;


// funcs
const getItem = function getItem(list){
    return list[Math.floor(Math.random() * (list.length -1))];
}

const getPositiveInteger = function getPositiveInteger(max){
    return getInteger(1, max);
}

const getInteger = function getInteger(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const getPhoneNumber = function getPhoneNumber(){
    let resp = '';
    for (let i = 0; i < 10; i++){
        resp += getDigit()
    }
    return resp;
}

const getZipCode = function getZipCode(){
    let resp = '';
    for (let i = 0; i < 5; i++){
        resp += getDigit()
    }
    return resp;
}


const getDateObject = function getDateObject(dayDelta, hourDelta, inThePast){
    hourDelta = hourDelta || 24;
    dayDelta = dayDelta || 30;

    let diffDay = getPositiveInteger(dayDelta);
    let diffHour = getPositiveInteger(hourDelta)
    
    if(inThePast === true){
        diffDay *= -1;
        diffHour *= -1;
    }

    return moment()
        .startOf('day')
        .add(diffDay, 'day')
        .add(diffHour, 'hour')
        .valueOf();
}


const getNameWord = function getNameWord(){
    return getItem(name_list);
}

const getPersonFullName = function getPersonFullName(){
    const firstName = getNameWord(name_list);
    const lastName = getNameWord(name_list);

    return firstName + ' ' + lastName;
}


const getCity = function getCity(){
    return getItem(city_list);
}


const getEmail = function getEmail(){
    const firstName = getNameWord(name_list);
    const lastName = getNameWord(name_list);
    const emailDomain = getItem(email_domain_list);

    return (firstName + '.' + lastName + emailDomain).toLowerCase();
}



const getBoolean = function getBoolean(max){
    return Math.random() >= 0.5;
}


const getLicensePlate = function getLicensePlate(max){
    let resp = '';
    for (let i = 0; i < 7; i++){
        if(getBoolean() === true){
            resp += getDigit();
        } else{
            resp += getLetter();
        }

    }
    return resp.toUpperCase();
}

const getLetter = function getLetter(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return getItem(alphabet);
}

const getDigit = function getDigit(){
    return getInteger(0,9);
}


module.exports = {
    getItem,
    getPositiveInteger,
    getInteger,
    getPhoneNumber,
    getZipCode,
    getDateObject,
    getNameWord,
    getPersonFullName,
    getCity,
    getEmail,
    getBoolean,
    getLetter,
    getDigit,
    getLicensePlate,
}
