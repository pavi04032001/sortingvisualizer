async function bubble() {
    document.getElementById('outputParent').classList.add("d-none");
    
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        
        for(let j = 0; j < ele.length-i-1; j++){
            
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
                
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    
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