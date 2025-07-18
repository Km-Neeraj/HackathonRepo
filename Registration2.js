function handleRegistration(event) {
  event.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const program = document.getElementById("program").value;

  // Simple validation
  if (!name || !email || !phone || !whatsapp || !program) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate successful registration
  document.getElementById("responseMsg").textContent = "🎉 Registration successful! We’ll contact you soon.";
  document.getElementById("registrationForm").reset();
}
