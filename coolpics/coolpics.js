function viewerTemplate(pic, alt) {
    return `
        <div class="viewer" id="imageViewer">
            <button class="close-viewer" id="closeViewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    let clickedElement = event.target;

    if (clickedElement.tagName !== "IMG") return;

    let src = clickedElement.getAttribute("src");
    let srcParts = src.split("-");

    let fullImageSrc = srcParts[0] + "-full.jpeg";

    let existingViewer = document.getElementById("imageViewer");
    if (existingViewer) existingViewer.remove();

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedElement.alt));

    document.getElementById("closeViewer").addEventListener("click", closeViewer);
}


function closeViewer() {
    let viewer = document.getElementById("imageViewer");
    if (viewer) {
        viewer.remove();
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let images = document.querySelectorAll(".gallery img");
    images.forEach(img => img.addEventListener("click", viewHandler));
});
