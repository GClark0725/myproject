var quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How many super heros can you name",
  "questionStem": "What is",
  "questions": [
    {"question": " the real name of Superman?", "answer": "Clark Kent"},
    {"question": " the real name of Wonder Woman?", "answer": "Dianna Prince"},
    {"question": " the real name of Batman?", "answer": "Bruce Wayne"},
    {"question": " the capital of the United States?", "answer": "Washington DC"},
    {"question": " the best Olympic team in the history of the Earth?", "answer": "Team USA"}
]
}

//dom refrences//
var $question = document.getElementById("question");
var $form = document.getElementById('answer')
var $input = document.getElementById("input");
var $feedback = document.getElementById("feedback");
var $score = document.getElementById("score");
var $start = document.getElementById("button");

$start.addEventListener('click', function() { play(quiz) }, false)

function update(element, content, klass) {
  var p = element.firstChild || document.createElement("p");

  p.textContent = content;
  element.appendChild(p);
  if (klass) {
    p.className = klass;

  }
}

var points = 0
update($score, points)

function play(quiz) {
  points = 0
  update($score, points)
  $form.addEventListener('submit', function(event) {
    event.preventDefault();
    check($form[0].value);
  }, false)
  var i = Math.floor(5*Math.random());
  var o = 0;
  chooseQuestion();
  update($start, "Play", "fls")
  // gameover();

  function chooseQuestion() {
    var question = quiz.questions[i].question;
    ask(question);
  }

  function ask(question){
    update($question, quiz.questionStem + question)
    $form[0].value = "";
    $form[0].focus();
  }

  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      update($feedback, "Correct!", "right");
      points++;
      update($score, points)
      update($input, "You put " + answer)
    }else {
      update($feedback, "WRONG!", "wrong");
      update($input, "You put " + answer + ", but the correct answer was " + quiz.questions[i].answer + ".")

    }
    o++;
    i = Math.floor(5*Math.random());
    if (o === 5) {
      gameover();
    }else{
      chooseQuestion();
    }
  }


  function gameover() {
    alert("Game Over, you scored " + points + " points");
    update(question, "Game OVER! You scored " + points + " points")
    update($start, "Play Again?", "real")
  }
}
