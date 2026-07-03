const copyButton = document.getElementById("copyEmail");

if (copyButton) {

    copyButton.addEventListener("click", () => {

        const input = document.getElementById("emailInput");

        navigator.clipboard.writeText(input.value);

        copyButton.innerText = "✅ Скопировано";

        setTimeout(() => {

            copyButton.innerText = "Копировать";

        },2000);

    });

}