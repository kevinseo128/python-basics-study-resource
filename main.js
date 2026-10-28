
// Home page - Learning Topic Cards

// getting the lesson links by their id
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
const startTopic = document.getElementById("startTopic");
const ifelseTopic = document.getElementById("ifelseTopic");
const loopsTopic = document.getElementById("loopsTopic");

// using localStorage to remember which lessons were completed
// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// saving the lesson as completed when the link is clicked
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// automatic completion removed for Iteration 2
/*
startTopic.addEventListener("click", function () {
  localStorage.setItem("startCompleted", "yes");
});

ifelseTopic.addEventListener("click", function () {
  localStorage.setItem("ifelseCompleted", "yes");
});

loopsTopic.addEventListener("click", function () {
  localStorage.setItem("loopsCompleted", "yes");
});
*/

// checking if each lesson was completed before
// changing Start to Completed
// https://www.w3schools.com/jsref/prop_node_textcontent.asp

// checking if the elements exist before running the code
// https://www.w3schools.com/js/js_if_else.asp
if (startTopic && ifelseTopic && loopsTopic) {

  if (localStorage.getItem("startCompleted") == "yes") {
    startTopic.textContent = "Completed ✓";
  }

  if (localStorage.getItem("ifelseCompleted") == "yes") {
    ifelseTopic.textContent = "Completed ✓";
  }

  if (localStorage.getItem("loopsCompleted") == "yes") {
    loopsTopic.textContent = "Completed ✓";
  }
}


// Getting Started - Mark as Complete
const startCompleteBtn = document.getElementById("startComplete");

// getElementById returns null if the element is not found
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// only running this code if the button exists on the page
if (startCompleteBtn) {

  // checking if this lesson was completed before
  if (localStorage.getItem("startCompleted") == "yes") {
    startCompleteBtn.textContent = "Completed ✓";
    startCompleteBtn.classList.add("completed");
  }

  // running the code when the button is clicked
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  startCompleteBtn.addEventListener("click", function () {

    // saving Getting Started as completed
    // https://www.w3schools.com/jsref/prop_win_localstorage.asp
    localStorage.setItem("startCompleted", "yes");
    // changing the button text to Completed
    // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    startCompleteBtn.textContent = "Completed ✓";

    // adding the completed class to make the button green
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
    // Learned from Bro Code: https://www.youtube.com/watch?v=62qN2RcpIAE
    startCompleteBtn.classList.add("completed");
  });
}

// If/Else - Mark as Complete
const ifelseCompleteBtn = document.getElementById("ifelseComplete");

if (ifelseCompleteBtn) {
  if (localStorage.getItem("ifelseCompleted") == "yes") {
    ifelseCompleteBtn.textContent = "Completed ✓";
    ifelseCompleteBtn.classList.add("completed");
  }

  ifelseCompleteBtn.addEventListener("click", function () {
    localStorage.setItem("ifelseCompleted", "yes");
    ifelseCompleteBtn.textContent = "Completed ✓";
    ifelseCompleteBtn.classList.add("completed");
  });
}

// Loops - Mark as Complete
const loopsCompleteBtn = document.getElementById("loopsComplete");

if (loopsCompleteBtn) {
  if (localStorage.getItem("loopsCompleted") == "yes") {
    loopsCompleteBtn.textContent = "Completed ✓";
    loopsCompleteBtn.classList.add("completed");
  }

  loopsCompleteBtn.addEventListener("click", function () {
    localStorage.setItem("loopsCompleted", "yes");
    loopsCompleteBtn.textContent = "Completed ✓";
    loopsCompleteBtn.classList.add("completed");
  });
}


// Quiz

// used this page to help make the quiz
// https://codeactually.com/interactivequiz.html

// getting the button and result area
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
const checkButton = document.getElementById("checkAnswers");
const result = document.getElementById("result");

// getting the feedback area for each quiz question
const feedback1 = document.getElementById("feedback1");
const feedback2 = document.getElementById("feedback2");
const feedback3 = document.getElementById("feedback3");
const feedback4 = document.getElementById("feedback4");
const feedback5 = document.getElementById("feedback5");
const feedback6 = document.getElementById("feedback6");

// checking the answers when the button is clicked
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
if (checkButton) {
  checkButton.addEventListener("click", function () {
    // using let because the score will change

    let score = 0;

    // finding the selected radio button for each question
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');

    // checking that an answer was selected and that it is correct

    // checking question 1
    if (q1) {
      // checking if the selected answer is correct
      if (q1.value == "b") {
        score++;  // adding 1 to the score for a correct answer

        // using textContent to show Correct under question 1
        // https://www.w3schools.com/jsref/prop_node_textcontent.asp
        feedback1.textContent = "Correct";

        // changing the feedback class to use the correct style
        // https://www.w3schools.com/jsref/prop_html_classname.asp
        feedback1.className = "feedback correct";

      } else {

        // showing Incorrect if the selected answer is wrong
        feedback1.textContent = "Incorrect";

        // changing the feedback class to use the incorrect style
        feedback1.className = "feedback incorrect";
      }

    } else {

      // showing Not answered if no answer was selected
      feedback1.textContent = "Not answered";

      // changing the feedback class to use the not answered style
      feedback1.className = "feedback not-answered";
    }

    // checking question 2
    if (q2) {
      if (q2.value == "a") {
        score++;
        feedback2.textContent = "Correct";
        feedback2.className = "feedback correct";

      } else {
        feedback2.textContent = "Incorrect";
        feedback2.className = "feedback incorrect";
      }

    } else {
      feedback2.textContent = "Not answered";
      feedback2.className = "feedback not-answered";
    }


    // checking question 3
    if (q3) {
      if (q3.value == "b") {
        score++;
        feedback3.textContent = "Correct";
        feedback3.className = "feedback correct";

      } else {
        feedback3.textContent = "Incorrect";
        feedback3.className = "feedback incorrect";
      }

    } else {
      feedback3.textContent = "Not answered";
      feedback3.className = "feedback not-answered";
    }

    // checking question 4
    if (q4) {
      if (q4.value == "b") {
        score++;
        feedback4.textContent = "Correct";
        feedback4.className = "feedback correct";

      } else {
        feedback4.textContent = "Incorrect";
        feedback4.className = "feedback incorrect";
      }

    } else {
      feedback4.textContent = "Not answered";
      feedback4.className = "feedback not-answered";
    }

    // checking question 5
    if (q5) {
      if (q5.value == "b") {
        score++;
        feedback5.textContent = "Correct";
        feedback5.className = "feedback correct";

      } else {
        feedback5.textContent = "Incorrect";
        feedback5.className = "feedback incorrect";
      }

    } else {
      feedback5.textContent = "Not answered";
      feedback5.className = "feedback not-answered";
    }

    // checking question 6
    if (q6) {
      if (q6.value == "b") {
        score++;
        feedback6.textContent = "Correct";
        feedback6.className = "feedback correct";

      } else {
        feedback6.textContent = "Incorrect";
        feedback6.className = "feedback incorrect";
      }

    } else {
      feedback6.textContent = "Not answered";
      feedback6.className = "feedback not-answered";
    }

    // changing the result text to show the score
    // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    result.textContent = "You got " + score + " out of 6.";

  });
}