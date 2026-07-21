const selector = document.getElementById("novelSelect");
const reader = document.getElementById("reader");
const downloadBtn = document.getElementById("downloadBtn");

selector.addEventListener("change", () => {
    const file = selector.value;

    if (!file) {
        reader.innerHTML = "Select a novel to start reading.";
        downloadBtn.href = "";
        return;
    }

    downloadBtn.href = file;

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load.");
            return response.text();
        })
        .then(text => {
            reader.innerHTML = text.replace(/\n/g, "<br><br>");
        })
        .catch(() => {
            reader.innerHTML = "Could not load novel.";
        });
});
