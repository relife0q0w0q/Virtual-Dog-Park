const adoptionForm = document.querySelector("#adoption-form");
const breedInput = document.querySelector("#dog-breed");
const nameInput = document.querySelector("#dog-name");
const nameError = document.querySelector("#name-error");
const petStatus = document.querySelector("#pet-status");
const petName = document.querySelector("#pet-name");
const petBreed = document.querySelector("#pet-breed");
const petDay = document.querySelector("#pet-day");
const petStage = document.querySelector("#pet-stage");
const petHappiness = document.querySelector("#pet-happiness");
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");

let dog = null;

function showDog() {
  petName.textContent = dog.name;
  petBreed.textContent = dog.breed;
  petDay.textContent = dog.day;
  petStage.textContent = "Puppy";
  petHappiness.textContent = dog.happiness;
  adoptionForm.hidden = true;
  petStatus.hidden = false;
}

function adoptDog(event) {
  event.preventDefault();
  if (dog) {
    return;
  }

  const name = nameInput.value.trim();
  if (name.length === 0 || name.length > 20) {
    nameError.textContent = "Enter a name from 1 to 20 characters.";
    nameInput.setAttribute("aria-invalid", "true");
    nameInput.focus();
    return;
  }

  dog = { name, breed: breedInput.value, day: 1, happiness: 50 };
  showDog();
  petName.focus();
}

function careForDog() {
  dog.happiness = Math.min(dog.happiness + 10, 100);
  petHappiness.textContent = dog.happiness;
}

nameInput.addEventListener("input", () => {
  nameError.textContent = "";
  nameInput.removeAttribute("aria-invalid");
});
adoptionForm.addEventListener("submit", adoptDog);
feedButton.addEventListener("click", careForDog);
playButton.addEventListener("click", careForDog);
