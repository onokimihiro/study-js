'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('input').forEach((radio) => {
      if (radio.checked === true) {
        alert(radio.value);
      }
    });
  });
}
