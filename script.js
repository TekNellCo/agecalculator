let output_day = document.querySelector(".days");
let output_month = document.querySelector(".months");
let output_year = document.querySelector(".years");

const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const submit_button = document.querySelector(".submit");

let current_day = new Date().getDate();
let current_month = new Date().getMonth() + 1;
let current_year = new Date().getFullYear();
let years_difference = 0;
let current_months_in_year = 0;
let months_to_days = 0;
let total_days = 0;
let total_months = 0;

console.log(current_day);

submit_button.addEventListener("click", () => {
  let input_day = document.getElementById("day").value;
  let input_month = document.getElementById("month").value;
  let input_year = document.getElementById("year").value;

  let sliced_days;

  years_to_days = current_year * 365;
  total_days -= input_day;

  //////TAKES BIRTH YEAR AND TURNS INTO DAYS THEN ADDS TO TOTAL_DAYS
  // 1. takes month person was born then takes that month and the rest of the months in that year //
  sliced_days = months.slice(input_month);
  //2. converts it to days  //
  sliced_days.forEach((day) => {
    total_days += day;
  });
  //3.subtracts day of birth in that month (ex:born oct 12 : subtract 12)//
  total_days -= input_day;

  /////TAKES DIFFERENCE IN BIRTH AND CURRENT YEAR AND TURNS INTO DAYS THEN ADDS TO TOTAL_DAYS
  //total amount of years between birthyear and current year
  years_difference = current_year - input_year;
  //subtract 1 for birth year//
  --years_difference;
  //multiply year difference bby 365 to get difference in days//
  total_days += years_difference * 365;

  ////TAKES CURRENT AMOUNT OF DAYS IN CURRENT YEAR AND ADDS TO TOTAL_DAYS
  //1. takes january to current month//
  current_months_in_year = months.slice(0, current_month);

  console.log(total_days);
  console.log(current_months_in_year);

  //2.takes current months in years and adds em

  //3. takes current month and subtracts remainder of days then subtracts from total days
  total_days -= months[current_month] - current_day;
});
