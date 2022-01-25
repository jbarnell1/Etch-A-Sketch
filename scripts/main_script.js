

//initial page setup
let numPix = 16;
let colorScheme = "mono";

// connect event listeners to buttons
function initialize() {
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.addEventListener('click', selectOption));
}

function setupPage(num) {
    // remove previous flex_grid if remaking the page
    const to_remove = document.querySelectorAll('.flex_grid');
    if (to_remove) {
        to_remove.forEach(ele => ele.remove());
    }
    pixEach = Math.floor(640/num) ;
    const mainCont = document.createElement('div');
    mainCont.className = "flex_grid" ;
    const pageCont = document.querySelector('.page_content') ;
    // add pixel row divs to the flex_grid
    for (let i=0;i<num;i++) {
        let cur_row = document.createElement('div');
        cur_row.className = "row";
        cur_row.style.width = pixEach+'px';
        for (let i=0;i<num;i++) {
            let cur_col = document.createElement('div');
            cur_col.className = 'column';
            cur_col.addEventListener('mouseover', addColor) ;
            cur_col.style.height = pixEach+'px';
            cur_row.appendChild(cur_col) ;
        }
        mainCont.appendChild(cur_row) ;
    }
    pageCont.appendChild(mainCont);
}

initialize();
setupPage(numPix);
document.getElementById("reset").onclick = startOver;


function addColor(e) {
    if (colorScheme === 'mono') {
        e.target.style.backgroundColor = '#22223B';
    } else {
        const rdCol = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        e.target.style.backgroundColor = rdCol ;
    }
}

function selectOption(e) {
    const btns = document.querySelectorAll('button') ;
    if (e.target.id !== "reset") {
        btns.forEach(btn => btn.style.backgroundColor = '#C9ADA7');
        btns.forEach(btn => btn.classList.remove('current'));
        e.target.style.backgroundColor = '#F2E9E4';
        colorScheme = e.target.id; 
        e.target.classList.add("current");
    }
    
}

function startOver(e) {
    let numPix = parseInt(prompt("How many pixels would you like? (1-100)", "16"));
    if (numPix > 100 || numPix < 1) {
        numPix = 100
    }
    setupPage(numPix) ;

}


