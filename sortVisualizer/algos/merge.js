async function merge(bars, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await animate(delay);
        bars[low + i].style.background = 'orange';
        left[i] = bars[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await animate(delay);
        bars[mid + 1 + i].style.background = 'yellow';
        right[i] = bars[mid + 1 + i].style.height;
    }
    await animate(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await animate(delay);
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'green';
            }
            else{
                bars[k].style.background = 'lightgreen';
            }
            
            bars[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'green';
            }
            else{
                bars[k].style.background = 'lightgreen';
            } 
            bars[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await animate(delay);
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await animate(delay);
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(bars, left, right){
    if(left >= right){
        return;
    }
    const mid = left + Math.floor((right - left) / 2);
    await mergeSort(bars, left, mid);
    await mergeSort(bars, mid + 1, right);
    await merge(bars, left, mid, right);
}

const mergeBtn = document.querySelector(".mergeSort");
mergeBtn.addEventListener('click', async function(){
    let bars = document.querySelectorAll('.bar');
    let left = 0;
    let right = parseInt(bars.length) - 1;
    disableButtons();
    disableArrSize();
    await mergeSort(bars,left,right);
    enableButtons();
    enableArrSize();
});