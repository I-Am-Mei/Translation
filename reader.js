const selector = document.getElementById("novelSelect");
const reader = document.getElementById("reader");
const downloadBtn = document.getElementById("downloadBtn");

let currentFile = "";

selector.addEventListener("change", () => {
    currentFile = selector.value;

    if (!currentFile) {
        reader.innerHTML = "Select a novel to start reading.";
        return;
    }

    fetch(currentFile)
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

downloadBtn.addEventListener("click", () => {
    if (!currentFile) {
        alert("Please select a novel first.");
        return;
    }

    const link = document.createElement("a");
    link.href = currentFile;
    link.setAttribute("download", currentFile.split("/").pop());

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});const selector = document.getElementById("novelSelect");
const reader = document.getElementById("reader");
const downloadBtn = document.getElementById("downloadBtn");

let currentFile = "";

selector.addEventListener("change", () => {
    currentFile = selector.value;

    if (!currentFile) {
        reader.innerHTML = "Select a novel to start reading.";
        return;
    }

    fetch(currentFile)
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

downloadBtn.addEventListener("click", () => {
    if (!currentFile) {
        alert("Please select a novel first.");
        return;
    }

    const link = document.createElement("a");
    link.href = currentFile;
    link.download = currentFile.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});const selector = document.getElementById("novelSelect");
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
