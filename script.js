class Calc {
  constructor() {}

  add(arg1, arg2) {
    if (!isNaN(+arg1) && !arg2) {
      return function (arg2) {
        return arg2 + arg1;
      };
    }
    if (!isNaN(+arg1) && !isNaN(+arg2)) return arg1 + arg2;
    return 0;
  }

  sub(arg1, arg2) {

    if (!isNaN(+arg1) && !arg2) {
    console.log(arg1);
      return function (arg2) {
        return arg2 - arg1;
      };
    }
    if (!isNaN(+arg1) && !isNaN(+arg2)) return arg1 - arg2;
    return 0;
  }

  mul(arg1, arg2) {
    if (!isNaN(+arg1) && !arg2) {
      return function (arg2) {
        return arg1 * arg2;
      };
    }
    if (!isNaN(+arg1) && !isNaN(+arg2)) return arg1 * arg2;
    return 0;
  }

  div(arg1, arg2) {
    if (!isNaN(+arg1) && !arg2) {
      return function (arg2) {
        return arg1 / arg2;
      };
    }
    if (!isNaN(+arg1) && !isNaN(+arg2)) return arg1 / arg2;
    return 0;
  }

  pipe(){
    console.log(arguments);
    const elements = arguments;
    return function(arg1) {
      //const allElements =[arg1, ...arguments];
      let countArifm = 0;
      let result = arg1;
      console.log(elements.length, "elements.length");
      for (let i = 0; i < elements.length; i++) {
        const item = elements[i];
        console.log(countArifm, item, item(result), "countArifm");
        /* switch (countArifm) {
          case 0:
            result += item(result);
            break;
          case 1:
            result -= item(result);
            break;
          case 2:
            result *= item(result);
            break;
          case 3:
            result /= item(result);
            countArifm = -1;
            break;
        } */
        console.log(result, "result");
        result = item(result);
        console.log(result, "result");
        if (countArifm === 3) {
          countArifm = -1;
        }
        countArifm++;
      }
      return result;
    }
  }
}

const calculator = new Calc();
let a = calculator.add(1, 2);
console.log(a, ' a');
let b = calculator.mul(a, 10);
console.log(b, ' b');

let sub1 = calculator.sub(1);

console.log(sub1, ' sub1');

let c = sub1(b);
console.log(c, 'c');

let d = calculator.mul(calculator.sub(a, 1))(c);
console.log(d, 'd');

// const aa = () => ((b) => {
//   console.log(b);
// });


// const bb = aa();
// bb(2);

// aa()(3);

console.log(a, b, c, d);
let doSmth = calculator.pipe(
  calculator.add(d),
  calculator.sub(c),
  calculator.mul(b),
  calculator.div(a)
); // функция, последовательно выполняющая эти операции.
let result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
console.log(result, "result");

console.log(calculator.pipe(calculator.add(1), calculator.mul(3))(3));