document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation and registration logic here

    // Redirect to login page
    window.location.href = "./login.html";
});



;

function validated(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var dummyEmail = "rpl5@gmail.com";
    var dummyPassword = "12345";

    if (email === dummyEmail && password === dummyPassword) {
      alert("Login berhasil!");
      // Mengalihkan ke halaman index.html setelah login berhasil
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  }
