'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    // document.querySelector('li').textContent = 'Change';

    // document.querySelectorAll('li')[0].textContent = 'Change';
    // document.querySelectorAll('li')[1].textContent = 'Change';
    // document.querySelectorAll('li')[2].textContent = 'Change';

    // document.querySelectorAll('li').forEach((li) => {
    //   li.textContent = 'Change';
    // });

    // document.querySelectorAll('.target').forEach((li) => {
    //   li.textContent = 'Change';
    // });

    document.querySelector('#second').textContent = 'Change';

    /*
    querySelector: 1つの要素を選択
    querySelectorAll: 複数の要素を選択

    getElementById: id属性を指定して要素を選択
    getElementsByClassName: class属性を指定して要素を選択 forEachは使用できない
    getElementsByTagName: タグ名を指定して要素を選択 forEachは使用できない
    */
  });
}
