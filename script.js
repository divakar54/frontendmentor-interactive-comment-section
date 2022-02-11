import data from './data.json' assert { type: "json" };

// const myData = JSON.parse(data)
const replyBtnId = document.querySelectorAll('.reply-button');
replyBtnId.addEventListener('click', () => {
    console.log('you clicked on the button');
})
console.log(data);