// AUTH.JS – LOGIN & REGISTER

// Register user
async function registerUser() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) goAuth();
}

// Login user
async function loginUser() {
    const email = document.getElementById("logEmail").value;
    const password = document.getElementById("logPassword").value;

    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
        localStorage.setItem("token", data.token);
        goDashboard();
    }
}