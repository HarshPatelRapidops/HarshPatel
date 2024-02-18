let startButton = document.getElementById('start');
        let stopButton = document.getElementById('stop');
        let resumeButton = document.getElementById('resume');
        let resetButton = document.getElementById('reset');
          
        let hour = 00;
        let minute = 00;
        let second = 00;
        let count = 00;
        let timer;
        let running = false;
          
        startButton.addEventListener('click', function () {
            timer = true;
            running = true;
            stopButton.disabled = false;
            startButton.disabled = true;
            resetButton.disabled = true;
            resumeButton.disabled = true;
            stopWatch();
        });
        stopButton.addEventListener('click', function () {
            timer = false;
            running = false;
            stopButton.disabled = true;
            startButton.disabled = true;
            resetButton.disabled = false;
            resumeButton.disabled = false;
        });
        resumeButton.addEventListener('click', function () {
            timer = true;
            running = true;
            stopButton.disabled = false;
            startButton.disabled = true;
            resetButton.disabled = true;
            resumeButton.disabled = true;
            stopWatch();
        });
        resetButton.addEventListener('click', function () {
            timer = false;
            running = false;
            hour = 0;
            minute = 0;
            second = 0;
            count = 0;
            document.getElementById('hour').textContent = "00";
            document.getElementById('minute').textContent = "00";
            document.getElementById('second').textContent = "00";
            document.getElementById('count').textContent = "00";
            stopButton.disabled = true;
            startButton.disabled = false;
            resetButton.disabled = true;
            resumeButton.disabled = true;
        });
        function stopWatch() {
            if (timer) {
                count++;
                if (count == 100) {
                    second++;
                    count = 0;
                }
                if (second == 60) {
                    minute++;
                    second = 0;
                }
                if (minute == 60) {
                    hour++;
                    minute = 0;
                    second = 0;
                }
                let hourString = hour < 10 ? "0" + hour : hour;
                let minuteString = minute < 10 ? "0" + minute : minute;
                let secondString = second < 10 ? "0" + second : second;
                let countString = count < 10 ? "0" + count : count;
          
                document.getElementById('hour').textContent = hourString;
                document.getElementById('minute').textContent = minuteString;
                document.getElementById('second').textContent = secondString;
                document.getElementById('count').textContent = countString;
                setTimeout(stopWatch, 10);
            }
        }
        function updateDateTime() {
            let now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            let formattedDate = now.getDate().toString().padStart(2, '0') + '-' +
                                (now.toLocaleString('default', { month: 'short' })).toString() + '-' +
                                now.getFullYear().toString();

            document.getElementById('date').textContent = formattedDate;
            document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
        }

        updateDateTime(); // Initial update
        setInterval(updateDateTime, 1000); // Update every second