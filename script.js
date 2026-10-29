
// Exercise 1 - Live Business Card

const body = document.body;

const name_input = document.getElementById("name-input");
const job_input = document.getElementById("job-input");
const email_input = document.getElementById("email-input");
const bio_input = document.getElementById("bio-input");

const card_name = document.getElementById("card-name");
const card_job = document.getElementById("card-job");
const card_email = document.getElementById("card-email");
const card_bio = document.getElementById("card-bio");

const card_avatar = document.getElementById("avatar");
const card = document.getElementById("card");
const color_select = document.getElementById("color-select");

const card_bioInfo = document.getElementById("bio-left");
const counter = document.querySelector(".counter");

const button_1 = document.getElementById("theme-btn");
const button_2 = document.getElementById("reset-btn");

// Default values
const defaultName = card_name.textContent.trim() || "Your name";
const defaultJob = card_job.textContent.trim() || "Your job";
const defaultEmail = card_email.textContent.trim() || "Your email";
const defaultBio = card_bio.textContent.trim() || "Your bio";

const defaultColor = color_select.value;

// Step 1 + Step 2: Live text and avatar

name_input.addEventListener("input", () => {
    card_name.textContent = name_input.value.trim() || defaultName;

    if (name_input.value.trim() !== "") {
        card_avatar.textContent =
            name_input.value.trim()[0].toUpperCase();
    } else {
        card_avatar.textContent = "?";
    }
});

job_input.addEventListener("input", () => {
    card_job.textContent = job_input.value.trim() || defaultJob;
});

email_input.addEventListener("input", () => {
    card_email.textContent = email_input.value.trim() || defaultEmail;
});

// Step 3: Bio and character counter

bio_input.addEventListener("input", () => {
    card_bio.textContent = bio_input.value.trim() || defaultBio;

    let count = 0;

    for (let i = 0; i < bio_input.value.length; i++) {
        count++;
    }

    card_bioInfo.textContent = 80 - count;

    if (count >= 70) {
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }
});

// Step 4: Accent color

color_select.addEventListener("change", () => {
    card.style.borderColor = color_select.value;
    card_avatar.style.backgroundColor = color_select.value;
});

// Step 5: Dark mode

button_1.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button_1.textContent = "Light mode";
    } else {
        button_1.textContent = "Dark mode";
    }
});

// Step 6: Reset button

button_2.addEventListener("click", () => {
    // Clear inputs
    name_input.value = "";
    job_input.value = "";
    email_input.value = "";
    bio_input.value = "";

    // Reset card text
    card_name.textContent = defaultName;
    card_job.textContent = defaultJob;
    card_email.textContent = defaultEmail;
    card_bio.textContent = defaultBio;

    // Reset avatar
    card_avatar.textContent = "?";

    // Reset counter
    card_bioInfo.textContent = 80;
    counter.classList.remove("warning");

    // Reset color
    color_select.value = defaultColor;
    card.style.borderColor = defaultColor;
    card_avatar.style.backgroundColor = defaultColor;

    // Reset dark mode
    body.classList.remove("dark");
    button_1.textContent = "Dark mode";
});
