function toggleDropdown() {
  const dropdown = document.getElementById("dropdownContent");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

const inputs = document.querySelectorAll('.code-inputs input');
const button = document.querySelector('button');

function checkInputs() {
  const allFilled = Array.from(inputs).every(input => input.value.trim().length === 1);
  button.disabled = !allFilled;
}

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.length === 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
      }
    }
    checkInputs();
  });
});

checkInputs(); // Verifica al cargar la página
