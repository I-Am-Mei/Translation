const selector = document.getElementById("novelSelect");
const reader = document.getElementById("reader");
const downloadBtn = document.getElementById("downloadBtn");

let selectedFile = "";

selector.addEventListener("change", () => {
    const file = selector.value;
    selectedFile = file;

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

downloadBtn.addEventListener("click", () => {
    if (!selectedFile) {
        alert("Please select a novel first.");
        return;
    }

    const link = document.createElement("a");
    link.href = selectedFile;
    link.download = selectedFile.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});const selector = document.getElementById("novelSelect");
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
