const editButton = document.getElementById('info_edit');
const saveButton = document.getElementById('save_button');
const cancelButton = document.getElementById("cancel_button");
const inputs = document.querySelectorAll('.info-box input');
//The querySelectorAll method is used to select multiple elements from the DOM (Document Object Model)
//that match a specified CSS selector.
//It returns a static (non-live) NodeList of all matching elements.

editButton.addEventListener('click', function() {
    inputs.forEach(input => input.disabled = false); // Enable all input fields
    saveButton.style.display = 'block'; // Show the save button
    cancelButton.style.display = 'block'; // Show the cancel button
});

saveButton.addEventListener('click', function() {
    const updatedData = {
        lastName: document.getElementById('last_name').value,
        firstName: document.getElementById('first_name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    fetch('/update_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data); // Debugging
    })
    .catch((error) => {
        console.error('Error:', error);
    });// Debugging

    // Disable input fields after saving
    inputs.forEach(input => input.disabled = true);
    saveButton.style.display = 'none'; // Hide the save button again
    cancelButton.style.display = 'none';
});

cancelButton.addEventListener("click", function(){
    inputs.forEach(input => input.disabled = true);
    saveButton.style.display = 'none'; // Hide the save button again
    cancelButton.style.display = 'none'; // Hide the cancel button
})

const passwordEye = document.getElementById("pass_img");
const passwordInput = document.getElementById("password");

const eyeOpenSrc = passwordEye.getAttribute('data-eye-open');
const eyeCloseSrc = passwordEye.getAttribute('data-eye-close');

passwordEye.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordEye.src = eyeOpenSrc;
    } else {
        passwordInput.type = "password";
        passwordEye.src = eyeCloseSrc;
    }
};