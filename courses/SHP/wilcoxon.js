const fs = require('fs');

const getDifference = (ds1, ds2) => {
  const { length } = ds1;
  let differenceArray = [];
  for (var i = 0; i < length; i++) {
    differenceArray[i] = ds1[i] - ds2[i];
  }
  return differenceArray;
}

const cleanNull = (array) => {
  return array.filter(item => item != 0);
}

const getMagnitudeRank = (min, max, difference) => {
  const magnitude = difference.map(item => Math.abs(item));
  return magnitude.sort();
}

const getPositions = (magnitudeRank) => {
  const { length } = magnitudeRank;
  let currentItem = false;
  let items = [];
  let rankPositions = [];
  let index = -1;
  let currentCounter = 0;
  let startingIndex;
  let finishingIndex;
  for (var i = 0; i < length; i++) {
    if (magnitudeRank[i] != currentItem) {
      index++;
      if (index > 0) {
        finishingIndex = i;
        let total = 0;
        for (var j = startingIndex; j <= finishingIndex; j++) {
          total += j;
        }
        rankPositions[index - 1] = total / currentCounter;
        currentCounter = 0;
      }
      currentCounter++;
      startingIndex = i + 1;
      currentItem = magnitudeRank[i];
      items[index] = magnitudeRank[i];
    } else {
      currentCounter++;
    }
  }
  finishingIndex = length;
  let total = 0;
  for (var j = startingIndex; j <= finishingIndex; j++) {
    total += j;
  }
  rankPositions[index] = total / currentCounter;
  return { items, rankPositions };
}

const getPositivesNegatives = (differenceCleaned, positions) => {
  const { length } = differenceCleaned;
  let positives = [];
  let negatives = [];
  for (var i = 0; i < length; i++) {
    const item = Math.abs(differenceCleaned[i]);
    const index = positions.items.indexOf(item);
    if (differenceCleaned[i] > 0) {
      positives.push(positions.rankPositions[index]);
    }
    if (differenceCleaned[i] < 0) {
      negatives.push(positions.rankPositions[index]);
    }
  }
  return { positives, negatives };
}

const wilcoxon = (min, max, ds1, ds2) => {
  const difference = getDifference(ds1, ds2);
  const differenceCleaned = cleanNull(difference);
  const magnitudeRank = getMagnitudeRank(min, max, differenceCleaned);
  const positions = getPositions(magnitudeRank);
  const { positives, negatives } = getPositivesNegatives(differenceCleaned, positions);
  const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
  const positivesTotal = positives.reduce(sumReducer);
  const negativesTotal = negatives.reduce(sumReducer);
  const wobs = Math.min(positivesTotal, negativesTotal);
  console.log('Wobs = ' + wobs);
}

if (process.argv[2] == '-f' && process.argv[3]) {
  var data = JSON.parse(fs.readFileSync(process.argv[3]));
  wilcoxon(data.ordinal.min, data.ordinal.max, data.dataSet1, data.dataSet2);
} else {
  console.log('Usage: node wilcoxon.js -f [FILE]');
}
