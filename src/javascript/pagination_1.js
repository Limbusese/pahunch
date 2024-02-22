// Selecting DOM elements
const startBtn = document.querySelector("#startBtn");
console.log(startBtn)

const endBtn = document.querySelector("#endBtn");
console.log(endBtn);

const prevNext = document.querySelectorAll(".prevNext");
console.log("the prevNext files are: ",prevNext);

const numbers = document.querySelectorAll(".link");
console.log(numbers);

const element = document.querySelector(".pagination_links");
console.log(element)

// Setting initial value
let currentStep = 0;
console.log(currentStep)

// calling function with 

// Function to update the button states
const updateBtn = () => {
    if (currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if (currentStep === 0) {
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();

        currentStep = numIndex;

        // Remove active class from the previous element
        document.querySelector(".active").classList.remove("active");

        // Add active class to the clicked number
        number.classList.add("active");

        updateBtn();
    });
});

// Add event listener to "Previous" and "Next"
prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("Clicked element:", e.currentTarget);
        console.log("Clicked element ID:", e.target.id);
        currentStep +=  e.currentTarget.id === "next" ? 1 : -1;
        console.log(currentStep)
        numbers.forEach((number, numIndex) => {
            console.log(numIndex)
            number.classList.toggle("active", numIndex === currentStep);
        });
        updateBtn();
    });
});

// Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[0].classList.add("active");
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    currentStep = 0;
    updateBtn();
});

// Add event listener to the "End" button
endBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[4].classList.add("active");
    startBtn.disabled = false;
    prevNext[0].disabled = false;
    currentStep = 4;
    updateBtn();
});
