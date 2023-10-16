let output_day = document.querySelector(".days");
let output_month = document.querySelector(".months");
let output_year = document.querySelector(".years");
let output_total_days = document.querySelector(".total_days");

const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const submit_button = document.querySelector(".submit");

let current_day = new Date().getDate();
let current_month = new Date().getMonth() + 1;
let current_year = new Date().getFullYear();

submit_button.addEventListener("click", () => {
  let input_day = document.getElementById("day").value;
  let input_month = document.getElementById("month").value;
  let input_year = document.getElementById("year").value;

  let years_difference = 0;
  let current_months_in_year = 0;
  let total_days = 0;
  let leap_years = 0;

  let sliced_days;

  //////TAKES BIRTH YEAR AND TURNS INTO DAYS THEN ADDS TO TOTAL_DAYS
  // 1. takes month person was born then takes that month and the rest of the months in that year //
  sliced_days = months.slice(input_month);
  //2. converts it to total_days  //
  sliced_days.forEach((day) => {
    total_days += day;
  });
  //3.subtracts day of birth in that month (ex:born oct 12 : subtract 12)//
  total_days -= input_day;

  /////TAKES DIFFERENCE IN BIRTH AND CURRENT YEAR AND TURNS INTO DAYS THEN ADDS TO TOTAL_DAYS
  //1.total amount of years between birthyear and current year
  years_difference = current_year - input_year;
  //2.subtract 1 for birth year//
  --years_difference;
  //3.multiply year difference bby 365 to get difference in total_days//
  total_days += years_difference * 365;

  ////TAKES CURRENT AMOUNT OF DAYS IN CURRENT YEAR AND ADDS TO TOTAL_DAYS
  //1. takes january to current month//
  current_months_in_year = months.slice(0, current_month + 1);
  //2.takes current months in years and adds em
  current_months_in_year.forEach((day) => {
    total_days += day;
  });
  total_days -= months[current_month] - current_day;

  ////////ADDS LEAP YEARS///
  //1.takes total of total_days and divides by 1460 (number of total_days in 4 years)
  leap_years = Math.floor(total_days / 1460);
  //2. adds leap years to total total_days
  total_days += leap_years;

  let output_text_months = 12;
  let output_text_days;
  let output_text_years = current_year - input_year;

  ////CALCULATES DAYS/MONTHS/YEARS
  if (input_month < current_month && input_day > current_day) {
    output_text_days = months[input_month] - input_day + current_day;
    output_text_months = current_month - input_month - 1;
    ////adds 2 days to febuary
    if (input_month == 2) {
      output_text_days += 2;
      console.log("febuary");
    }
  } else if (input_month <= current_month && input_day < current_day) {
    output_text_months = current_month - input_month;
    output_text_days = current_day - input_day;
  } else if (input_month >= current_month && input_day > current_day) {
    output_text_years -= 1;
    output_text_days = months[input_month] - input_day + current_day;
    output_text_months -= input_month - current_month + 1;
  } else if (input_month >= current_month && input_day < current_day) {
    output_text_years -= 1;
    output_text_days = current_day - input_day;
    output_text_months -= input_month - current_month;
  }
  output_month.textContent = `${output_text_months} months`;
  output_day.textContent = `${output_text_days} days`;
  output_year.textContent = `${output_text_years} years`;
  output_total_days.textContent = `${total_days} total days`;
});
