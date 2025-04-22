// Future enhancement account if the lastday or the fifteenth is a weekend
function countSemiMonthlyPaychecks(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (end < start) return 0;

  let paychecks = 0;

  let current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    // Loop while the current date is less than or equal to the end date
    const fifteenth = new Date(current.getFullYear(), current.getMonth(), 15); // Get the 15th of the current month
    const lastDay = new Date(current.getFullYear(), current.getMonth() + 1, 0); // Get the last day of the current month

    // If the 15th of the current month is within the range, count it as a paycheck
    if (fifteenth >= start && fifteenth <= end) paychecks++;

    // If the last day of the current month is within the range, count it as a paycheck
    if (lastDay >= start && lastDay <= end) paychecks++;

    current.setMonth(current.getMonth() + 1); // Move to the next month
  }

  return paychecks; // Return the total number of paychecks
}

function calculateMonthlyPayments(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate difference in years and months
  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();

  // Total months difference
  const totalMonths = yearsDiff * 12 + monthsDiff;

  return totalMonths;
}

function calculateBiWeeklyPayments(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate difference in milliseconds
  const diffInMilliseconds = end.getTime() - start.getTime();

  // Convert difference to days
  const diffInDays = diffInMilliseconds / (1000 * 3600 * 24);

  // Calculate number of bi-weekly payments (every 14 days)
  const numPayments = Math.floor(diffInDays / 14);

  return numPayments;
}

export {
  countSemiMonthlyPaychecks,
  calculateMonthlyPayments,
  calculateBiWeeklyPayments,
};
