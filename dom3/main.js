'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    const liElement = document.createElement('li');
    liElement.textContent = 'New';

    // insertBefore: 指定した要素の前に追加
    // document.querySelector('ul').insertBefore(liElement, document.querySelector('#second'));

    // appendChild: 指定した要素の最後に追加
    // document.querySelector('ul').appendChild(liElement);

    // remove: 指定した要素を削除
    if (confirm('削除しますか？') === true) {
      document.querySelector('#second').remove();
    }
  });
}
