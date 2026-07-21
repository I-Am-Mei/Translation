<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Reading</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1 id="title">Loading...</h1>
</header>

<main>

<button id="downloadBtn">
Download Novel
</button>

<article id="reader">
Loading novel...
</article>

</main>

<script src="reader.js"></script>

</body>
</html>const selector = document.getElementById("novelSelect");
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
});
