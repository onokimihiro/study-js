'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    const colors = [];
    document.querySelectorAll('input').forEach((checkbox) => {
      if (checkbox.checked === true) {
        colors.push(checkbox.value);
      }
    });
    alert(colors.join(','));
  });
}
