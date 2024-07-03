async function selectionSort(){
    const bars = document.querySelectorAll(".bar");
    for(let i = 0; i < bars.length; i++){
        console.log('In ith loop');
        let min_index = i;
        bars[i].style.background = 'blue';
        for(let j = i+1; j < bars.length; j++){
            bars[j].style.background = 'red';
            await animate(delay);
            if(parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)){
                if(min_index !== i){
                    bars[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                bars[j].style.background = 'cyan';
            }   
        }
        await animate(delay);
        swap(bars[min_index], bars[i]);
        // change the min element index back to normal as it is swapped 
        bars[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        bars[i].style.background = 'green';
    }
}

const selection = document.querySelector(".selectionSort");
selection.addEventListener('click', async function(){
    disableButtons();
    disableArrSize();
    await selectionSort();
    enableButtons();
    enableArrSize();
});