document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation and registration logic here

    // Redirect to login page
    window.location.href = "./login.html";
});

function login(){
    window.location.href = "../index.html";
}
