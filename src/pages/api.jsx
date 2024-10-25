const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = async function (date) {
 
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date provided to fetchAPI");
  }

  let result = [];
  let random = seededRandom(date.getDate()); // Use the day of the month

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

const submitAPI = function (formData) {
  return true; 
};

export default { fetchAPI, submitAPI };
