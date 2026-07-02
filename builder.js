// ===============================
// BUILDER
// ===============================

const languageInput =
document.getElementById("languageInput");

const descriptionInput =
document.getElementById("descriptionInput");

const authorInput =
document.getElementById("authorInput");

const machine = new TuringMachine();

const contextMenu =
document.getElementById("contextMenu");

let selectedNode = null;

let stateCounter = 0;

const fromSelect = document.getElementById("fromState");
const toSelect = document.getElementById("toState");

const readInput = document.getElementById("readSymbol");
const writeInput = document.getElementById("writeSymbol");
const moveSelect = document.getElementById("moveDirection");

const transitionTable =
document.getElementById("transitionTable");


function refreshStateSelectors(){

    fromSelect.innerHTML = "";

    toSelect.innerHTML = "";

    machine.states.forEach(state=>{

        const option1 =
        document.createElement("option");

        option1.value = state;

        option1.textContent = state;

        fromSelect.appendChild(option1);

        const option2 =
        document.createElement("option");

        option2.value = state;

        option2.textContent = state;

        toSelect.appendChild(option2);

    });

}


const cy = cytoscape({

    container: document.getElementById("graph"),

    elements: [],

    style: [

        {
            selector: "node",
            style: {
                label: "data(label)",
                width: 60,
                height: 60,
                "background-color": "#2563EB",
                color: "#fff",
                "text-valign": "center",
                "text-halign": "center",
                "font-size": "18px"
            }
        },

        {
            selector: "edge",
            style: {
                label: "data(label)",
                width: 3,
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "line-color": "#64748B",
                "target-arrow-color": "#64748B",
                "font-size": "14px"
            }
        }

    ],

    layout: {

        name: "preset"

    }

});

console.log(cy);

cy.on("cxttap","node",(event)=>{

    // Αποτρέπει το native browser context menu να ανοίξει μαζί με το δικό μας
    event.originalEvent.preventDefault();

    selectedNode = event.target;

    contextMenu.style.display="flex";

    contextMenu.style.left =
    event.originalEvent.pageX+"px";

    contextMenu.style.top =
    event.originalEvent.pageY+"px";

});

document.addEventListener("click",()=>{

    contextMenu.style.display="none";

});

// Βοηθητική συνάρτηση: ελέγχει αν υπάρχει επιλεγμένο node
// πριν εκτελεστεί κάποια ενέργεια που το χρειάζεται
function requireSelectedNode(){

    if(!selectedNode){

        alert("Select a node first (right-click on it).");

        return false;

    }

    return true;

}

document
.getElementById("setStart")
.onclick = ()=>{

    if(!requireSelectedNode()) return;

    if(machine.startState === selectedNode.id()){
        machine.startState = null;
    }
    machine.setStartState(

        selectedNode.id()

    );

    updateNodeStyles();

};

document
.getElementById("setReject")
.onclick = ()=>{

    if(!requireSelectedNode()) return;

    // Αν το ίδιο state ήταν accept, το καθαρίζουμε
    if(machine.acceptState === selectedNode.id()){
        machine.acceptState = null;
    }

    machine.setRejectState(
        selectedNode.id()
    );

    updateNodeStyles();
}

document
.getElementById("setAccept")
.onclick = ()=>{

    if(!requireSelectedNode()) return;

    // Αν το ίδιο state ήταν reject, το καθαρίζουμε
    if(machine.rejectState === selectedNode.id()){
        machine.rejectState = null;
    }

    machine.setAcceptState(
        selectedNode.id()
    );

    updateNodeStyles();

};

// ===================================
// ADD STATE BUTTON
// ===================================

document
.getElementById("addState")
.addEventListener("click", addState);



function addState() {
    const id = "q" + stateCounter;
    stateCounter++;
    machine.addState(id);
    cy.add({
        group: "nodes",
        data: {
            id: id,
            label: id
        },

        position: {
            x: 150 + stateCounter * 60,
            y: 180
        }

    });

    cy.layout({

    name: "grid",
    fit: true,
    padding: 50

    }).run();

    console.log(cy.nodes().length);
    refreshStateSelectors();
    refreshJSON();

}


// ===================================
// DELETE SELECTED NODE
// ===================================

document
.getElementById("deleteSelected")
.onclick = function(){

    if(!requireSelectedNode()) return;

    const id = selectedNode.id();

    // Αν το tm.js έχει μέθοδο removeState, τη χρησιμοποιούμε.
    // Αλλιώς, προσπαθούμε να αφαιρέσουμε το state "με το χέρι".
    if(typeof machine.removeState === "function"){

        machine.removeState(id);

    } else {

        if(Array.isArray(machine.states)){

            machine.states =
            machine.states.filter(s => s !== id);

        }

        if(machine.startState === id) machine.startState = null;
        if(machine.acceptState === id) machine.acceptState = null;
        if(machine.rejectState === id) machine.rejectState = null;

        if(Array.isArray(machine.transitions)){

            machine.transitions =
            machine.transitions.filter(t =>
                t.from !== id && t.to !== id
            );

        }

    }

    // Αφαιρεί το node (και τα συνδεδεμένα edges) από το γράφημα
    cy.remove(cy.getElementById(id));

    // Ξαναχτίζει τον πίνακα transitions από την αρχή,
    // αφαιρώντας τις γραμμές που αφορούν το διαγραμμένο state
    Array.from(transitionTable.rows).forEach(row=>{

        if(row.cells[0].textContent === id ||
           row.cells[4].textContent === id){

            row.remove();

        }

    });

    selectedNode = null;

    refreshStateSelectors();
    refreshJSON();
    updateNodeStyles();

};


// ===================================
// CLEAR MACHINE
// ===================================
document.getElementById('clearMachine')
.onclick = function(){
    const confirmClear = confirm("Please confirm: Delete the Turing Machine? This cannot be undone.");

    if(!confirmClear) return;

    machine.states=[];
    machine.transitions={};
    machine.startState=null;
    machine.acceptState=null;
    machine.rejectState=null;
    

    machine.currentState = null;
    machine.tape= [];
    machine.head=0;
    machine.steps = 0;

    cy.elements().remove();
    transitionTable.innerHTML = "";
    refreshStateSelectors();
    stateCounter=0;
    selectedNode=null;

    refreshJSON();
};


// ===================================
// SAVE MACHINE
// ===================================

document
.getElementById("saveMachine")
.onclick = function(){
    if(machine.states.length===0){
        alert("Add at least one state before saving the Turing Machine");
        return;
    }

    localStorage.setItem("savedMachine", machine.toJSON);

    alert("Machine Saved!");
};


// ===================================
// OPEN SIMULATOR
// ===================================

/* 
document
.getElementById("openSimulator")
.onclick = function(){

    if(!localStorage.getItem("savedMachine")){

        alert("Save the machine first.");

        return;

    }

    window.location.href = "simulator.html";

}; */

// ===================================
// JSON
// ===================================

function refreshJSON(){

    machine.info.language =
    languageInput.value;

    machine.info.description =
    descriptionInput.value;

    machine.info.author =
    authorInput.value;

    document
    .getElementById("machineJSON")
    .textContent =
    JSON.stringify(

        machine.toJSON(),

        null,

        4

    );

}


document
.getElementById("addTransitionForm")
.onclick = function(){

    const from = fromSelect.value;
    const to = toSelect.value;
    const read = readInput.value;
    const write = writeInput.value;
    const move = moveSelect.value;

    if(!from || !to){

        alert("Choose states.");
        return;

    }

    machine.addTransition(

        from,
        read,
        write,
        move,
        to

    );

    const edgeId = Date.now().toString();

    cy.add({
        group:"edges",
        data:{
            id: edgeId,
            source: from,
            target: to,
            label: `${read}/${write},${move}`
        }
    });

    const row = document.createElement("tr");
    row.dataset.edgeId = edgeId;

    row.innerHTML = `
        <td>${from}</td>
        <td>${read}</td>
        <td>${write}</td>
        <td>${move}</td>
        <td>${to}</td>
        <td>✓</td>
    `;

    transitionTable.appendChild(row);
    refreshJSON();
    readInput.value = "";
    writeInput.value = "";

};

function updateNodeStyles(){

    cy.nodes().forEach(node=>{
        node.style({
            "background-color":"#2563EB",
            "border-width":0
        });

        if(node.id()===machine.startState){
            node.style({
                "background-color":"#26169f"
            });

        }

        if(node.id()===machine.acceptState){
            node.style({
                "border-width":6,
                "border-color":"#16A34A"
            });

        }

        if(node.id()===machine.rejectState){
            node.style({
                "background-color":"#DC2626"
            });

        }

    });
    refreshJSON();
}

// ===================================
// OPEN SIMULATOR
// ===================================

document
.getElementById("openSimulator")
.addEventListener("click", openSimulator);

function openSimulator(){

    // Ενημερώνουμε πρώτα το JSON
    refreshJSON();

    // Αποθηκεύουμε τη μηχανή
    localStorage.setItem(

        "savedMachine",

        JSON.stringify(machine.toJSON())

    );

    // Μετάβαση στον simulator
    window.location.href =
    "simulator.html";

}

document
.getElementById("saveMachine")
.addEventListener("click", saveMachine);

function saveMachine(){

    refreshJSON();

    localStorage.setItem(

        "savedMachine",

        JSON.stringify(machine.toJSON())

    );

    alert("Machine saved successfully!");

}

// ======================================
// EXPORT MACHINE
// ======================================

document
.getElementById("exportMachine")
.onclick = exportMachine;

function exportMachine(){

    refreshJSON();

    const json =
    JSON.stringify(

        machine.toJSON(),

        null,

        4

    );

    const blob =
    new Blob(

        [json],

        {type:"application/json"}

    );

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;

    a.download = "machine.json";

    a.click();

    URL.revokeObjectURL(url);

}

// ======================================
// IMPORT MACHINE
// ======================================

document
.getElementById("importMachine")
.onclick = ()=>{

    document
    .getElementById("importFile")
    .click();

};

document
.getElementById("importFile")
.addEventListener(

"change",

function(event){

    const file =
    event.target.files[0];

    if(!file){

        return;

    }

    const reader =
    new FileReader();

    reader.onload=function(e){

        const data =
        JSON.parse(e.target.result);

        loadMachine(data);

    };

    reader.readAsText(file);

});

function loadMachine(data){

    machine.states=[];

    machine.transitions={};

    cy.elements().remove();

    stateCounter=0;

    machine.info =
    data.info || {};

    languageInput.value =
    machine.info.language || "";

    descriptionInput.value =
    machine.info.description || "";

    authorInput.value =
    machine.info.author || "";

    data.states.forEach(state=>{

        machine.addState(state);

        cy.add({

            group:"nodes",

            data:{

                id:state,

                label:state

            }

        });

        stateCounter++;

    });

    machine.startState =
    data.start;

    machine.acceptState =
    data.accept;

    machine.rejectState =
    data.reject;

    for(const from in data.transitions){

        for(const read in data.transitions[from]){

            const t =
            data.transitions[from][read];

            machine.addTransition(

                from,

                read,

                t.write,

                t.move,

                t.next

            );

            cy.add({

                group:"edges",

                data:{

                    id:Date.now()+Math.random(),

                    source:from,

                    target:t.next,

                    label:
                    `${read}/${t.write},${t.move}`

                }

            });

        }

    }

    cy.layout({

        name:"grid"

    }).run();

    refreshStateSelectors();

    updateNodeStyles();

    refreshJSON();

}
// ===================================
// DELETE KEY SUPPORT
// ===================================

document.addEventListener("keydown", (e) => {

    if(e.key !== "Delete") return;

    const tag = document.activeElement.tagName;
    if(tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if(!selectedNode) return;

    document.getElementById("deleteSelected").onclick();

});


// ===================================
// TRANSITION ROW RIGHT-CLICK MENU
// ===================================

const transitionContextMenu =
document.getElementById("transitionContextMenu");

let selectedRow = null;

transitionTable.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    const row = e.target.closest("tr");
    if(!row || !row.dataset.edgeId) return;

    selectedRow = row;

    Array.from(transitionTable.rows).forEach(r =>
        r.classList.remove("row-selected")
    );
    row.classList.add("row-selected");

    transitionContextMenu.style.display = "flex";
    transitionContextMenu.style.left = e.pageX + "px";
    transitionContextMenu.style.top  = e.pageY + "px";

});

document.addEventListener("click", () => {
    if(transitionContextMenu)
        transitionContextMenu.style.display = "none";
});

document.getElementById("deleteTransition").onclick = () => {

    if(!selectedRow) return;

    const from  = selectedRow.cells[0].textContent;
    const read  = selectedRow.cells[1].textContent;
    const edgeId = selectedRow.dataset.edgeId;

    // Αφαίρεσε από machine
    if(machine.transitions[from]){
        delete machine.transitions[from][read];
        if(Object.keys(machine.transitions[from]).length === 0){
            delete machine.transitions[from];
        }
    }

    // Αφαίρεσε ΜΟΝΟ το συγκεκριμένο edge με το id
    const edge = cy.getElementById(edgeId);
    if(edge) cy.remove(edge);

    selectedRow.remove();
    selectedRow = null;
    refreshJSON();

};
