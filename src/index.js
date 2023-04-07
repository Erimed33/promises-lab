// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
async function logResult(person) {
  try {
    const result = await finder(person.first, person.last);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

  

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */

async function logTwoResults(person1, person2) {
  await logResult(person1);
  await logResult(person2);
}



/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
async function logThreeResultsCities(person1, person2, person3) {
  try {
    const result1 = await finder(person1.first, person1.last);
    console.log(result1[0].city);

    const result2 = await finder(person2.first, person2.last);
    console.log(result2[0].city);

    const result3 = await finder(person3.first, person3.last);
    console.log(result3[0].city);
  } catch (error) {
    console.log(error);
  }
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
