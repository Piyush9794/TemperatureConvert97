var emoji = document.querySelector(".icon");
const unit1 = document.getElementById("temp-unit1");
const unit2 = document.getElementById("temp-unit2");
const input = document.getElementById("temperature");
const display = document.querySelector(".display");
const errorMsg = document.getElementById("error");

document.getElementById("convert-btn").addEventListener("click", convertTemp);

const temperatureUnits = ["Celsius", "Kelvin", "Fahrenheit"];

// Dynamically generate options for dropdowns
function populateDropdowns() {
    temperatureUnits.forEach((unit) => {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");

        option1.value = option2.value = unit.toLowerCase();
        option1.textContent = option2.textContent = unit;

        unit1.appendChild(option1);
        unit2.appendChild(option2);
    });
}

populateDropdowns();


const conversions = {
    celsius: {
        fahrenheit: (value) => value * (9 / 5) + 32,
        kelvin: value => value + 273.15
    },
    fahrenheit: {
        celsius: value => (value - 32) * (5 / 9),
        kelvin: value => (value - 32) * (5 / 9) + 273.15
    },
    kelvin: {
        celsius: value => value - 273.15,
        fahrenheit: value => (value - 273.15) * (9 / 5) + 32
    }
};

function convertTemp() {
    const fromUnit = unit1.value.toLowerCase();
    const toUnit = unit2.value.toLowerCase();
    const conversionFunction = conversions[fromUnit][toUnit];
    
    if (!conversionFunction) {
        errorMsg.textContent = "Invalid Conversion!!!";
        errorMsg.style.display = "block";
        display.textContent = "---";
        return;
    }

    const result = conversionFunction(Number(input.value));
    let unitSymbols = {
        celsius: "&deg;C",
        fahrenheit: "&deg;F",
        kelvin: "K"
    };
    errorMsg.style.display = "none";
    display.textContent = result.toFixed(2) + " " + unitSymbols[toUnit];
}




