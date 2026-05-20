// This test FAILS ~60% of the time to generate anomaly history
// AEGIS CI/CD page needs 3+ failures in last 5 runs to show anomaly
const rand = Math.random();
console.log(`Random value: ${rand.toFixed(4)}`);
if (rand < 0.6) {
  console.error('FLAKY_ERROR: intermittent connection timeout (simulated)');
  process.exit(1);  // fail
}
console.log('Flaky test passed this time');
