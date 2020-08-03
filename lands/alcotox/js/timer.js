(function (min, sec) {
    var date = new Date(),
        count = 0;
    date.setMinutes(15);
    date.setSeconds(0);
    buildDate(min, date.getMinutes());
    buildDate(sec, date.getSeconds());

    var interval = setInterval(counter, 1000);

    function counter() {
        count++;
        var liveDate = new Date();
        liveDate.setMinutes(date.getMinutes());
        liveDate.setSeconds(date.getSeconds() - count);
        buildDate(min, liveDate.getMinutes());
        buildDate(sec, liveDate.getSeconds());
        if (min[0].textContent === '00' && sec[0].textContent === '00') {
            clearInterval(interval);
        }
    }

    function zero(num) {
        return num.toString().length === 1 ? '0' + num : num;
    }

    function buildDate(arr, time) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].textContent = zero(time);
        }
    }
})(
    document.getElementsByClassName('countTime-minutes'),
    document.getElementsByClassName('countTime-seconds')
)