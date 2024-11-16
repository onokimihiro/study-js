'use strict';

/* 
データ構造の勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // オブジェクト
  const scores = {
    math: 70,
    english: 90,
  };
  let sum = 0;

  console.log(scores);

  // オブジェクトのプロパティにアクセスするには、ドット演算子からプロパティ名を指定するか、ブラケット演算子からプロパティ名を指定する
  console.log(scores['math']);
  console.log(scores.math);

  // オブジェクトのプロパティに値を再代入する
  scores.math = 100;

  console.log(scores);

  // オブジェクトのプロパティに新しいプロパティを追加する
  scores.physics = 85;
  scores.science = 95;

  // オブジェクトのプロパティを削除する
  delete scores.english;

  console.log(scores);

  // オブジェクトのプロパティをキーと値のペアの配列に変換する
  const entries = Object.entries(scores);

  console.log(scores);

  // entries メソッドはオブジェクトのプロパティをキーと値のペアの配列に変換する
  entries.forEach((entry) => {
    // キーと値のペアを表示する
    console.log(`${entry[0]}: ${entry[1]}`);
    sum += entry[1];
  });

  // 合計を表示する
  console.log(`合計は ${sum}`);

  // 平均を表示する
  console.log(`平均は ${sum / entries.length}`);

  console.log('--------------------------------');

  const moreScores = {
    shirou: 100,
    kuro: 110,
  };

  const scores2 = {
    taro: 70,
    hanako: 90,
    tom: 80,
    ...moreScores, // spread 構文
  };

  // const { taro, hanako, tom } = scores2; // 分割代入
  const { taro, ...others } = scores2; // rest 構文

  console.log(taro);
  console.log(others);
}
