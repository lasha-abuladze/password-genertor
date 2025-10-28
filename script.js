`use strict`;


const inputRange = document.querySelector(`#inp-range`);
const inputCheckboxArr = document.querySelectorAll(`.inp-checkbox`);
const submitBtn = document.querySelector(`.submit-btn`);


inputRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF 50%, #18171F 50%, #18171F 100%)`
inputRange.style.borderRadius = `5px`

inputRange.addEventListener(`input`, () => {
    // console.log(inputRange.getBoundingClientRect().width)
    const inputRangeLinear = (inputRange.value / 15) * 100;
    inputRange.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${inputRangeLinear}%, #18171F ${inputRangeLinear}%, #18171F 100%)`;
})


submitBtn.addEventListener(`click`, function(e) {
    e.preventDefault();
    inputCheckboxArr.forEach(el => {
        if(el.checked) {
            console.log(el.dataset.characterType)
        }
    } )
})

