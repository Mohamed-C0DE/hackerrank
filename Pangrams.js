// Link: https://www.hackerrank.com/challenges/pangrams/problem?h_r=internal-search

function pangrams(s) {
  // Write your code here
  let letters = s.split("");
  letters = letters.filter((el) => el !== " ");
  const results = [];
  for (const el of letters) {
    if (!results.includes(el)) {
      results.push(el);
    }
  }
  if (results.length === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}
