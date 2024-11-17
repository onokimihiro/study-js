"use strict";

{
  const string = prompt("Enter a string: ");
  if (string.toLowerCase().trim() === "taro") {
    console.log("Welcome, Taro!");
  } else {
    console.log("Welcome, guest!");
  }

  console.log(string);
  console.log(string.length);
  console.log(string[0]);

  const emails = ["taro@example.com", "hanako@example.com", "sakura@example.com"];
  emails.forEach((email) => {
    if (email.indexOf("taro") === 0) {
      console.log(email);
    }
  });

  emails.forEach((email) => {
    const location = email.indexOf("@");
    console.log(`slice: ${email.slice(0, location)}`);

    const items = email.split("@");
    console.log(`split: ${items[0]}`);
  });

  const movieCounts = [1, 7, 20, 102];
  movieCounts.forEach((count) => {
    // let bar = "";
    // for (let i = 0; i < count; i++) {
    //   bar += "*";
    // }
    const bar = "*".repeat(count);
    const label = String(count).padStart(3, " ");
    console.log(`${label}: ${bar}`);
  });
}
