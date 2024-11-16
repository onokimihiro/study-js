'use strict';

/* 
データ構造の勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // 配列
  const scores = [70, 90, 80, 85];

  console.log(scores);

  // 合計を初期化する
  let sum = 0;

  // 1番目の要素を表示する
  console.log(scores[1]);

  // 配列の長さを表示する
  console.log(scores.length);

  console.log(scores);

  // const は定数のため、再代入はできないできないが、配列自体は変更されないので再代入してもエラーにはならない
  scores[1] = 95;

  // push メソッドは配列の末尾に要素を追加する
  scores.push(100, 120);

  // unshift メソッドは配列の先頭に要素を追加する
  scores.unshift(40, 50);

  console.log(scores);

  // pop メソッドは配列の末尾の要素を削除する
  scores.pop();

  // shift メソッドは配列の先頭の要素を削除する
  scores.shift();

  console.log(scores);

  // splice メソッドは配列の指定した位置に要素を追加する
  // 第1引数は追加する位置、第2引数は削除する要素の数、第3引数以降は追加する要素
  scores.splice(2, 0, 90, 95);

  console.log(scores);

  // splice メソッドは削除した要素を返す
  const deleted = scores.splice(3, 1);

  console.log(deleted);

  // forの場合はbreak文でループを抜けることができる
  for (let i = 0; i < scores.length; i++) {
    console.log(`for: ${scores[i]}`);
  }

  // forEach メソッドは配列の各要素に対して繰り返し処理を行う
  scores.forEach((score) => {
    console.log(`forEach: ${score}`);
  });

  // forEach メソッドはindexを取得することができる
  scores.forEach((score, index) => {
    sum += score;
    console.log(`${index} 番目の要素は ${score}`);
  });

  // 合計を表示する
  console.log(`合計は ${sum}`);

  // 平均を表示する
  console.log(`平均は ${sum / scores.length}`);

  // 配列の要素を変数に分割代入する

  // const first = scores[0];
  // const second = scores[1];
  // const third = scores[2];
  // const fourth = scores[3];

  const [first, second, third, fourth] = scores;
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);

  // rest 構文
  // 配列の先頭の要素を変数に代入し、残りの要素を配列に代入する
  const [first2, ...others] = scores;

  console.log(`first2: ${first2}`);
  console.log(`others: ${others}`);

  console.log('--------------------------------');

  // spread 構文
  // 配列の要素を展開して新しい配列を作成する
  const morePoints = [100, 110, 120, 130, 140, 150];
  const points = [100, 110, 120, 130, 140, 150, ...morePoints];

  console.log(`points: ${points}`);

  console.log('--------------------------------');

  let start = 'Tokyo';
  let end = 'Osaka';

  // let temp = '';
  // temp = start;
  // start = end;
  // end = temp;

  // 配列の要素を入れ替える
  [start, end] = [end, start];

  console.log(start);
  console.log(end);

  console.log('--------------------------------');

  const names = ['山田', '鈴木', '佐藤', '田中', '小林'];

  // join メソッドは配列の要素を指定した文字列で結合する
  console.log(names.join('|')); // 山田|鈴木|佐藤|田中|小林
  console.log(names.join()); // 山田,鈴木,佐藤,田中,小林
  console.log(names.join('')); // 山田鈴木佐藤田中小林

  // split メソッドは文字列を指定した文字列で分割する
  const str = '山田|鈴木|佐藤|田中|小林';
  console.log(str.split('|')); // ['山田', '鈴木', '佐藤', '田中', '小林']

  console.log('--------------------------------');

  const prices = [100, 200, 300, 400, 500];

  // forEach メソッドを使って税込み価格を計算する
  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // });

  // map メソッドは配列の各要素に対して繰り返し処理を行い、その結果を新しい配列として返す
  const pricesWithTax = prices.map((price) => {
    return price * 1.1;
  });

  console.log(pricesWithTax);

  console.log('--------------------------------');

  // forEach メソッドを使って150円以上の価格を表示する
  // const priceOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     priceOver150.push(price);
  //   }
  // });

  // filter メソッドは配列の各要素に対して繰り返し処理を行い、条件に合致する要素を新しい配列として返す
  const priceOver150 = prices.filter((price) => {
    return price >= 150;
  });

  console.log(priceOver150);
}
