const notesContainer = document.getElementById("notes-container");
const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const voiceBtn = document.getElementById("voice-btn");
const authBtn = document.getElementById("auth-btn");

function checkAuth() {
    const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated) {
        enableNotes();
        renderNotes(); 
    } else {
        disableNotes();
        notesContainer.innerHTML = ""; 
    }
}

function disableNotes() {
    noteInput.disabled = true;
    saveBtn.disabled = true;
    voiceBtn.disabled = true;
}

function enableNotes() {
    noteInput.disabled = false;
    saveBtn.disabled = false;
    voiceBtn.disabled = false;
}

authBtn.addEventListener("click", async () => {
    if (!window.PublicKeyCredential) {
        alert("Seu navegador não suporta WebAuthn.");
        return;
    }

    try {
        const credential = await navigator.credentials.create({
            publicKey: {
                challenge: new Uint8Array(32),
                rp: { name: "PWA Notas" },
                user: {
                    id: new Uint8Array(16),
                    name: "Usuário",
                    displayName: "Usuário"
                },
                pubKeyCredParams: [{ type: "public-key", alg: -7 }]
            }
        });

        alert("Autenticação bem-sucedida!");
        sessionStorage.setItem("authenticated", "true"); 
        enableNotes();
        renderNotes();
    } catch (err) {
        alert("Erro na autenticação!");
    }
});

saveBtn.addEventListener("click", () => {
    const text = noteInput.value;
    if (!text) return;

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));

    renderNotes();
    noteInput.value = "";
});

function renderNotes() {
    notesContainer.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        const noteCard = document.createElement("note-card");
        noteCard.setAttribute("text", note);
        notesContainer.appendChild(noteCard);
    });
}

checkAuth();
