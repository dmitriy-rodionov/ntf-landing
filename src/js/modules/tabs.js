
const tabs = () => {
    const tabBtns = document.querySelectorAll('.special__btn'),
          tabItems = document.querySelectorAll('.special__items'),
          btnsWrapper = document.querySelector('.special__btns');
    
    tabBtns.forEach((item, i) => {
        if(i == 1) {
            item.classList.add('special__btn_active');
        } else {
            item.classList.remove('special__btn_active');
        }
    });

    showTabs(1);

    btnsWrapper.addEventListener('click', (e) => {
        let target = e.target;
        tabBtns.forEach((item, i) => {
            item.classList.remove('special__btn_active');
            if(target == item) {
                item.classList.add('special__btn_active');
                showTabs(i);
            }
        });
    });

    function showTabs(r) {
        tabItems.forEach((item, i) => {
            if(i == r) {
                item.classList.add('special__items_active');
            } else {
                item.classList.remove('special__items_active');
            }
        });
    }

};

export default tabs;