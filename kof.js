<!DOCTYPE html>
<html lang="en-US">
<head>

<meta charset="utf-8">
<title> Apply JavaScript example </title>
<script>
document.addEventListener("DOMContentLoaded", function(){
function createParagraph(){
let para= document.createElement('p');
para.textContent = 'Hi this is Koffy, glad to meet you!';
document.body.appendChild(para);

}

const buttons = document.querySelectorAll('button');

for (let i=0; i < buttons.length ; i++){
buttons[i].addEventListener('click', createParagraph);
}
});

</script>
</head>
<body>
<button> Enter</button>
</body>
</html>