// ===============================
// SIMULATOR
// ===============================

let machine = new TuringMachine();

let lastLoadedWord = "";

// Αν ήρθαμε από τα Examples, φόρτωσε το template
const saved = localStorage.getItem("loadedTemplate");
if (saved) {
    const template = JSON.parse(saved);
    loadTemplate(template);           // η δική σου function που φορτώνει states/transitions
    localStorage.removeItem("loadedTemplate"); // καθάρισε μετά
};

const machineInput = document.getElementById("machineInput");
const inputWord = document.getElementById("inputWord");

const loadMachineBtn = document.getElementById("loadMachine");
const stepButton = document.getElementById("stepButton");
const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");

const currentStateEl = document.getElementById("currentState");
const headPositionEl = document.getElementById("headPosition");
const stepCounterEl = document.getElementById("stepCounter");

const tapeContainer = document.getElementById("tape");
const explanationBox = document.getElementById("explanationBox");

const templateSelect = document.getElementById("templateSelect");

const machineLanguage =
document.getElementById("machineLanguage");

const machineDescription =
document.getElementById("machineDescription");

const machineAuthor =
document.getElementById("machineAuthor");


// ===================================
// TEMPLATE LIBRARY
//
// Έτοιμες, ελεγμένες μηχανές που ο
// χρήστης μπορεί να φορτώσει με ένα κλικ
// ===================================

const templates = {

    palindrome:
`start:q0
accept:q0
reject:qReject

q0,a,q1,X,R
q0,b,q2,Y,R
q0,X,q0,X,R
q0,Y,q0,Y,R

q1,a,q1,a,R
q1,b,q1,b,R
q1,X,q1cmp,X,L
q1,Y,q1cmp,Y,L
q1,□,q1cmp,□,L

q1cmp,a,qBackLeft,X,S
q1cmp,b,qReject,b,S
q1cmp,X,qBackLeft,X,S

q2,a,q2,a,R
q2,b,q2,b,R
q2,X,q2cmp,X,L
q2,Y,q2cmp,Y,L
q2,□,q2cmp,□,L

q2cmp,b,qBackLeft,Y,S
q2cmp,a,qReject,a,S
q2cmp,Y,qBackLeft,Y,S

qBackLeft,a,qBackLeft,a,L
qBackLeft,b,qBackLeft,b,L
qBackLeft,X,qBackLeft,X,L
qBackLeft,Y,qBackLeft,Y,L
qBackLeft,□,q0,□,R`,

    reverse:
`start:q0
accept:qDone

q0,a,qPlaceSentinel,a,L
q0,b,qPlaceSentinel,b,L
q0,□,qPlaceSentinel,□,L

qPlaceSentinel,□,qInit,$,R

qInit,a,qInit,a,R
qInit,b,qInit,b,R
qInit,□,qFindUnconsumed,#,L

qFindUnconsumed,□,qFindUnconsumed,□,L
qFindUnconsumed,a,qCarryA_pre,□,R
qFindUnconsumed,b,qCarryB_pre,□,R
qFindUnconsumed,$,qDone,$,R

qCarryA_pre,□,qCarryA_pre,□,R
qCarryA_pre,#,qCarryA_post,#,R

qCarryA_post,a,qCarryA_post,a,R
qCarryA_post,b,qCarryA_post,b,R
qCarryA_post,□,qReturnLeft,a,L

qCarryB_pre,□,qCarryB_pre,□,R
qCarryB_pre,#,qCarryB_post,#,R

qCarryB_post,a,qCarryB_post,a,R
qCarryB_post,b,qCarryB_post,b,R
qCarryB_post,□,qReturnLeft,b,L

qReturnLeft,a,qReturnLeft,a,L
qReturnLeft,b,qReturnLeft,b,L
qReturnLeft,#,qFindUnconsumed,#,L`,

anbn:
`start:q0
accept:qAccept
reject:qReject

# Βρες το πρώτο αμαρκάριστο a
q0,X,q0,X,R
q0,Y,q0,Y,R
q0,a,q1,X,R
q0,b,qReject,b,S
q0,□,q3,□,R

# Ψάξε το αντίστοιχο b
q1,a,q1,a,R
q1,X,q1,X,R
q1,Y,q1,Y,R
q1,b,q2,Y,L
q1,□,qReject,□,S

# Γύρνα πίσω στην αρχή
q2,a,q2,a,L
q2,b,q2,b,L
q2,X,q2,X,L
q2,Y,q2,Y,L
q2,□,q0,□,R

# Έλεγχος τέλους
q3,Y,q3,Y,R
q3,□,qAccept,□,S
q3,a,qReject,a,S
q3,b,qReject,b,S
q3,X,q3,X,R` };


if(templateSelect){

    templateSelect.addEventListener("change", ()=>{

        const key = templateSelect.value;

        if(key && templates[key]){

            machineInput.value = templates[key];

        }

    });

}


// ===================================
// I18N HELPERS (χρησιμοποιεί το ίδιο
// translations object από το i18n.js)
// ===================================

function getCurrentLang(){

    return localStorage.getItem("preferredLang") || "el";

}

function t(key, vars){

    const lang = getCurrentLang();

    let text =
    (translations[lang] && translations[lang][key])
    || key;

    if(vars){

        Object.keys(vars).forEach(varKey=>{

            text = text.replace(

                "{" + varKey + "}",
                vars[varKey]

            );

        });

    }

    return text;

}


// ===================================
// PARSER: textarea -> TuringMachine
//
// Μορφή γραμμών:
//   start:qX
//   accept:qX
//   reject:qX
//   απο,διάβασμα,προς,γραφή,κίνηση
// ===================================

function parseMachineDefinition(text){

    const newMachine = new TuringMachine();

    const lines = text.split("\n");

    const errors = [];

    lines.forEach((rawLine, index)=>{

        const line = rawLine.trim();

        if(line === "" || line.startsWith("#")){

            return;

        }

        if(line.startsWith("...")){

            return;

        }

        // ---- start:qX / accept:qX / reject:qX ----

        const specialMatch =
        line.match(/^(start|accept|reject)\s*:\s*(\S+)$/i);

        if(specialMatch){

            const type = specialMatch[1].toLowerCase();
            const state = specialMatch[2];

            newMachine.addState(state);

            if(type === "start") newMachine.setStartState(state);
            if(type === "accept") newMachine.setAcceptState(state);
            if(type === "reject") newMachine.setRejectState(state);

            return;

        }

        // ---- from,read,to,write,move ----

        const parts =
        line.split(",").map(p=>p.trim());

        if(parts.length !== 5){

            errors.push(

                `Γραμμή ${index + 1}: "${rawLine}" — ` +
                `αναμενόταν 5 πεδία (από,διάβασμα,προς,γραφή,κίνηση).`

            );

            return;

        }

        const [from, read, to, write, move] = parts;

        if(!["L","R","S"].includes(move.toUpperCase())){

            errors.push(

                `Γραμμή ${index + 1}: άκυρη κίνηση "${move}" ` +
                `(επιτρέπονται μόνο L, R, S).`

            );

            return;

        }

        newMachine.addState(from);
        newMachine.addState(to);

        newMachine.addTransition(

            from,
            read,
            write,
            move.toUpperCase(),
            to

        );

    });

    if(!newMachine.startState){

        errors.push(

            "Δεν ορίστηκε αρχική κατάσταση " +
            "(πρόσθεσε μια γραμμή «start:qX»)."

        );

    }

    return { machine: newMachine, errors: errors };

}


// ===================================
// CONVERT SAVED JSON (Builder) -> TEXT
// ===================================

function jsonMachineToText(data){

    const lines = [];

    if(data.start) lines.push(`start:${data.start}`);
    if(data.accept) lines.push(`accept:${data.accept}`);
    if(data.reject) lines.push(`reject:${data.reject}`);

    if(data.transitions){

        Object.keys(data.transitions).forEach(from=>{

            const rules = data.transitions[from];

            Object.keys(rules).forEach(read=>{

                const rule = rules[read];

                lines.push(

                    `${from},${read},${rule.next},` +
                    `${rule.write},${rule.move}`

                );

            });

        });

    }

    return lines.join("\n");

}


// ===================================
// LOAD MACHINE BUTTON
// ===================================

loadMachineBtn.addEventListener("click", ()=>{

    const result =
    parseMachineDefinition(machineInput.value);

    if(result.errors.length > 0){

        alert(

            "Βρέθηκαν σφάλματα στον ορισμό της μηχανής:\n\n" +
            result.errors.join("\n")

        );

        return;

    }

    machine = result.machine;

    lastLoadedWord = inputWord.value || "";

    machine.loadInput(lastLoadedWord);

    renderTape();
    updateStatus();

    explanationBox.textContent =
    t("explain_loaded");

});


// ===================================
// STEP BUTTON
// ===================================

stepButton.addEventListener("click", ()=>{

    if(!machine.startState){

        alert(t("explain_no_machine"));

        return;

    }

    if(machine.currentState === null){

        machine.loadInput(lastLoadedWord);

    }

    const fromState = machine.currentState;
    const symbolBefore =
    machine.tape[machine.head] || "□";
    const headBefore = machine.head;

    const result = machine.step();

    renderTape();
    updateStatus();

    if(result.finished){

        showHaltMessage(result.accepted);

    } else {

        const writtenSymbol =
        machine.tape[headBefore];

        let moveLabel;

        if(machine.head > headBefore){
            moveLabel = t("move_right");
        } else if(machine.head < headBefore){
            moveLabel = t("move_left");
        } else {
            moveLabel = t("move_stay");
        }

        explanationBox.textContent =

        t("explain_step", {

            from: fromState,
            symbol: symbolBefore,
            write: writtenSymbol,
            move: moveLabel,
            to: result.state

        });

    }

});


// ===================================
// RUN BUTTON (εκτελεί όλα τα βήματα
// αμέσως, δείχνει μόνο το τελικό αποτέλεσμα)
// ===================================

runButton.addEventListener("click", ()=>{

    if(!machine.startState){

        alert(t("explain_no_machine"));

        return;

    }

    machine.loadInput(lastLoadedWord);

    const MAX_STEPS = 10000;

    let result = { finished:false };

    while(!result.finished && machine.steps < MAX_STEPS){

        result = machine.step();

    }

    renderTape();
    updateStatus();

    if(result.finished){

        showHaltMessage(result.accepted);

    } else {

        explanationBox.textContent =
        t("explain_too_many_steps");

    }

});


// ===================================
// RESET BUTTON
// ===================================

resetButton.addEventListener("click", ()=>{

    if(!machine.startState){

        return;

    }

    machine.loadInput(lastLoadedWord);

    renderTape();
    updateStatus();

    explanationBox.textContent =
    t("explain_loaded");

});


// ===================================
// HALT MESSAGE
// ===================================

function showHaltMessage(accepted){

    explanationBox.textContent =

    accepted ?

    t("explain_accept", { state: machine.currentState }) :

    t("explain_reject", { state: machine.currentState });

}


// ===================================
// RENDER TAPE
// ===================================

function renderTape(){

    tapeContainer.innerHTML = "";

    const visibleCells = 15;

    const startIndex =
    Math.max(0, machine.head - Math.floor(visibleCells / 2));

    for(let i = startIndex; i < startIndex + visibleCells; i++){

        const cell =
        document.createElement("div");

        cell.className = "tape-cell";

        if(i === machine.head){

            cell.classList.add("active");

        }

        cell.textContent =
        machine.tape[i] || "□";

        tapeContainer.appendChild(cell);

    }

}


// ===================================
// UPDATE STATUS
// ===================================

function updateStatus(){

    currentStateEl.textContent =
    machine.currentState || "-";

    headPositionEl.textContent =
    machine.head;

    stepCounterEl.textContent =
    machine.steps;

}


// ===================================
// AUTO-LOAD FROM BUILDER ON PAGE LOAD
// ===================================

document.addEventListener("DOMContentLoaded", ()=>{

    const saved =
    localStorage.getItem("savedMachine");

    if(saved){

        try{
            const data =
            JSON.parse(saved);

            machineInput.value =
            jsonMachineToText(data);

            // ==========================
            // MACHINE INFORMATION
            // ==========================

            if(data.info){

                machineLanguage.textContent =
                data.info.language || "-";

                machineDescription.textContent =
                data.info.description || "-";

                machineAuthor.textContent =
                data.info.author || "-";

            }

        }

        catch(e){

            console.error(
                "Could not parse saved machine:",
                e
            );
        }
    }
    else{

        machineLanguage.textContent = "-";
        machineDescription.textContent = "-";
        machineAuthor.textContent = "-";

    }
    renderTape();
    updateStatus();

});


// ===============================
// Load template from Examples page
// ===============================

const selectedTemplate =
localStorage.getItem("selectedTemplate");

if(selectedTemplate){

    templateSelect.value =
    selectedTemplate;

    templateSelect.dispatchEvent(
        new Event("change")
    );

    localStorage.removeItem(
        "selectedTemplate"
    );

}
