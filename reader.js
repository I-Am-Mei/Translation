const selector = document.getElementById("novelSelect");
const reader = document.getElementById("reader");

selector.addEventListener("change", () => {
    const file = selector.value;

    if (!file) {
        reader.innerHTML = "Select a novel to start reading.";
        return;
    }

    fetch(file)
        .then(response => response.text())
        .then(text => {
            reader.innerHTML = text.replace(/\n/g, "<br><br>");
        })
        .catch(() => {
            reader.innerHTML = "Could not load novel.";
        });
});
