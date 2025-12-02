// PROFILE – UPDATE USER DATA

async function loadProfile() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/user/me`, {
        headers: { "Authorization": token }
    });

    const data = await res.json();

    document.getElementById("profName").value = data.name;
    document.getElementById("profEmail").value = data.email;
}

async function updateProfile() {
    const token = localStorage.getItem("token");

    const name = document.getElementById("profName").value;

    const res = await fetch(`${API}/user/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ name })
    });

    const data = await res.json();
    alert(data.message);
}