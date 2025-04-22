const ptoCalculator = (startingPto, rateOfAccrual, timesAccured) => {
  let availablePto = parseFloat(startingPto + rateOfAccrual * timesAccured);

  return availablePto.toFixed(2);
};

export default ptoCalculator;
