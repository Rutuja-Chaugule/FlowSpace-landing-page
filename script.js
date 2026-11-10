
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("span");

    question.addEventListener("click", () => {

        const isOpen = item.classList.toggle("active");

        answer.style.display = isOpen ? "block" : "none";

        icon.textContent = isOpen ? "−" : "+";

    });

});
