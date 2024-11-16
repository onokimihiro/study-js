'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド

  document.addEventListener('mousemove', (e) => {
    const pElement = document.querySelector('p');
    pElement.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  });
}
