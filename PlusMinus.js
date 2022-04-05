// Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr) {
  // Write your code here
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (const num of arr) {
    if (num >= 1) {
      positives++;
    } else if (num <= -1) {
      negatives++;
    } else {
      zeros++;
    }
  }

  const positiveResults = (positives / arr.length).toFixed(6);
  const negativeResults = (negatives / arr.length).toFixed(6);
  const zeroResults = (zeros / arr.length).toFixed(6);

  console.log(`${positiveResults}\n${negativeResults}\n${zeroResults}`);
}
