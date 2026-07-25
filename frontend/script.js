const urlInput = document.getElementById("url");
const auditBtn = document.getElementById("auditBtn");
const resultDiv = document.getElementById("result");

auditBtn.addEventListener("click", auditWebsite);

async function auditWebsite() {

    const url = urlInput.value.trim();

    if (!url) {
        showError("Please enter a website URL.");
        return;
    }

    auditBtn.disabled = true;
    auditBtn.textContent = "Auditing...";

    resultDiv.innerHTML = `
        <h2>Audit Report</h2>
        <p>Analyzing website...</p>
    `;

    try {

        const response = await fetch("http://localhost:4000/api/audit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        showResult(data);

    } catch (err) {

        showError(err.message);

    } finally {

        auditBtn.disabled = false;
        auditBtn.textContent = "Audit Website";

    }

}

function showResult(data) {

    resultDiv.innerHTML = `
        <h2>Audit Report</h2>

        <div class="report">

            <div class="label">Status</div>
            <div class="value">${data.status}</div>

            <div class="label">Response Time</div>
            <div class="value">${data.responseTime} ms</div>

            <div class="label">Title</div>
            <div class="value">${data.title}</div>

            <div class="label">Meta Description</div>
            <div class="value">${data.metaDescription || "Not Found"}</div>

            <div class="label">H1 Count</div>
            <div class="value">${data.h1Count}</div>

            <div class="label">Images Missing Alt</div>
            <div class="value">${data.imagesMissingAlt}</div>

            <div class="label">Word Count</div>
            <div class="value">${data.wordCount}</div>

        </div>
    `;

}

function showError(message) {

    resultDiv.innerHTML = `
        <h2>Audit Report</h2>

        <p class="error">${message}</p>
    `;

}