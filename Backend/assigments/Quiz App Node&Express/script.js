let getAllQuestions = [];

async function getQuestionListFromApi() {
  try {
    const response = await fetch("http://localhost:3000/getAllQuestions");
    const data = await response.json();
    getQuestionList(data);
    getAllQuestions = data;
  } catch (err) {}
}

let selectedOptions = {};

function getQuestionList(data) {
  data.map((res, i) => {
    let questionList = document.getElementById("questionList");
    let innerOptionsHTML = "";
    res.options.forEach((option, index) => {
      innerOptionsHTML += `
                <div style="width:100%;float:left;padding:5px 0;">
                    <div class="radio">
                        <input id="${index}" name="question-${res.id}" type="radio" value="${index}" onClick="selectOption(${res.id}, ${index})">
                        <label for="question-${res.id}" class="radio-label">${option}</label>
                    </div>
               </div>
            `;
    });
    questionList.innerHTML += `
            <ul>
                <li>
                    <h3>${i + 1}). ${res.question}</h3>
                    <div style="width:100%;float:left;margin-top:15px">
                        ${innerOptionsHTML}
                    </div>
                </li>
            </ul>
        `;
  });
}

function selectOption(questionId, selectedOptionIndex) {
  selectedOptions[questionId] = selectedOptionIndex;
}
function submitFinalAnswer() {
  for (let i = 0; i < getAllQuestions.length; i++) {
    if (selectedOptions.hasOwnProperty(getAllQuestions[i].id)) {
      getAllQuestions[i].correctOption = selectedOptions[getAllQuestions[i].id];
    }
  }
}
getQuestionListAPI();
