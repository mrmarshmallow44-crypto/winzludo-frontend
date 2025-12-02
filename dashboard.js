// DASHBOARD - LOAD USER DETAILS
async function loadDashboard() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/user/me`, {
        headers: { "Authorization": token }
    });

    const data = await res.json();

    document.getElementById("userName").innerText = data.name;
}