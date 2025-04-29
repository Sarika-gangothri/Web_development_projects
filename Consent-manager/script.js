function togglePermission(button) {
  if (button.innerText === "Allowed") {
    button.innerText = "Revoked";
    button.style.backgroundColor = "#f7b7b7";
  } else {
    button.innerText = "Allowed";
    button.style.backgroundColor = "#a2e3a2";
  }
}
