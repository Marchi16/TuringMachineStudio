// ===============================
// THEORY PAGE
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    const buttons =
    document.querySelectorAll(".topic");

    const sections =
    document.querySelectorAll(".theory-section");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>{

                btn.classList.remove("active");

            });

            sections.forEach(section=>{

                section.classList.remove("active");

            });

            button.classList.add("active");

            document
            .getElementById(button.dataset.section)
            .classList.add("active");

        });

    });

});
