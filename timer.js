document.addEventListener('DOMContentLoaded', () => {
            let [timer, timerId] = [0, 0];
            const h1 = document.querySelector('h1');
            const button = document.querySelector('#start-stop');
            const menuButton = document.querySelector('.menu-btn');
            const menu = document.querySelector('.menu');
            const modeButton = document.querySelector('#mode-toggle');
            const body = document.body;
            let isRunning = false; // 타이머 상태

            button.addEventListener('click', () => {
                if (!isRunning) {
                    button.textContent = 'Stop';
                    timerId = setInterval(() => {
                        timer += 1;
                        h1.textContent = `${timer}초`;
                    }, 1000);
                } else {
                    clearInterval(timerId);
                    button.textContent = 'Start';
                }
                isRunning = !isRunning;
            });

            // 메뉴 버튼 클릭 시 메뉴 보이기/숨기기
            menuButton.addEventListener('click', () => {
                menu.classList.toggle('visible');
            });

            // 모드 전환 버튼 클릭 시 라이트/다크 모드 전환
            modeButton.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                modeButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
            });
        });
