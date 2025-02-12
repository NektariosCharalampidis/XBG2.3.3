document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Υδατικό διάλυμα οινοπνεύματος 3% v/v σημαίνει ότι:",
            options: [
                "α. σε 100 g διαλύματος έχουμε διαλύσει 3 ml οινοπνεύματος",
                "β. σε 100 ml διαλύματος υπάρχουν 3 ml οινοπνεύματος",
                "γ. σε 100 ml διαλύτη έχουμε διαλύσει 3 g οινοπνεύματος"
            ],
            correct: 1
        },
        {
            question: "Σε 200 ml μπίρα περιέχονται 20 ml αλκοόλη. Η περιεκτικότητα της μπίρας σε αλκοόλη %v/v, είναι:",
            options: ["α. 11%", "β. 10%", "γ. 9%"],
            correct: 1
        },
        {
            question: "Διαλύουμε 9 ml οινοπνεύματος σε νερό και προκύπτει διάλυμα 100 ml. Η περιεκτικότητα του διαλύματος σε οινόπνευμα %v/v είναι:",
            options: ["α. 11,11%", "β. 9%", "γ. 10%"],
            correct: 1
        },
        {
            question: "Περιεκτικότητα διαλύματος 22% v/v σημαίνει ότι ένα ποτήρι διαλύματος 100 ml περιέχει:",
            options: ["α. 22 ml διαλυμένης ουσίας", "β. 22 ml διαλύτη", "γ. 22 g διαλυμένης ουσίας"],
            correct: 0
        },
        {
            question: "Για να παρασκευαστεί διάλυμα 35% v/v διαλύουμε:",
            options: [
                "α. 35 g ουσίας σε 100 ml νερού",
                "β. 35 ml ουσίας σε νερό ώστε ο τελικός όγκος του διαλύματος να είναι 100 ml",
                "γ. 35 ml ουσίας σε 50 ml νερού"
            ],
            correct: 1
        },
        {
            question: "Για να παρασκευαστεί διάλυμα υδροχλωρικού οξέος με 15% v/v διαλύουμε:",
            options: [
                "α. 15 ml οξυ σε 100 ml νερού",
                "β. 10 ml οξυ σε 90 ml νερού",
                "γ. 30 ml οξυ σε νερό ώστε ο τελικός όγκος του διαλύματος να είναι 200 ml"
            ],
            correct: 2
        },
        {
            question: "Ποια από τις παρακάτω περιπτώσεις εκφράζει περιεκτικότητα % v/v;",
            options: [
                "α. 5 ml αλκοόλης σε 100 ml μπύρας",
                "β. 8 g αλάτι σε ένα κιλό νερού",
                "γ. 3 g αλάτι σε 100 g αλατόνερου"
            ],
            correct: 0
        },
        {
            question: "Ένα υδατικό διάλυμα 100 ml περιέχει 5 ml οξυ. Το διάλυμα περιέχει:",
            options: [
                "α. 10% w/v οξυ",
                "β. 5% v/v οξυ",
                "γ. 5% w/w οξυ"
            ],
            correct: 1
        },
        {
            question: "Ένα λίτρο μπίρας έχει 90 ml αλκοόλης. Άρα η περιεκτικότητα σε αλκοόλη είναι:",
            options: ["α. 9% v/v", "β. 9% w/w", "γ. 90% v/v"],
            correct: 0
        },
        {
            question: "Αν πιεις ένα ποτήρι μπίρα (200 ml) 11% v/v σε αλκοόλη, πόσα ml αλκοόλη κατανάλωσες;",
            options: ["α. 20 ml", "β. 22 ml", "γ. 11 ml"],
            correct: 1
        }
    ];

    const quizContainer = document.getElementById("quiz");
    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result");

    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = optionIndex;
            questionElement.appendChild(input);
            questionElement.innerHTML += option + "<br>";
        });

        quizContainer.appendChild(questionElement);
    });

    submitButton.addEventListener("click", () => {
        let score = 0;
        let wrongAnswers = 0;

        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected) {
                if (parseInt(selected.value) === q.correct) {
                    score++;
                } else {
                    wrongAnswers++;
                }
            } else {
                wrongAnswers++;
            }
        });

        if (wrongAnswers > 2) {
            resultContainer.innerHTML = "<p class='wrong'>Δοκιμάστε ξανά!</p>";
        } else {
            resultContainer.innerHTML = `<p class='correct'>Μπράβο! Σωστές απαντήσεις: ${score}/${questions.length}</p>`;
        }
    });
});
