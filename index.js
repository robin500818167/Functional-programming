
fetch(
    "https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json"
  )
    .then((result) => result.json())
    .then((dataset) => {
      let trimmedList = removeWhitespacFromList(
        showAllAnswersFromQuestion(
          dataset,
          "Als je later een auto zou kopen, van welk merk zou deze dan zijn?",
          "Als je later een auto zou kopen, van welk merk zou deze dan zijn?"
        )
      );
      return dataset;
    })
    .then((dataset) => {
      // Show list on page:
      displayList(
        showAllAnswersFromQuestion(
          dataset,
          "Als je later een auto zou kopen, van welk merk zou deze dan zijn?",
          "Als je later een auto zou kopen, van welk merk zou deze dan zijn?"
        ),
        "Auto's"
      );
  
      return dataset;
    })
    .catch((err) => console.log("Fetch failed!:", err));
  
  // Get all answers from list
  let showAllAnswersFromQuestion = (list, question, question2) => {
    // Return list with answers from question
    return list.map((item) => {
      return item[question, question2];
    });
  };
  
  // Remove witespace from listAnswers
  let removeWhitespacFromList = (list) => {
    return list.map((item) => {
      return item.trim();
    });
  };
  
  // Change all answers from list to firstletter uppercase
  let uppercaseFirstLetterAnswersFromList = (list) => {
    return list.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
  };

  // Show dataset as list on the table
  let displayList = (datasetList, title) => {
    let elementListTitle = document.getElementById("datasetListTitle");
    elementListTitle.innerHTML = title;
    let elementList = document.getElementById("datasetList");
    let listItem;
  
    datasetList.forEach((item) => {
      listItem = document.createElement("TR");
      listItem.innerHTML = item;
      elementList.appendChild(listItem);
    });
  };