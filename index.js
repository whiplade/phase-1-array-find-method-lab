const superbowlWin = (record) => {

    let yearWins = record.find(record => record.result === "W")
    
    if(yearWins) {
        return yearWins.year
    };
}
