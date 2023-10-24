let count = 0

function clicked(){
    
    count = count + 1
    document.getElementById("count-el").innerText = count;
}

function save(){
    let prevcount = `  ${count} -`
    document.getElementById("save-el").textContent += prevcount;
    count = 0
    document.getElementById("count-el").innerText = 0;
}