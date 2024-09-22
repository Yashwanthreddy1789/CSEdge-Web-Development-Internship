// Update the live preview
function updatePreview() {
    document.getElementById("previewName").textContent = document.getElementById("name").value || "Your Name";
    document.getElementById("previewEmail").textContent = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("previewSummary").textContent = document.getElementById("summary").value || "Summary goes here...";
    document.getElementById("previewSkills").textContent = "Skills: " + (document.getElementById("skills").value || "");
    document.getElementById("previewExperience").innerHTML = "Experience: " + quill.root.innerHTML || "Experience: ";
}

// Initialize Quill editor for experience
var quill = new Quill('#experienceEditor', {
    theme: 'snow'
});

quill.on('text-change', updatePreview);

// Update preview on input changes
document.getElementById("name").addEventListener("input", updatePreview);
document.getElementById("email").addEventListener("input", updatePreview);
document.getElementById("summary").addEventListener("input", updatePreview);
document.getElementById("skills").addEventListener("input", updatePreview);

// DOCX generation
document.getElementById("docxBtn").addEventListener("click", function() {
    var content = `
        Name: ${document.getElementById("previewName").textContent}
        Email: ${document.getElementById("previewEmail").textContent}
        Summary: ${document.getElementById("previewSummary").textContent}
        Skills: ${document.getElementById("previewSkills").textContent}
        Experience: ${quill.root.innerText}
    `;
    var blob = new Blob([content], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.docx";
    link.click();
});
