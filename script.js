document.getElementById("signup-form").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission reload

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirm-password").value;

      if (password === confirmPassword) {
        // Save data in session storage
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);

        alert("Sign up successful!");
      } else {
        alert("Passwords do not match");
      }
    });