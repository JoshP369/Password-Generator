// Function to prompt user for password options
function generatePassword() {

  // Prompt user for password length
  const length = prompt('Enter the desired length of the password (between 8 and 128 characters):');
  
  // Validate password length
  if (length < 8 || length > 128) {
    alert('Please enter a valid length between 8 and 128 characters.');
    return;
  }

  // Confirm user's choice for character types
  const lowercase = confirm('Include lowercase characters?');
  const uppercase = confirm('Include uppercase characters?');
  const numeric = confirm('Include numeric characters?');
  const special = confirm('Include special characters?');

  // Validate at least one character type is selected
if (!(lowercase || uppercase || numeric || special)) {
  alert('Please select at least one character type.');
  return; // Immediately ends the function's execution, skipping any code that follows if conditions are not met.
}

  // Generate random password based on user input
  const password = getRandomValues(length, lowercase, uppercase, numeric, special);
  
  // Display generated password
  document.getElementById('password').innerText = password;
}

// Function to generate random password using users prompted input
function getRandomValues(length, lowercase, uppercase, numeric, special) {
  let characters = '';

  // Include lowercase characters if selected
  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  // Include uppercase characters if selected
  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  // Include numeric characters if selected
  if (numeric) {
    characters += '0123456789';
  }

  // Include special characters if selected
  if (special) {
    characters += "!@#$%^&*()_+~`|}{[]:;?><,./-="
  }

  let password = '';
  
  // Generate password by randomly selecting characters from the combined set
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}
