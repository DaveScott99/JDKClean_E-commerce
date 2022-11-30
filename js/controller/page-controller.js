export function init() {

    const inputs = document.querySelectorAll('.form-input');

    inputs.forEach((input) => input.addEventListener('focus', handleFocus));
    inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
}

// Funções para animação dos inputs
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value == "") {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}