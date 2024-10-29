const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {};
    let isEmpty = false;
    for (const element of form.elements) {
        if (element.tagName === 'INPUT' && element.value.trim() === '') {
            isEmpty = true;
        } else {
            formData[element.name] = element.value.trim();
        }
    }
    if (isEmpty) {
        alert('All form fields must be filled in');
        return;
    }
    console.log(formData);
    form.reset();
});