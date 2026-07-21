const diseases = [

{
keywords:["fever","headache","body pain"],
disease:"Viral Fever",

medicine:[
"Paracetamol 500 mg",
"ORS Solution",
"Drink plenty of water",
"Take proper rest"
]
},

{
keywords:["cold","cough","sneezing"],
disease:"Common Cold",

medicine:[
"Cetirizine 10 mg",
"Cough Syrup",
"Steam Inhalation",
"Warm Water"
]
},

{
keywords:["stomach pain","diarrhea","vomiting"],
disease:"Food Poisoning",

medicine:[
"ORS",
"Zinc Tablets",
"Light Food",
"Hydration"
]
},

{
keywords:["gas","acidity","heartburn"],
disease:"Acidity",

medicine:[
"Pantoprazole 40 mg",
"Gelusil",
"Avoid Spicy Food"
]
},

{
keywords:["sore throat","throat pain"],
disease:"Throat Infection",

medicine:[
"Lozenges",
"Paracetamol",
"Warm Salt Water Gargle"
]
},

{
keywords:["allergy","itching","rash"],
disease:"Allergy",

medicine:[
"Cetirizine",
"Calamine Lotion"
]
},

{
keywords:["migraine","severe headache"],
disease:"Migraine",

medicine:[
"Paracetamol",
"Ibuprofen",
"Rest in Dark Room"
]
},

{
keywords:["constipation"],
disease:"Constipation",

medicine:[
"Isabgol",
"Drink More Water",
"Fiber Rich Food"
]
},

{
keywords:["ear pain"],
disease:"Ear Infection",

medicine:[
"Paracetamol",
"Consult ENT Specialist"
]
},

{
keywords:["tooth pain"],
disease:"Tooth Pain",

medicine:[
"Paracetamol",
"Ibuprofen",
"Visit Dentist"
]
}

];

function addMessage(message,type){

let div=document.createElement("div");

div.className=type;

div.innerHTML=message;

document.getElementById("chat-box").appendChild(div);

document.getElementById("chat-box").scrollTop=
document.getElementById("chat-box").scrollHeight;

}

function sendMessage(){

let input=document.getElementById("userInput");

let text=input.value.trim();

if(text=="") return;

addMessage(text,"user-message");

input.value="";

setTimeout(function(){

reply(text.toLowerCase());

},500);

}

function reply(symptom){

let found=false;

for(let disease of diseases){

for(let key of disease.keywords){

if(symptom.includes(key)){

let answer=

"<b>Possible Disease:</b> "+disease.disease+

"<br><br><b>Suggested Tablets / Treatment:</b><br><ul>";

disease.medicine.forEach(function(item){

answer+="<li>"+item+"</li>";

});

answer+="</ul>";

answer+="<br><b>⚠ If symptoms continue for more than 2 days or become severe, consult a doctor immediately.</b>";

addMessage(answer,"bot-message");

found=true;

return;

}

}

}

if(!found){

addMessage(

"Sorry, I couldn't identify the disease based on the symptoms.<br><br>Please consult a doctor for an accurate diagnosis.",

"bot-message"

);

}

}

document.getElementById("userInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});