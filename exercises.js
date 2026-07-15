// ===============================
// EXERCISES PAGE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ── Hint toggles ──────────────────────────────
    document.querySelectorAll(".btn-hint").forEach(btn => {

        btn.addEventListener("click", () => {

            const targetId = btn.dataset.target;
            const hintBox  = document.getElementById(targetId);

            const isVisible = hintBox.style.display !== "none";

            hintBox.style.display = isVisible ? "none" : "flex";

            // Toggle button label
            const showText = btn.getAttribute("data-i18n") === "show_hint"
                ? "Hide Hint"
                : "Show Hint";

            btn.textContent = isVisible ? "Show Hint" : "Hide Hint";

        });

    });

    // ── Try it buttons ────────────────────────────
    document.querySelectorAll(".btn-try").forEach(btn => {

        btn.addEventListener("click", () => {

            const exerciseId = btn.dataset.exercise;

            // Αποθήκευσε ποια άσκηση επιλέχτηκε
            localStorage.setItem("selectedExercise", exerciseId);

            window.location.href = "simulator.html";

        });

    });

    // ── Progress ──────────────────────────────────
    updateProgress();

});


// ── Progress tracker ──────────────────────────────

function updateProgress() {

    const total   = document.querySelectorAll(".exercise-card").length;
    const solved  = getSolvedExercises();
    const count   = solved.length;
    const percent = (count / total) * 100;

    document.getElementById("progressText").textContent = `${count} / ${total}`;
    document.getElementById("progressFill").style.width = `${percent}%`;

    // Ενημέρωσε κάθε card
    solved.forEach(id => markAsSolved(id));

}

function getSolvedExercises() {

    const raw = localStorage.getItem("solvedExercises");
    return raw ? JSON.parse(raw) : [];

}

function markAsSolved(exerciseId) {

    // Card
    const card = document.querySelector(`.exercise-card[data-exercise="${exerciseId}"]`);
    if (card) card.classList.add("solved");

    // Status badge
    const badge = document.getElementById(`status-${exerciseId}`);
    if (badge) {
        badge.classList.add("solved");
        const label = badge.querySelector("span:last-child");
        if (label) label.setAttribute("data-i18n", "status_solved");
        if (label) label.textContent = "Solved";
    }

}


// ── Called from simulator.js when user completes an exercise ──
// Χρησιμοποιείται όταν ο simulator επιστρέφει αποτέλεσμα "accept"
// Παράδειγμα κλήσης από simulator.js:
//   markExerciseSolved(localStorage.getItem("selectedExercise"));

function markExerciseSolved(exerciseId) {

    if (!exerciseId) return;

    const solved = getSolvedExercises();

    if (!solved.includes(exerciseId)) {
        solved.push(exerciseId);
        localStorage.setItem("solvedExercises", JSON.stringify(solved));
    }

}
