/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function(array) {
  array.forEach(Item=> console.log(Item))
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function(temperatures) {
  let C = temperatures.map(temperature => (temperature - 32) * (5/9));
  return C
}


/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function(temperatures, threshhold) {
  let hot = temperatures.filter(temperature => temperature > threshhold);
  return hot;
}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function(temperatures, threshhold) {
 let newarray =  hottestDays(temperatures, threshhold);
 logger(toCelsius(newarray))
}


export {logger, toCelsius, hottestDays, logHottestDays}
