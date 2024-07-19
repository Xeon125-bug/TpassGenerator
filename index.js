function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@$#%^&*()_+=-?/;'[]\|-,.";

    let allowedChars = "";
    let password = "";

    if (includeLowerCase) allowedChars += lowercaseChars;
    if (includeUpperCase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length <= 0) {
        return "(password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(At least 1 set of characters needs to be selected)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeLowerCase = document.getElementById('include-lowercase').checked;
    const includeUpperCase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    document.getElementById('password-output').innerText = `Generated password: ${password}`;
}
function copypassword(){
    const passwordOutput = document.getElementById(`password-output`).innerText;
    const passoword = passwordOutput.replace('Generated password: ','' );
    navigator.clipboard.writeText(passoword).then(() => {
        alert(`Password copied to clipboard`);
        document.getElementById(`password-output`).innerText = '';
    }).catch(err => {
        console.error(`Failed to copy password`,err);
    });
}