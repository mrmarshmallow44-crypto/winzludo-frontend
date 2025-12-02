// WALLET.JS – ADD MONEY & WITHDRAW

// Load wallet balance
async function loadWallet() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/wallet/balance`, {
        headers: { "Authorization": token }
    });

    const data = await res.json();
    document.getElementById("walletBalance").innerText = data.balance;
}

// Add money
async function addMoney() {
    const amount = document.getElementById("addAmount").value;
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/wallet/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ amount })
    });

    const data = await res.json();
    alert(data.message);
    loadWallet();
}

// Withdraw
async function withdrawMoney() {
    const amount = document.getElementById("withdrawAmount").value;
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/wallet/withdraw`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ amount })
    });

    const data = await res.json();
    alert(data.message);
    loadWallet();
}