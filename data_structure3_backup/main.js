'use strict';

/* 
データ構造の勉強
Create: 2024/11/09
Update: 2024/11/09
*/

{
  // let num = 10;
  // const numBackup = num;
  // num = 99;

  // console.log(num);
  // console.log(numBackup);

  const nums = [10, 20, 30];
  // const numsBackup = nums;
  const numsBackup = [...nums]; // spread 構文
  nums[0] = 99;

  console.log(nums);
  console.log(numsBackup);
}
