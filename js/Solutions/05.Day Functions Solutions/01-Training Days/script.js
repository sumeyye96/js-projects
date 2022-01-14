//This program sends runners a message for the activity they signed up for and the days they have left to train.
// Select random activity 
const random = Math.floor(Math.random() * 3);
const getRandEvent = () => {
    if (random === 0) {
    return 'Marathon';
    } else if (random === 1) {
    return 'Triathlon';
    } else if (random === 2) {
    return 'Pentathlon';
    }
};

// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {
    let trainingDays;
    if (activity === 'Marathon') {
        trainingDays = 50;
    } else if (activity === 'Triathlon') {
        trainingDays = 75;
    } else if (activity === 'Pentathlon') {
        trainingDays = 100;
    }
    return trainingDays;
};

// The scope of `athlete` is too tight 
const logEvent = (activity, athlete) =>{
    console.log(`${athlete}'s activity is: ${activity}`);
};

const logTime = (days, athlete) => {
    console.log(`${athlete}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);
// Define a `athlete` variable. Use it as an argument after updating logEvent and logTime 
const athlete = 'Nala'

logEvent(sport, athlete);
logTime(days, athlete);

//Second competitor
const sport2 = getRandEvent();
const days2 = getTrainingDays(sport2);
const athlete2 = 'Warren';

logEvent(sport2, athlete2);
logTime(days2, athlete2);


