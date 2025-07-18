function copyUPI() {
  const upiText = document.getElementById("upi-id").textContent;
  navigator.clipboard.writeText(upiText).then(() => {
    alert("✅ UPI ID copied to clipboard!");
  }).catch(() => {
    alert("❌ Failed to copy. Please try manually.");
  });
}
