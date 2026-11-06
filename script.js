const adoptionForm = document.querySelector("#adoption-form");
const breedInput = document.querySelector("#dog-breed");
const nameInput = document.querySelector("#dog-name");
const nameError = document.querySelector("#name-error");
const petStatus = document.querySelector("#pet-status");
const petName = document.querySelector("#pet-name");
const petBreed = document.querySelector("#pet-breed");
const petDay = document.querySelector("#pet-day");
const petStage = document.querySelector("#pet-stage");
const petGrowth = document.querySelector("#pet-growth");
const petHappiness = document.querySelector("#pet-happiness");
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");
const nextDayButton = document.querySelector("#next-day-button");
const resetButton = document.querySelector("#reset-button");

const storageKey = "virtualDogParkPetV1";
const growthStages = ["Puppy", "Young Dog", "Adult Dog"];
let dog = JSON.parse(localStorage.getItem(storageKey));

function stageFor(day) {
  if (day === 1) {
    return 1;
  }
  return day < 4 ? 2 : 3;
}

function showDog() {
  petName.textContent = dog.name;
  petBreed.textContent = dog.breed;
  petDay.textContent = dog.day;
  const stage = stageFor(dog.day);
  petStage.textContent = growthStages[stage - 1];
  petGrowth.value = stage;
  petHappiness.textContent = dog.happiness;
  adoptionForm.hidden = true;
  petStatus.hidden = false;
}

function saveAndShowDog() {
  localStorage.setItem(storageKey, JSON.stringify(dog));
  showDog();
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
  saveAndShowDog();
  petName.focus();
}

function careForDog() {
  dog.happiness = Math.min(dog.happiness + 10, 100);
  saveAndShowDog();
}

function advanceDay() {
  dog.day += 1;
  dog.happiness = Math.max(dog.happiness - 5, 0);
  saveAndShowDog();
}

function startOver() {
  if (!window.confirm("Start over? This will delete your saved dog.")) {
    return;
  }

  localStorage.removeItem(storageKey);
  dog = null;
  petStatus.hidden = true;
  adoptionForm.reset();
  adoptionForm.hidden = false;
  nameInput.focus();
}

nameInput.addEventListener("input", () => {
  nameError.textContent = "";
  nameInput.removeAttribute("aria-invalid");
});
adoptionForm.addEventListener("submit", adoptDog);
feedButton.addEventListener("click", careForDog);
playButton.addEventListener("click", careForDog);
nextDayButton.addEventListener("click", advanceDay);
resetButton.addEventListener("click", startOver);

if (dog) {
  showDog();
}
