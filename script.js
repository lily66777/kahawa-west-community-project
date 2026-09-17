let surveyButton = document.getElementById("surveyButton");

if (surveyButton) {
    surveyButton.addEventListener("click", function() {
        alert("Thanks for taking an interest in our community project!");
    });
}


let moreButton = document.getElementById("moreButton");
let moreInfo = document.getElementById("moreInfo");
let lessButton = document.getElementById("lessButton");

if (moreButton) {

    moreButton.addEventListener("click", function() {

        moreInfo.style.display = "block";
        moreButton.style.display = "none";
        lessButton.style.display = "inline-block";

    });

}

if (lessButton) {

    lessButton.addEventListener("click", function() {

        moreInfo.style.display = "none";
        moreButton.style.display = "inline-block";
        lessButton.style.display = "none";

    });

}

let projectYear = 2026;

if (projectYear === 2026) {
    console.log("The community project is underway!");
}



let concernCheckboxes =
    document.querySelectorAll('input[name="concerns"]');

concernCheckboxes.forEach(function(checkbox) {

    checkbox.addEventListener("change", function() {

        let selectedConcerns =
            document.querySelectorAll('input[name="concerns"]:checked');

        if (selectedConcerns.length >= 3) {

            concernCheckboxes.forEach(function(otherCheckbox) {

                if (!otherCheckbox.checked) {
                    otherCheckbox.disabled = true;
                }

            });

        } else {

            concernCheckboxes.forEach(function(otherCheckbox) {
                otherCheckbox.disabled = false;
            });

        }

    });

});
let surveyForm = document.getElementById("surveyForm");
let submitMessage = document.getElementById("submitMessage");

if (surveyForm) {

    surveyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let selectedConcerns =
            document.querySelectorAll('input[name="concerns"]:checked');

        if (selectedConcerns.length === 0) {
            submitMessage.textContent =
                "Please select at least one concern.";
            return;
        }

        if (selectedConcerns.length > 3) {
            submitMessage.textContent =
                "Please select no more than 3 concerns.";
            return;
        }

        submitMessage.textContent =
            "Thank you for your input and contribution towards the Kahawa West Community Project!";

    });

}
let activityCheckboxes =
    document.querySelectorAll('input[name="activities"]');

let noneActivity =
    document.querySelector('input[name="activities"][value="None"]');

if (noneActivity) {

    noneActivity.addEventListener("change", function() {

        activityCheckboxes.forEach(function(checkbox) {

            if (checkbox !== noneActivity) {
                checkbox.disabled = noneActivity.checked;
            }

        });

    });

}