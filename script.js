const myQuestions = [
    {
        'que': "How can you get the type of arguments passed to a function?",
        'a': "using typeof operator",
        'b': "using getType function",
        'c': "Both of the above",
        'd': "None of the above",
        'correct': "a"
    },
    {
        'que': "What does CSS stands for?",
        'a': "Central Style Sheets",
        'b': "Cascading Style Sheets",
        'c': "Cascading Simple Sheets",
        'd': "Cars SUVs Sailboats",
        'correct': "b"
    },
    {
        'que': "The property in CSS used to change the background color of an element is",
        'a': "bgcolor",
        'b': "color",
        'c': "background-color",
        'd': "All of the above",
        'correct': "c"
    },
    {
        'que': "The HTML attribute used to define the inline styles is",
        'a': "style",
        'b': "styles",
        'c': "class",
        'd': "None of the above",
        'correct': "a"
    },
    {
        'que': "Which of the following type of variable takes precedence over other if names are same?",
        'a': "global variable",
        'b': "local variable",
        'c': "Both of the above",
        'd': "None of the above.",
        'correct': "b"
    },
    {
        'que': "Which of the following function of Number object forces a number to display in exponential notation?",
        'a': "toExponential()",
        'b': "toFixed()",
        'c': "toPrecision()",
        'd': "toLocaleString()",
        'correct': "a"
    },
];

let index = 0;
let total = myQuestions.length;
let right = 0, wrong = 0;
const QuesBox = document.getElementById("QuesBox")
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () =>{
    if(index=== total){
        return endQuiz()
    }
    reset();
    const data = myQuestions[index]
    QuesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = myQuestions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
} 

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("quiz").innerHTML = `
    <div style="text-align:center">
        <h2>Thank you for playing the Quiz</h2>
        <h2> ${right} / ${total} are correct</h2>   
    </div>
    `
}

loadQuestion();