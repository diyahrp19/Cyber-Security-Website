function toggleSearch() {
    // search bar
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    // check that search bar is shown or not if it is visible then it is call close()
    if (searchContainer.classList.contains('show')) {
        closeSearch();
        // if not visible then change the opacity and visibility from css
    } else {
        searchContainer.classList.add('show');
        searchInput.focus();
    }
}
// hide the search bar
function closeSearch() {
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');

    searchInput.value = ''; // Clear input
    searchContainer.classList.remove('show'); // Hide search bar
}
// enter key to close search bar
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            closeSearch();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleForm = document.getElementById("toggleForm");
    const toggleText = document.getElementById("toggleText");
    const modalTitle = document.getElementById("modalTitle");

    // regular expressions
    // example@domain.com
    // password have at least 6 character
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{6,}/;

    // toggle between login and signup
    toggleForm.addEventListener("click", function () {
        // currently hidden
        if (loginForm.classList.contains("d-none")) {
            loginForm.classList.remove("d-none"); //show
            signupForm.classList.add("d-none");// hide signup form
            modalTitle.textContent = "Login";
            toggleText.textContent = "Don't have an account?";
            toggleForm.textContent = "Sign up";
        } else {
            loginForm.classList.add("d-none");//hide login
            signupForm.classList.remove("d-none");//show signup
            modalTitle.textContent = "Sign Up";
            toggleText.textContent = "Already have an account?";
            toggleForm.textContent = "Log in";
        }
    });

    // Login validation
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;
        let valid = true;
        // email validation
        if (!emailRegex.test(email)) {
            document.getElementById("loginEmailError").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("loginEmailError").classList.add("d-none");
        }
        // password validation
        if (!passwordRegex.test(password)) {
            document.getElementById("loginPasswordError").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("loginPasswordError").classList.add("d-none");
        }
        // if valid then clear the form and clode the modal
        if (valid) {
            alert("Login successful!");
            loginForm.reset();
            bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
        }
    });

    // signup validation
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;
        let confirmPassword = document.getElementById("signupConfirmPassword").value;
        let valid = true;
        // email
        if (!emailRegex.test(email)) {
            document.getElementById("signupEmailError").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("signupEmailError").classList.add("d-none");
        }
        // password 
        if (!passwordRegex.test(password)) {
            document.getElementById("signupPasswordError").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("signupPasswordError").classList.add("d-none");
        }
        // conform password
        if (password !== confirmPassword) {
            document.getElementById("signupConfirmPasswordError").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("signupConfirmPasswordError").classList.add("d-none");
        }
        // if valid then show msg
        if (valid) {
            alert("Signup successful!");
            signupForm.reset();
            // close the modal
            bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
        }
    });
});
