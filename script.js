let input_day = document.getElementById("day");
let input_month = document.getElementById("month");
let input_year = document.getElementById("year");

let output_day = document.querySelector(".days");
let output_month = document.querySelector(".months");
let output_year = document.querySelector(".years");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const submit_button = document.querySelector(".submit");

let current_day = new Date().getDate();
let current_month = new Date().getMonth();
let current_year = new Date().getFullYear();

submit_button.addEventListener("click", () => {});
