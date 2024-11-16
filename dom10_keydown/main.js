'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド

  document.addEventListener('keydown', (e) => {
    const pElement = document.querySelector('p');
    pElement.textContent = e.key;
  });
}
