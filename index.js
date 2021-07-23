function superbowlWin(record) {
    for (var i = 0; i < record.length; i++) {
     if (record[i].result === "W") {
         return record[i].year;
     }
    }
}

record.find(superbowlWin);
     

