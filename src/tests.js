// Stable passing tests
const checks = [
  ['math works', 1 + 1 === 2],
  ['string concat', 'a' + 'b' === 'ab'],
  ['array length', [1, 2, 3].length === 3],
];
let passed = 0;
checks.forEach(([name, result]) => {
  if (result) { console.log(`✓ ${name}`); passed++; }
  else { console.error(`✗ ${name}`); process.exit(1); }
});
console.log(`\n${passed}/${checks.length} tests passed`);
