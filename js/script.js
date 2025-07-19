showHalo();

function showHalo() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Clear the input field after submission
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    if (name === '' || birthdate === '' || !gender || message === '') {
            alert('Your data is incomplete.');
            return;
    } else {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `
                <h3>Data Anda:</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
                <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                <p><strong>Pesan:</strong> ${message}</p>
    `;
    outputDiv.style.display = "block";
    }
}

