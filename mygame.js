<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            color: #333;
            background-image: url('https://cf-vectorizer-live.s3.amazonaws.com/vectorized/2kDszr5tP6rAXynYkuZ40SchbXo/2kDt1ZCnaFb163zKj7RcJ4tN2dN.svg');
            background-size: cover;
            background-position: center;
            text-align: center;
        }

        nav {
            background-color: #2196F3;
            color: #fff;
            padding: 15px 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: fixed;
            top: 0;
            left: 0;
        }
p{
    background-color: yellow;
    width: 300px;
    background-size: 50px;
    color: rgb(53, 0, 128);
}

        nav ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        nav li {
            margin: 0 10px;
        }

        nav a {
            text-decoration: none;
            color: inherit;
            font-weight: bold;
        }

        nav a:hover {
            color: #ff0000;
        }

        header {
            background-color: #f0f0f0;
            width: 750px;
            height: 175px;
            margin-top: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }

        #timer,
        #initial-value,
        #high-score {
            font-size: 24px;
            margin-bottom: 20px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        button:hover {
            background-color: #0056b3;
        }

        div {
            font-size: 20px;
        }
    </style>
</head>

<body>
    <nav>
        <ul>
            <li><a href="index3.html" target="_blank">Explore my Calculator</a></li>
        </ul>
    </nav>
    <p> 
     Note ! If you left the game your data will be reset.
      <p>
    <header>
        <div id="timer">Timer: 0</div>
        <div id="high-score">High Score: 0</div>
        <div id="initial-value">0</div>
        <button id="start-btn">Start Game</button>
    </header>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const timerDisplay = document.getElementById("timer");
            const initialValueElement = document.getElementById("initial-value");
            const highScoreElement = document.getElementById("high-score");
            const startButton = document.getElementById("start-btn");
            let myVariable = 0;
            let highScore = 0;
            highScoreElement.style.display = 'none';
            highScore = parseInt(localStorage.getItem('highScore')) || 0; // Default to 0 if no high score exists
            let interval;
            function startTimer(duration) {
                let timer = duration;
                interval = setInterval(() => {
                    const minutes = Math.floor(timer / 60);
                    const seconds = timer % 60;
                    timerDisplay.textContent = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                    timer--;

                    if (timer < 0) {
                        clearInterval(interval);
                        timerDisplay.textContent = 'Game Over';
                        startButton.style.display = 'block';
                        clickButton.style.display = 'none';
                        startButton.textContent = 'Play Again';
                        highScoreElement.style.display = 'block';
                        if (myVariable >= highScore) {
                            highScore = myVariable;
                            highScoreElement.textContent = `You have reached the high Score: ${highScore}`;
                        } 
                        else{
                            highScoreElement.style.display = 'none'
                        }
                        
        
                    }
                }, 1000);
            }

            startButton.addEventListener('click', function () {
                startButton.style.display = 'none';
                startTimer(10);
                initialValueElement.textContent = 0;
                myVariable = 0;
                clickButton.style.display = 'block';
                highScoreElement.style.display = 'none';
            });

            let clickButton = document.createElement("button");
            clickButton.textContent = "Click Me!";
            clickButton.id = "click-btn";
            clickButton.style.display = 'none';
            document.body.appendChild(clickButton);

            clickButton.addEventListener('click', function () {
                if (interval) {
                    myVariable += 1;
                    initialValueElement.textContent = myVariable;
                }
            });
        });
    </script>
</body>

</html>
