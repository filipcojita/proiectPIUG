function validateForm(event) {
        event.preventDefault(); // Prevent default form submission behavior
        var email = document.getElementById('email').value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        document.getElementById('success-message').style.display = 'block'; // Display success message
        setTimeout(function(){ 
            document.getElementById('success-message').style.display = 'none'; // Hide success message after 3 seconds
        }, 3000);
        return true;
    }
/*Upon successful email validation, the function will display a success message by setting the display property of the success-message element to block.
The success message will be visible for 3 seconds (3000 milliseconds) using setTimeout.
After 3 seconds, the success message will automatically hide by setting the display property back to none. */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = "";

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        error += "Name must not contain numbers.\n";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        error += "Invalid email address.\n";
    }

    // Message length validation
    if (message.length < 10) {
        error += "Message must be at least 10 characters long.\n";
    }

    // If there are errors, prevent form submission and show error message
    if (error !== "") {
        alert(error);
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});
