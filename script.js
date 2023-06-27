
let name = prompt('Введите имя');
let age =prompt('Введите Ваш возраст');
let city =prompt('Введите место Вашего проживания');
let phone =prompt('Введите Ваш телефон');
let email =prompt('Введите Ваш email');
let company =prompt('Введите Ваше место работы');

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании 
${company}. Мои контактные данные: ${phone}, ${email}. `);
document.write(`<br> ${name} родился в ${2023-age} году.`);


//#3
let str6 = prompt('Введите 6 цифр без пробелов');

let ch1 = Number(str6[0])+Number(str6[1])+Number(str6[2]);
let ch2 = Number(str6[3])+Number(str6[4])+Number(str6[5]);

if (ch1==ch2){
    console.log('true');
}else{ console.log('false')}

// #4
{
    let a =prompt('Введите переменную');
    if (a>0){
        console.log('Верно');
    }else{
        console.log('Неверно');
    }
}

// #5
{
    let a = 10;
    let b = 2;
    console.log('Сумма a+b = '+ (a+b));
    console.log('Разность a-b = '+ (a-b));
    console.log('Произведение a*b = '+ (a*b));
    console.log('Частное a/b = '+ (a/b));
    if ((a+b)>1){console.log('вадрат Суммы Чисел a+b : '+ ((a+b)**2));}
    


// №6
// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
//     5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
//     'Неверно'.
if((a>2 & a<11) ||(b>=6 & b<14)){console.log('Верно')}
}

// #7
let n = 32; //0..59
if (n>=0 & n<15)
    {
    console.log('1-я четверть часа');
    }
else if (n>=15 & n<30)
    {
    console.log('2-я четверть часа');
    }
    else if (n>=30 & n<45)
        {
        console.log('3-я четверть часа');
        }
        else if (n>=45 & n<60)
        {
        console.log('4-я четверть часа');
        };

//#8
/*
let day = 25; //0..31
if (day>0 & day<=10)
{
console.log('1-я декада');
} 
else if (day>10 & day<=20)
    {
    console.log('2-я декада');
    } 
    else if (day>20 & day<=31)
        {
        console.log('3-я декада');
        };
 */
//#9
let days = prompt('Введите кол-тво дней');
let years = days / 365;
let mounths = days / 31;
let weeks = days / 7;
let hours = days * 24;
let minuts = days * 24 * 60;
let seconds = days * 24 * 60 * 60;
if(years<1){console.log('Меньше года')}else{console.log('Года ' + years);};
if(mounths<1){console.log('Меньше месяца')}else{console.log('Месяцы ' + mounths);};
if(weeks<1){console.log('Меньше недели')}else{console.log('Недели ' + weeks);};
console.log('Часы ' + hours);
console.log('Минуты ' + minuts);
console.log('Секунды ' + seconds);

//#10

let day = prompt('Введите день года'); //0..31
let mounth = 0;
if (day>0 & day<=31)
{
console.log('Январь');
mounth = 1;
} 
else 
if (day>31 & day<=59)
{
console.log('Февраль');
mounth = 2;
} 
else 
if (day>59 & day<=90)
{
console.log('Март');
mounth = 3;
} 
else 
if (day>90 & day<=120)
{
console.log('Апрель');
mounth = 4;
} 
else 
if (day>120 & day<=151)
{
console.log('Май');
mounth = 5;
} 
else 
if (day>151 & day<=181)
{
console.log('Июнь');
mounth = 6;
} 
else 
if (day>181 & day<=212)
{
console.log('Июль');
mounth = 7;
} 
else 
if (day>212 & day<=243)
{
console.log('Август');
mounth = 8;
} 
else 
if (day>243 & day<=273)
{
console.log('Сентябрь');
mounth = 9;
} 
else 
if (day>273 & day<=304)
{
console.log('Октябрь');
mounth = 10;
} 
else 
if (day>304 & day<=334)
{
console.log('Ноябрь');
mounth = 11;
} 
else 
if (day>334 & day<=365)
{
console.log('Декабрь');
mounth = 12;
}; 

switch(mounth) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log("Зима");
        break;
    case 3:
        console.log("Весна");
        break;
    case 4:
        console.log("Весна");
        break;
    case 5:
        console.log("Весна");
        break;
    case 6:
        console.log("Лето");
        break;
    case 7:
        console.log("Лето");
        break;
    case 8:
        console.log("Лето");
        break;
    case 9:
        console.log("Осень");
        break;
    case 10:
        console.log("Осень");
        break;
    case 11:
        console.log("Осень");
        break;
    case 12:
        console.log("Зима");
        break;
    }






