function findData(selectInput, numberInput) {
    console.log(selectInput, numberInput);
    // Show loading animation
    showLoadingAnimation();

    // Get form data
    const formData = new FormData();
    formData.append('selectInput', selectInput.value);
    formData.append('numberInput', numberInput.value);
    // xhr.send(formData);
    console.log(formData, 'formData');

    // notyf.error({
    //         message: 'You must fill out the form before moving forward',
    //         position: {x:'center',y:'top'}
    //     });
    window.location.href = `/result.html?example=src/extension.ts`;
    setTimeout(() => {
        hideLoadingAnimation();
    }, 1000);
}