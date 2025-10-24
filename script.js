`use strict`;


const inputRange = document.querySelector(`#inp-range`);


inputRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF 50%, #18171F 50%, #18171F 100%)`
inputRange.style.borderRadius = `5px`

inputRange.addEventListener(`input`, () => {
    console.log(inputRange.getBoundingClientRect().width)
    const inputRangeLinear = (inputRange.value / 15) * 100;
    inputRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${inputRangeLinear}%, #18171F ${inputRangeLinear}%, #18171F 100%)`;
})


