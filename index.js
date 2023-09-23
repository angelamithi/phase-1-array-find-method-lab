function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
    return winningYear ? winningYear.year : undefined;
  }