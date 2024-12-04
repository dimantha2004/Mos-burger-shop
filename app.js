const correctUsername = "nishshanka";
const correctPassword = "123";

function login(event) {
    event.preventDefault(); 
    const username = document.getElementById("USERNAME").value;
    const password = document.getElementById("PASSWORD").value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        loadNextPage(); 
    } else {
        alert("Invalid user name or password...! check again");
    }
}
function loadNextPage() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div class="welcome-container">
            <h1>Welcome to MOS BURGER</h1>
            
        </div>
    `;
}


