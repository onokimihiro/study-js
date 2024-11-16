'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド

  document.querySelector('input').addEventListener('focus', () => {
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    // pElement.textContent = inputElement.value;
    pElement.textContent = 'focus';
  });

  document.querySelector('input').addEventListener('blur', () => {
    const pElement = document.querySelector('p');
    pElement.textContent = '';
  });

  document.querySelector('input').focus();
}
