// ===============================
// EXAMPLES PAGE
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".load-example").forEach(button => {
        button.addEventListener("click", () => {
            const template = button.dataset.template;
            localStorage.setItem("selectedTemplate", template);
            window.location.href = "simulator.html";
        });
    });
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