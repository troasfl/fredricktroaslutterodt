document.getElementById('regForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const data = new FormData(form);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString()
  })
    .then(() => {
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    })
    .catch(() => { form.submit(); });
});
