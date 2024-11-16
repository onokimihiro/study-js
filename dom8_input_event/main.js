'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  // inputイベント text, textarea, select
  // changeイベント radio, checkbox
  document.querySelector('input').addEventListener('input', () => {
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    // pElement.textContent = inputElement.value;
    pElement.textContent = inputElement.value.length;
  });
}
