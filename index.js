let a = +prompt('input num');

switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( "Нет таких значений" );
}

// Пример без break:
// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//     case 4:
//         alert( 'В точку!' );
//     case 5:
//         alert( 'Перебор' );
//     default:
//         alert( "Нет таких значений" );
// }


//Группировка «case»
//Несколько вариантов case, использующих один код, можно группировать.
// let a = 2 + 1;
//
// switch (a) {
//     case 4:
//         alert('Правильно!');
//         break;
//
//     case 3: // (*) группируем оба case
//     case 5:
//         alert('Неправильно!');
//         alert("Может вам посетить урок математики?");
//         break;
//
//     default:
//         alert('Результат выглядит странновато. Честно.');
// }
