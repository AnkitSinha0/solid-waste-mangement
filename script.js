document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
function validateLogin() {
	

	// Get input values
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	// Your authentication logic here
	// For simplicity, let's assume the correct credentials are 'user' and 'password'
	if (username === 'ghost' && password === 'taskforce141') {
		alert('Login successful!');
		// Redirect to the next webpage
		window.location.assign("http://127.0.0.1:5500/explore.html")
	} else {
		alert('Invalid credentials. Please try again.');
	}
}
