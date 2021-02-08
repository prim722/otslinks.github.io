const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i]
}