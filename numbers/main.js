"use strict";

{
  /*
  時間を分に変換
  */
  // const n = Number(prompt('時間を入力してください'));
  // console.log(`Hours: ${Math.floor(n / 60)}`);
  // console.log(`Minutes: ${n % 60}`);
  /*
  円をドルに変換
  */
  // const n = Number(prompt('Yen?'));
  // const amount = (n / 154.33).toFixed(2); // toFixed()で小数点以下を2桁にする 文字列になる
  // console.log(`Dollar: ${Number(amount).toLocaleString()}`); //
  /*
  ループの練習
  */
  // const n = Number(prompt('Count?'));
  // for (let i = 0; i < n; i++) {
  //   if (i % 2 === 0) {
  //     console.log(`--- item ${i} ---`);
  //   } else {
  //     console.log(`=== item ${i} ===`);
  //   }
  // }

  /*
  ランダムな整数を生成
  */
  function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  for (let i = 0; i < 10; i++) {
    const n = randomInt(5) + 1;
    console.log(`${i}: ${n}`);
  }

  /*
  配列の練習
  */
  const scores = [10, 20, 30, 40, 50];
  let max = 0;
  scores.forEach((score) => {
    if (score > max) {
      max = score;
    }
  });
  console.log(`Max: ${max}`);
  console.log(`Max: ${Math.max(...scores)}`);
  console.log(`Min: ${Math.min(...scores)}`);
}
