  const scriptURL = 'https://script.google.com/macros/s/AKfycbzNhYlEBssIQhojlIW7BdaPGT3u2L2v0b7IHN4kXs8nlDKXJ38yR6jULB4-8odJ0G5y/exec'
  const form = document.forms['Buku-Tamu-BPSDMP']
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
            // Display the success message
            successMessage.style.display = 'block';
  
            // Optionally, reset form fields here
            form.reset();
            video.style.display = 'block';
            snapButton.style.display = 'block';
            canvas.style.display = 'none';
  })
