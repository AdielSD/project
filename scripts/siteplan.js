
const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

document.getElementById('lastModified').textContent =
  "Last modification: " + document.lastModified;