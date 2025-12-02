// ADMIN PAGE – FETCH USERS

async function loadUsers() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/admin/users`, {
        headers: { "Authorization": token }
    });

    const data = await res.json();

    const list = document.getElementById("userList");
    list.innerHTML = "";

    data.users.forEach(u => {
        list.innerHTML += `
            <li>${u.name} — ${u.email}</li>
        `;
    });
}