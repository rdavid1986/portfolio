document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});
async function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(".mainContainer").innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}


const about = document.getElementById("about");
about.addEventListener("click",async (event) => {
    event.preventDefault();
    console.log("click on about ")
    await loadContent("./pages/about.html");
})

const portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click on portfolio ")
    loadContent("./pages/portfolio.html");
})
const contact = document.getElementById("contact");
contact.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click on contact ")
    loadContent("./pages/contact.html");
})