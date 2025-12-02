// KYC SUBMISSION

async function submitKyc() {
    const token = localStorage.getItem("token");
    
    const aadhaar = document.getElementById("aadhaar").value;
    const pan = document.getElementById("pan").value;

    const res = await fetch(`${API}/kyc/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ aadhaar, pan })
    });

    const data = await res.json();
    alert(data.message);
}