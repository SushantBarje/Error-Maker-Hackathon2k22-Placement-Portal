const quizDb = [
    {
        question : "Q1 : what is the full form of html ?",
        a: "Hello to my land",
        b: "hey text markup language",
        c: "hypertext makeup language",
        d: "hypertext markup language",
        ans: "ans4",
        selected: ''
    },
    {
        question : "Q2 : what is the full form of css ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"  ,
        selected: '' 
    },
    {
        question : "Q3 : What is the HTML tag under which one can write the JavaScript code ?",
        a: "javascript'",
        b: "scripted",
        c: "script",
        d: "js",
        ans: "ans3",
        selected: ''
    },
    {
        question : "Q4 : What is the correct syntax for referring to an external script called “geek.js” ?",
        a: "script src=”geek.js”",
        b: "script href=”geek.js”",
        c: "script ref=”geek.js”",
        d: "script name=”geek.js”",
        ans: "ans1" ,
        selected: ''  
    },
    {
        question : "Q5 :  Which of the following is not a reserved word in JavaScript ?",
        a: " interface",
        b: "throws",
        c: "program",
        d: "short",
        ans: "ans3",
        selected: ''   
    },
    {
        question : "Q6 :Which of the following is an advantage of using JavaScript ?",
        a: "Increased interactivity.",
        b: "Less server interaction.",
        c: "Immediate feedback from the users.",
        d: "All of the above.",
        ans: "ans4",
        selected: '' 
    },
    {
        question : "Q7 : JavaScript is a ____ Side Scripting Language. ?",
        a: "Server",
        b: "ISP",
        c: "Browser",
        d: "None of the above",
        ans: "ans3",
        selected: '' 
    },
    {
        question : "Q8 : Which function of an Array object calls a function for each element in the array ?",
        a: "forEach()",
        b: "every()",
        c: "forEvery()",
        d: "each()",
        ans: "ans1",
        selected: '' 
    },
    {
        question : "Q9 : How is the function called in JavaScript ?",
        a: "call Geekfunc(); ",
        b: "call function GeekFunc(); ",
        c: "Geekfunc(); ",
        d: "function Geekfunc();",
        ans: "ans3",
        selected: '' 
    },
    {
        question : "Q9 : What is the correct syntax for adding comments in JavaScript ?",
        a: "!–This is a comment– ",
        b: "//This is a comment ",
        c: "–This is a comment  ",
        d: "*This is a comment*",
        ans: "ans2  ",
        selected: '' 
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const labels = document.getElementsByTagName('label');
const back = document.getElementById('back');

const uname = document.querySelector('.uname');
const psw = document.querySelector('.psw');
const submit_login_form = document.querySelector('#submit_login_form');
const questionArea = document.querySelector('.questionArea');
const loginArea = document.querySelector('.loginArea');


const rulesArea = document.querySelector('.rulesArea');
const agree = document.querySelector('.agree');
const startQuiz = document.querySelector('#startQuiz');
const agreeBox = document.querySelector('#agreeBox');

// Result
const result = document.querySelector('.result')
let userAns = new Array();
let bool = new Array();
const table = document.querySelector("#customers");
const showResult = document.querySelectorAll('.showResult');
const ur = document.getElementById('urResult');
const um = document.getElementById('urmedian');
const qn = document.getElementById('qn');
const wa = document.getElementById('wa');
const ca = document.getElementById('ca');
const foot = document.querySelector('.foot');


//icon
const icon = document.querySelectorAll('.icon');
console.log(icon);


function displayData(){

    let rs=0,total=0,wrong=0;
    for(let i=0;i<quizDb.length;i++)
    {
        if(bool[i])
        {

            rs++;
        }
        else{
            wrong++;
        }
        
    }
    total = (rs/quizDb.length)*100;
     total = total.toFixed(2);
    if(total < 50)
    {        
        showResult[0].style.background = '#f2dede';
        showResult[0].style.color = '#a94442';
        foot.innerHTML = 'Upsss !! You need Serious Improvement'
    }
    else if(total >= 50 && total <=80)
    {
        showResult[0].style.background = 'yellow';
        foot.innerHTML = 'Good Job !! You can do Better'
    }
    else{
        showResult[0].style.background = '#dff0d8';
        showResult[0].style.color = '#3c763d';
        foot.innerHTML = 'Excellent Job !! You are doing Great'
    }
    ur.innerHTML = `Your Result is: ${total}% `;

    qn.innerHTML = `Total number of Questions : ${quizDb.length}`;
    wa.innerHTML = `Total number of Wrong Answer : ${wrong}`
    ca.innerHTML = `Total number of Correct Answer : ${rs}`;


    for(let i=0; i< quizDb.length; i++)
    {
      let row = table.insertRow(i+1)
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(1);
      cell1.innerHTML = i+1;
      cell3.innerHTML = userAns[i];
      cell2.innerHTML = bool[i] + " Mark";
       if(bool[i])
       {
           row.style.background = '#dff0d8';
           row.style.borderColor = '#d6e9c6';
           row.style.color = '#3c763d';
       } 
       else{
        row.style.background = '#f2dede';
        row.style.borderColor = '#ebccd1';
        row.style.color = '#a94442';
       }
    }
}

let questionCount =0;
let score =0 ;



const loadQuestion = () => {
    if(questionCount === quizDb.length-1)
    {
        submit.innerHTML = "Submit"
    }

    if(questionCount === 0)
        {
            back.disabled = true;
            back.style.cursor = 'not-allowed';
        }
        else{
            back.disabled = false;
            back.style.cursor = '';
        }

    if(quizDb[questionCount].selected)
    {
        document.getElementById(quizDb[questionCount].selected).checked = true;
    }

    const questionList = quizDb[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const showScore = document.querySelector('#showScore');

const getCheckAnswer = () => {
    let answer;
   console.log(answers);
    answers.forEach((curAnsElem) => {
        //console.log(curAnsElem);
            if(curAnsElem.checked){
                answer = curAnsElem.id;
               // console.log(answer)
            }

           
    });
    
    return answer;

}


const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            curAnsElem.checked =false;
        }
    })
}

back.addEventListener('click',()=>{
    questionCount--;
    loadQuestion();
})

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    
    quizDb[questionCount].selected = checkedAnswer;

    if(checkedAnswer === 'undefined')
    {
        userAns[questionCount] = checkedAnswer
        bool[questionCount] = 0;
    }
    else{
        for(let i=0 ;i< labels.length;i++)
        {
            if(labels[i].htmlFor === checkedAnswer)
            {
                userAns[questionCount] = labels[i].innerHTML
               
            }
        }
        
    }
    console.log(userAns[questionCount]);

    
    // console.log(checkedAnswer);

    if(checkedAnswer === quizDb[questionCount].ans){
        score++;
        bool[questionCount] = 1;
    }
    else{
        bool[questionCount] = 0;
    }

    
    questionCount++;
    deselectAll();
    if(questionCount < quizDb.length){
        loadQuestion();
    }
    else{
        questionArea.classList.add('questionArea');
        result.classList.remove('result');
        displayData();
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDb.length}</h3>
            <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;    console.log(bool)
                console.log(userAns)

        showScore.classList.remove('scoreArea')
    }
})


submit_login_form.addEventListener('click' , ()=>{
    console.log(uname.value);
    console.log(psw.value);

    if(uname.value === 'admin' && psw.value === 'admin'){
        rulesArea.classList.remove('rulesArea');
        loginArea.style.display = 'none';
       alert('login success');
    }
    else{
        alert('login failed');
    }

})

agree.addEventListener('click',()=>{
    if(agree.checked){
        document.querySelector(".iAgree").style.background = '';
    }
    else{
        document.querySelector(".iAgree").style.background = '#f2dede';
    }    
})

startQuiz.addEventListener('click' , ()=> {
    if(agree.checked){
        console.log('checked');
        questionArea.classList.remove('questionArea');
        rulesArea.classList.add('rulesArea');
        document.querySelector(".iAgree").style.background = '';

    }
    else{
        
        console.log('unchecked');
    }
})

for(let i=0;i<icon.length;i++){
icon[i].addEventListener('click',()=> {
    console.log('sjkd')
    location.reload();
})
}