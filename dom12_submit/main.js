'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    pElement.textContent = inputElement.value;
  });
}
