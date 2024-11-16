'use strict';

/* 
関数の勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // 関数宣言
  function double(num) {
    return num * 2;
  }

  // アロー関数式
  const triple = (num) => {
    return num * 3;
  };

  const forTimes = (num) => {
    return num * 4;
  };

  const fiveTimes = (num) => num * 5;

  console.log(double(10));
  console.log(triple(10));
  console.log(forTimes(10));
  console.log(fiveTimes(10));

  const calc = (num, func) => {
    return func(num);
  };

  console.log(calc(10, double));

  console.log(
    calc(10, (num) => {
      return num * 6;
    })
  );
}
