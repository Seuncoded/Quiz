
let questArry = [
    { Question: "What is Your Favorite Food ?", Option: ["Rice", "Beans", "Potatoes", "Onion"], answer: "Beans" },

    { Question: "What is Your Favorite Type Of cloth ?", Option: ["Jeans", "shirt", "cap", "sandal"], answer: "Jeans" },

    {
        Question: "What is Your Favorite sport ?", Option: ["rugby", "hockey", "football", "tennis"], answer: "football"
    },
    {
        Question: "What Country Are You From?", Option: ["Nigeria", "Ghana", "Gambia", "Kenya"], answer: "football"
    },
    {
        Question: "What is your Hobbies ?", Option: ["Sleeping", "Dancing", "Gaming", "Cooking"], answer: "football"
    }
];



let index = 0;

function showQuestion(index) {

    let DispScreen = document.getElementById('dispScreen')
    let listOfQuest = questArry[index]

    DispScreen.innerHTML =


        `<div><p>${index + 1}. Question: ${listOfQuest.Question}</p></div>

        <div>
        <label><input type="checkbox" class="radio" value="0" name="" />${listOfQuest.Option[0]}</label><br>
        <label><input type="checkbox" class="radio" value="1" name="" />${listOfQuest.Option[1]}</label><br>
        <label><input type="checkbox" class="radio" value="2" name="" />${listOfQuest.Option[2]}</label><br>
        <label><input type="checkbox" class="radio" value="3" name="" />${listOfQuest.Option[3]}</label><br>
        </div>

        <div id='sbt'><input type="submit" value="Submit"></div>
  
        <div> <p>Answer: ${listOfQuest.answer}</p> </div>
        `

}

showQuestion(index);


function nextQuestion() {
    index++;
    if (index >= questArry.length) {
        index = 0;
    }
    showQuestion(index);
}

function prevQuestion() {
    index--;
    if (index < 0) {
        index = questArry.length
    }
    showQuestion(index);
}


let scoreGrade = document.getElementById("scoreGrade");

let A1 = 75;
let B2 = 70;
let B3 = 65;
let C4 = 60;
let C5 = 55;
let C6 = 50;
let D7 = 45;
let E8 = 40;
let F9 = 0;



let audioA1 = new Audio('Music/its plenty.mp3');
let audioB2 = new Audio('Music/Champion.mp3')
let audioB3 = new Audio('Music/Basqiua.mp3')
let audioC4 = new Audio('Music/problem.mp3')
let audioC5 = new Audio('Music/Do i.mp3')
let audioC6 = new Audio('Music/omoOpe.mp3')
let audioD7 = new Audio('Music/Zazu.mp3')
let audioE8 = new Audio('Music/ReligionNew.mp3')
let audioF9 = new Audio('Music/last Last.mp3')


function checkScore() {
    
    if (scoreGrade.value >= A1) {
        audioA1.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain A1`)
        audioA1.pause();
    } else if (scoreGrade.value >= B2 && scoreGrade.value < 75) {
        audioB2.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain B2`)
        audioB2.pause();
    } else if (scoreGrade.value >= B3 && scoreGrade.value < B2) {
        audioB3.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain B3 `)
        audioB3.pause();
    } else if (scoreGrade.value >= C4 && scoreGrade.value < B3) {
        audioC4.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain C4 `)
        audioC4.pause();
    } else if (scoreGrade.value >= C5 && scoreGrade.value < C4) {
        audioC5.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain C5 `)
        audioC5.pause();
    } else if (scoreGrade.value >= C6 && scoreGrade.value < C5) {
        audioC6.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain C6 `)
        audioC6.pause();
    } else if (scoreGrade.value >= D7 && scoreGrade.value < C6) {
        audioD7.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain D7 `)
        audioD7.pause();
    } else if (scoreGrade.value >= E8 && scoreGrade.value < D7) {
        audioE8.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain E8 `)
        audioE8.pause();
    } else if (scoreGrade.value >= 0 && scoreGrade.value < E8) {
        audioF9.play();
        alert(`Your score is ${scoreGrade.value}, and You Have obtain F9 `)
        audioF9.pause();
    }
    
    

}