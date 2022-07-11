const scores = [100,78,40,89,86,70];
scores.every(score => score >= 75);//true
scores.every(score => score >= 80);//false
scores.some(score => score >= 80);//true