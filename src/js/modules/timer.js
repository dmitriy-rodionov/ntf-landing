const timer = () => {
    const deadLine = '2022-01-20';

    function getTimeRemaining(end) {
        const t = Date.parse(end) - Date.parse(new Date()),
              hours = Math.floor(t / (1000 * 60 *60)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.header__counter', deadLine);
}

export default timer;