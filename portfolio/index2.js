(function () {
        emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
    })();

    function sendEmail(event) {
        event.preventDefault();

        var templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    }

