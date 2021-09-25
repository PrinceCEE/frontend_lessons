const updateJournal = (events, isWolf) => journal.push({ events, isWolf });

const getUniqueEvents = () => Object.keys(eventsDict);

const createTable = (event) => {
  const table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;

    if (entry.events.includes(event)) index += 1;
    if (entry.isWolf) index += 2;
    table[index] = +1;
  }

  return table;
};

const phiCoefficient = (table) => {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
};

const capitalise = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};

const eventsDict = {};
const journal = [];
console.log(
  "Welcome to this daily dairy, dear mere mortal.\nLog your activities for the days so we can know when you are likely to turn to a wolf."
);

// prompt the user to log their activities for the day, after 1s of delay
setTimeout(() => {
  // prompt users to enter days.
  while (true) {
    const events = [];
    const proceed = prompt(
      "Proceed entering event for the new day?\nEnter y for Yes, or n for No."
    );

    if (proceed === "y") {
      if (events.length === 0) {
        console.log(
          "Now, enter your activities for the day.\nEnter q to quit."
        );
      }

      // prompt users to enter activities for the day
      while (true) {
        const event = prompt("Please enter your activity.\nEnter q to quit.");
        if (event !== "q" && event) {
          events.push(event.toLowerCase());
          eventsDict[event] = event;
        } else {
          break;
        }
      }

      const isTransformed = prompt(
        "Did you turn to a wolf?\nEnter y for yes, or n for no."
      )?.toLowerCase();

      if (isTransformed === "y" || isTransformed === "n") {
        updateJournal(events, isTransformed === "y" ? true : false);
        console.log("Good, now proceed to entering events for the next day.");
      } else {
        console.log("Next time, read instructions well. Now, start afresh.");
        break;
      }
    }

    if (!proceed || proceed === "n") {
      if (journal.length === 0) {
        console.log("Thanks for coming by, your journal is empty");
      }
      break;
    }
  }

  const uniqueEvents = getUniqueEvents();
  if (uniqueEvents.length) {
    const result = [];
    for (let event of uniqueEvents) {
      const table = createTable(event);
      const phi = phiCoefficient(table);
      result.push({ event, phi });
    }

    result.sort((a, b) => a.phi > b.phi);
    console.log(
      `You are not likely to turn to a wolf if you ${capitalise(
        result[0].event
      )}`
    );
    console.log(
      `You are likely to turn to a wolf if you ${capitalise(
        result[result.length - 1].event
      )}`
    );
  }
}, 1000);
