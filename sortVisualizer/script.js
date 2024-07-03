let arrSize = document.getElementById("arrSize");
let size = document.getElementById("size");
let speed = document.getElementById("algoSpeed");
let delay = 300 - parseInt(speed.value);

arrSize.addEventListener("input", function(){
    generateArray(parseInt(arrSize.value))
})

speed.addEventListener("input", function(){
    delay = 300 - parseInt(speed.value);
})

document.addEventListener('DOMContentLoaded', function(){
    generateArray();
})

let numbers = [];

function generateArray(arrSize = 50){
    clear();
    const bars = document.querySelector("#bars");
    for (let i = 0; i < arrSize; i++){
        numbers[i] = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        
        bar.style.height = `${Math.max(numbers[i], 2) * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);

        bars.appendChild(bar);
    }
}

function clear() {
    const bars = document.querySelector("#bars");
    bars.innerHTML = '';
}

function swap(bar1, bar2) {
    let temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
}

function disableButtons() {
    document.querySelectorAll(".btn-outline-success").forEach(button => button.disabled = true);
    document.querySelector("#newArray button").disabled = true;
    arrSize.disabled = true;
}

function enableButtons() {
    document.querySelectorAll(".btn-outline-success").forEach(button => button.disabled = false);
    document.querySelector("#newArray button").disabled = false;
    arrSize.disabled = false;
}

function disableArrSize(){
    document.querySelector("#arrSize").disabled = true;
}

function enableArrSize(){
    document.querySelector("#arrSize").disabled = false;
}

document.querySelector(".newArray").addEventListener("click", function() {
    enableButtons();
    enableArrSize();
    generateArray(parseInt(arrSize.value));
});

function animate(time) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, time); 
    }) 
}


/* TODO: Implement the Quiz System
const bubbleQuestions = [
    {
        question: "What is the time complexity of bubble sort?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        answer: "O(n^2)"
    },
    {
        question: "When performing bubble sort on an array of n elements, what is the maximum number of comparisons that will be made in terms of n?",
        options: ["n", "n*n-1/2", "2n", "n<sup>2<sup>"],
        answer: "n*n-1/2"
    },
    {
        question: 'In Bubble Sort, after each pass, the largest element among the unsorted elements "bubbles up" to which position?',
        options: ["First","Middle","Last", "Depends on the array"],
        answer: "Last"
    }
];
*/

