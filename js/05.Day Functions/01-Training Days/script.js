 
const random =    // Create random number

const getRandEvent = () => {
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;

};

// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {

// decide the day according to the activity, write a activityal;

return trainingDays;
};

const logEvent = activity => {
  const athlete = 'Nala';
  console.log(`${athlete}'s activity is: ${activity}`);
};

const logTime = days => {
  const athlete = 'Nala';
  console.log(`${athlete}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);

logEvent(sport);
logTime(days);
