const API = "https://winzludo-backend-b0uk.onrender.com/api";

const app = document.getElementById("app");

// Load a page dynamically
async function loadPage(page) {
    try {
        let res = await fetch("./" + page + ".html");  // <-- FIXED HERE
        let html = await res.text();
        app.innerHTML = html;
    } catch (e) {
        app.innerHTML = "<h3>Failed to load page</h3>";
    }
}

// INITIAL PAGE
loadPage("auth");

// GLOBAL NAVIGATION FUNCTIONS
window.goAuth = () => loadPage("auth");
window.goDashboard = () => loadPage("dashboard");
window.goWallet = () => loadPage("wallet");
window.goKyc = () => loadPage("kyc");
window.goProfile = () => loadPage("profile");
window.goAdmin = () => loadPage("admin");