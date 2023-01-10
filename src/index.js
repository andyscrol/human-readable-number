module.exports = function toReadable (number) {
  return number < 1 ? 'zero' : (number > 99 ? zeroToNineteen[Math.floor(number / 100)] + ' hundred ' + readableTens(number % 100) : readableTens (number)).trim();
}
  let zeroToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twentyToNinety = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function readableTens (number) {
    return number < 20 ? zeroToNineteen[number] : twentyToNinety[Math.floor(number / 10)] + ' ' + zeroToNineteen[number % 10]
  };
