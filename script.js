document.addEventListener("DOMContentLoaded", function () {
    const password = "1"; // Change this to your desired password
    const expectedName = "1";
    const correctAnswer = "18-08-2020";

    const passwordInput = document.getElementById("passwordInput");
    const passwordSubmit = document.getElementById("passwordSubmit");
    const message = document.getElementById("message");
    const questions = document.getElementById("questions");
    const video = document.getElementById("video");
    const greeting = document.getElementById("greeting");
    const nextButton = document.createElement("button");
    let questionCount = 0;

    passwordSubmit.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === password) {
            // Password is correct, show the name prompt
            message.style.display = "block";
            message.textContent = "Please enter your name:";
            passwordForm.style.display = "none";
            passwordInput.value = "";

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.placeholder = "Enter Your Name";
            nameInput.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    const enteredName = nameInput.value;
                    if (enteredName === expectedName) {
                        // Correct name, show questions
                        message.style.display = "none";
                        nameInput.style.display = "none";
                        showQuestions();
                    } else {
                        message.textContent = "Incorrect name. Please try again.";
                        nameInput.value = "";
                    }
                }
            });
            message.appendChild(nameInput);
        } else {
            message.textContent = "Incorrect password. Please try again.";
            passwordInput.value = "";
        }
    });

    const questionText = [
        "When is the day that we both share love (date-month-year)?",
        "What is the important thing of being in a relationship?",
        "Do you love me?",
    ];

    function showQuestions() {
        if (questionCount < questionText.length) {
            questions.style.display = "block";
            questions.innerHTML = questionText[questionCount] + ":<br>";
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.placeholder = "Your Answer";
            answerInput.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    if (questionCount === 0) {
                        const enteredAnswer = answerInput.value;
                        if (enteredAnswer === correctAnswer) {
                            questionCount++;
                            showNextQuestion();
                        } else {
                            message.textContent = "Incorrect answer. You are logged out.";
                            passwordForm.style.display = "block";
                            questions.style.display = "none";
                            questionCount = 0;
                        }
                    } else {
                        questionCount++;
                        showNextQuestion();
                    }
                }
            });
            questions.appendChild(answerInput);
        }
    }

    function showNextQuestion() {
        if (questionCount < questionText.length) {
            questions.innerHTML = questionText[questionCount] + ":<br>";
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.placeholder = "Your Answer";
            answerInput.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    questionCount++;
                    if (questionCount === questionText.length) {
                        questions.style.display = "none";
                        showVideo();
                    }
                }
            });
            questions.appendChild(answerInput);
        }
    }

    function showVideo() {
        video.style.display = "block";
        // Replace the iframe source with the URL of your video
        video.innerHTML = '<iframe width="560" height="315" src="arjane.mp4" frameborder="0" allowfullscreen></iframe>';
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", showGreeting);
        video.appendChild(nextButton);
    }

    function showGreeting() {
        video.style.display = "none";
        greeting.style.display = "block";
        greeting.textContent = "Happy Birthday, Arjane G. Barro! On this special day, may your heart be filled with joy and your path be lined with success. Your journey through life is as unique and inspiring as you are, and we're grateful to have you in our lives. May this new year bring you endless opportunities, exciting adventures, and the fulfillment of all your dreams. Cherish every moment, learn from every experience, and always keep that beautiful smile on your face. Wishing you a year of love, laughter, and personal growth. May you continue to shine brightly and make every day count. Cheers to another amazing year ahead! Happy Birthday, Arjane";
        greeting.style.fontSize = "16px"; // Change font size
        greeting.style.fontWeight = "bold"; // Change font weight
        greeting.style.color = "#ffff";
        nextButton.style.display = "none";
    }
});
