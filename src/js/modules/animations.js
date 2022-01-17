

function addAnimate(selector) {
    document.querySelector(selector).classList.add(selector.slice(1) + '_active');
}

function removeAnimate(selector) {
    document.querySelector(selector).classList.remove(selector.slice(1) + '_active');
}
    
function addAnimMultipleBlocks(selector) {
    document.querySelectorAll(selector).forEach((item, i) => {
        if(i == 0) {
        item.classList.add(selector.slice(1) + '_first-active');
        }
        if(i == 1) {
        item.classList.add(selector.slice(1) + '_second-active');
        }
        if(i == 2) {
        item.classList.add(selector.slice(1) + '_third-active');
        }
        if(i == 3) {
        item.classList.add(selector.slice(1) + '_fourth-active');
        }
    });
}
    
function removeAnimMultipleBlocks(selector) {
    document.querySelectorAll(selector).forEach((item, i) => {
        if(i == 0) {
        item.classList.remove(selector.slice(1) + '_first-active');
        }
        if(i == 1) {
        item.classList.remove(selector.slice(1) + '_second-active');
        }
        if(i == 2) {
        item.classList.remove(selector.slice(1) + '_third-active');
        }
        if(i == 3) {
        item.classList.remove(selector.slice(1) + '_fourth-active');
        }
    });
}


export {addAnimate};
export {removeAnimate};
export {addAnimMultipleBlocks};
export {removeAnimMultipleBlocks};