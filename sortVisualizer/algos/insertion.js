async function insertionSort(){
    const bars = document.querySelectorAll(".bar");
    // color
    bars[0].style.background = 'green';
    for(let i = 1; i < bars.length; i++){
        let j = i - 1;
        let key = bars[i].style.height;
        
        bars[i].style.background = 'blue';

        await animate(delay);

        while(j >= 0 && (parseInt(bars[j].style.height) > parseInt(key))){
            bars[j].style.background = 'blue';
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            
            await animate(delay);

            // color
            for(let k = i; k >= 0; k--){
                bars[k].style.background = 'green';
            }
        }
        bars[j + 1].style.height = key;
        // color
        bars[i].style.background = 'green';
    }
}

const insertion = document.querySelector(".insertionSort");
insertion.addEventListener('click', async function(){
    disableButtons();
    disableArrSize();
    await insertionSort();
    enableButtons();
    enableArrSize();
});