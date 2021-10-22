const getCourse = () => 'INT201 Client Side Programing'

const echo = text =>  text

const isKMUTTStudent = student => {
    if(student.id.length == 13) return true;
}

const sum = (num1,num2,num3) =>num1+num2+num3;


const greetSomeOne = name => {
    const greeting = ['hi','hello','hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}


// let getCourse = () => 'INT201 Client Side Programming I';

// let echo = text => text;

// let isKMUTTStudent = student => student.id.length == 13;

// let sum = (num1, num2, num3) => num1 + num2 + num3;

// let greetingSomeOne = name => {

//     const greeting = ['hi', 'hello', 'hey'];

//     return `${greeting[Math.floor(Math.random(3))]}, ${name}`;

// }