

// **************************************
// ! Task 1)


// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// function func(type) {
//     switch (type) {
//         case SET:
//             console.log('SET');
//             break;
//         case GET:
//             console.log('GET');
//             break;
//         case DELETE:
//             console.log('DELETE');
//             break;
//         default:
//     }
// }

// func(SET);
// func(GET);
// func(DELETE);


// ! Task 1.2)

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// let array = [1, 2, 3];
// function NumberType(type) {
//     switch (type) {
//         case SET:
//             console.log('SET');
//             array.push(Math.floor(Math.random() * 10) + 1);
//             console.log(array)
//             break;
//         case GET:
//             console.log('GET');
//             break;
//         case DELETE:
//             console.log('DELETE');
//             break;
//         default:
//     }
// }
// NumberType(SET);



// ! Task 1.3)


// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'
// let array = [];

// function func(type) {
//     switch (type) {
//         case SET:
//             array.push(Math.floor(Math.random() * 10) + 1);
//             console.log(array);
//             break;
//         case GET:
//             console.log('GET');
//             break;
//         case DELETE:
//             console.log('DELETE');
//             if (array.length === 0) {
//                 console.log('Silinecek hene tapilmadi !')
//             } else {
//                 array.pop();
//             }
//             break;
//         default:

//     }
//     console.log(array);

// }
// func(DELETE);




// ! Task 1.4)


// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'
// let array = [];

// function func(type) {
//     switch (type) {
//         case SET:
//             array.push(Math.floor(Math.random() * 10) + 1);
//             console.log(array);
//             break;
//         case GET:
//             array.push(Math.floor(Math.random() * 10) + 1);
//             console.log('GET', array);
//             break;
//         case DELETE:
//             console.log('DELETE');
//             if (array.length === 0) {
//                 console.log('Silinecek hene tapilmadi !')
//             } else {
//                 array.pop();
//             }
//             break;
//         default:

//     }
//     console.log(array);

// }
// func(DELETE);


// **************************************





// ! Task 2)

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// for (let i = 0; i < mL.length; i++) {
//     let month = mL[i];
//     switch (month) {
//         case "January":
//         case "March":
//         case "May":
//         case "July":
//         case "August":
//         case "October":
//         case "December":
//             console.log(month + " - 31 days");
//             break;
//         case "April":
//         case "June":
//         case "September":
//         case "November":
//             console.log(month + " - 30 days");
//             break;
//         case "February":
//             console.log(month + " - 28 or 29 days");
//             break;
//         default:
//             break;
//     }
// }


// **************************************


// ! Task 3)


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let Today = new Date();
// let Month = Today.getMonth();

// let Day = Today.getDate();

// switch (Month) {
//     case 0:
//         console.log(`Today is ${mL[Month]} ${Day}.There are 31 days in January.`);
//         break;
//     case 1:
//         console.log(`Today is ${mL[Month]} ${Day}. February has 28 and sometimes 29 days.`);
//         break;
//     case 2:
//         console.log(`Today is ${mL[Month]} ${Day}.There are 31 days in March.`);
//         break;
//     case 3:
//         console.log(`Today is ${mL[Month]} ${Day}. There are 30 days in April.`);
//         break;
//     case 4:
//         console.log(`Today is ${mL[Month]} ${Day}. Mayda 31 gün var.`);
//         break;
//     case 5:
//         console.log(`Today is ${mL[Month]} ${Day}. There are 30 days in June.`);
//         break;
//     case 6:
//         console.log(`Today is ${mL[currentMonth]} ${Day}. There are 31 days in July.`);
//         break;
//     case 7:
//         console.log(`Today is ${mL[Month]} ${Day}. August has 31 days`);
//         break;
//     case 8:
//         console.log(`Today is ${mL[Month]} ${Day}. There are 30 days in September.`);
//         break;
//     case 9:
//         console.log(`Today is ${mL[Month]} ${Day}. There are 31 days in October.`);
//         break;
//     case 10:
//         console.log(`Today is ${mL[Month]} ${Day}. There are 30 days in November.`);
//         break;
//     case 11:
//         console.log(`Today is ${mL[Month]} ${Day}.There are 31 days in December`);
//         break;
//     default:
//         console.log("Error: Invalid month.");
//         break;
// }






// ! Task 4)


// **************************************





// const date = new Date();
// const Month = date.getMonth();

// let halfyear;

// switch (Month) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         halfyear = "The current month refers to the first half of the year";
//         break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//         halfyear = "This month refers to the second half of the year";
//         break;
//     default:
//         break;
// }

// console.log(`${date}. ${halfyear}`);

//! (Task 6)

// var today = new Date();
// var dayOftheWeek = today.getDay();
// console.log("Today is the " + (dayOftheWeek) + " day of the week.");

// ********************************************************************************************************





//! (Task 1.1)

// **************************************



// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



// let ML = [];
// for (let i = 0; i < mL.length; i++) {
//     ML.push([mL[i]]);
// }
// console.log(ML)


//! (Task 1.2)

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let ML = [[], [], []];
// for (let i = 0; i < mL.length; i++) {
//     let ArrIndex = Math.floor(i / 4);
//     ML[ArrIndex].push(mL[i]);
// }
// console.log(ML)





//! (Task 1.3)

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let newarray = [
//     [mL[0], mL[1], [mL[2], mL[3]]],
//     [mL[4], mL[5], [mL[6], mL[7]]],
//     [mL[8], [mL[9], mL[10], mL[11]]]
// ]
// console.log(newarray)








//! (Task 1.4)

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let newarray = [
//     [mL[0], mL[1], [mL[2], [mL[3]]]],
//     [mL[4], mL[5], [mL[6], [mL[7]]]],
//     [mL[8], [mL[9], mL[10], [mL[[11]]]]]

// ]
// console.log(newarray)






//! (Task 1.5)


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let newarray = [[mL[0], mL[1], [mL[2], mL[3]]],
// [mL[8], [mL[9], mL[10], mL[11]]],
// [mL[4], mL[5], [mL[6], mL[7]]]
// ];


// console.log(newarray)





//! (Task 2)

// let fullName = 'Eldeniz Mahmudov';

// let splitFullName = fullName.split(' ');
// let firstName = splitFullName[0];
// let lastName = splitFullName[1];

// let fullnamearray = [];
// for (let i = 0; i < firstName.length || i < lastName.length; i++) {
//     fullnamearray.push([firstName[i] || 'X', lastName[i] || 'X']);
// }

// console.log(fullnamearray);




//! (Task 3)

// function func() {
//     let barbecue = "Ey babeK kebaB ye!";
//     let eat = "";
//     for (let i = barbecue.length - 1; i >= 0; i--) {
//         eat += barbecue[i];
//     }
//     console.log(eat);

// }
// func();



//! (Task 4)

// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0 && arr[i] % 7 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0 && arr[i] % 7 == 0) {
//         total += arr[i];
//     }
// }

// console.log(total);










//! (Task 5)



// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];
// let Number = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > Number && arr[i] >= 100 && arr[i] < 1000 && arr[i] < 5000) {
//         Number = arr[i];
//     }
// }

// console.log(Number);




//! (Task 6)


// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];



// let minValue = Infinity;

// for (let item of arr) {
//     if (item % 3 === 0 && item !== 3) {
//         if (item < minValue) {
//             minValue = item;
//         }
//     }
// }

// if (minValue === Infinity) {
//     console.log("Array'də 3-ə bölünən rəqəm yoxdur");
// } else {
//     console.log("Ən kiçik rəqəm: " + minValue);
// }








// let obj = {
//     key1: 0,
//     key2: 3,
//     key3: 2,
//     key4: 4,
//     key5: 53,
//     key7: 7,
//     key8: 8,
//     key9: 91,
// };

// function func(obj) {
//     let value = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key) && key[key.length - 1] == obj[key]) {
//             value[key] = obj[key];
//         }
//     }
//     return value;
// }

// console.log(func(obj));