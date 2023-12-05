async function merge(ele, low, mid, high){
    document.getElementById('outputParent').classList.add("d-none");
    
    
    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        
        
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
        ele[low+i].setAttribute('org', parseInt(ele[low + i].style.height)/2);
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        
        
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
        ele[mid+1+i].setAttribute('org', parseInt(ele[mid + 1 + i].style.height)/2);
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        
        
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            ele[k].setAttribute('org', parseInt(left[i])/2);
            i++;
            k++;
        }
        else{
            
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            ele[k].setAttribute('org', parseInt(right[j])/2);
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        ele[k].setAttribute('org', parseInt(left[i])/2);
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        ele[k].setAttribute('org', parseInt(right[j])/2);
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    
    if(l >= r){
        
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    let HTMLelements =
            document.getElementsByClassName("bar");
            let sortedarray = [];
        for (elem of HTMLelements) {
            // Print the current element
            
            sortedarray.push(elem.getAttribute('org'));
        }
    document.getElementById('outputChildDivId').innerHTML = "["+sortedarray+"]";
    
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    document.getElementById('outputParent').classList.remove("d-none");
});