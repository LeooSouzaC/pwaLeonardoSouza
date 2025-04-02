class NoteCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    padding: 10px;
                    background: white;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    margin: 10px 0;
                }
            </style>
            <div class="card">
                <p></p>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector("p").textContent = this.getAttribute("text");
    }
}

customElements.define("note-card", NoteCard);
