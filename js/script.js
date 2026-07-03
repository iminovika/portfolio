// ===========================
// Появление секций при прокрутке
// ===========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s ease";
    observer.observe(section);
});

// ===========================
// Копирование Email
// ===========================

const copyBtn = document.getElementById("copyEmail");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        const email = document.getElementById("emailInput").value;

        navigator.clipboard.writeText(email);

        copyBtn.innerText = "Скопировано ✓";

        setTimeout(() => {
            copyBtn.innerText = "Копировать";
        }, 2000);

    });

}