'use strict';

/* 
DOMの勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // addEventListener メソッド
  document.querySelector('button').addEventListener('click', () => {
    // alert(document.querySelector('input').value);
    // alert(document.querySelector('textarea').value);
    document.querySelector('textarea').value = '';
  });
}