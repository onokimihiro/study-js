'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    const pElement = document.querySelector('p');
    pElement.style.fontSize = '24px';
  });
}
