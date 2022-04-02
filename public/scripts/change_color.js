// Elements
const cat_body = document.querySelector(".cat_body");
const cat_eyes = document.querySelector(".cat_eyes");
const cat_pupils = document.querySelector(".cat_pupils");
const cat_muzzle = document.querySelector(".cat_muzzle");
const cat_mouth = document.querySelector(".cat_mouth");
const cat_tongue = document.querySelector(".cat_tongue");
const root = document.querySelector(":root");

// Set values

cat_body.value = "#1a1a1a";
cat_eyes.value = "#ffffff";
cat_pupils.value = "#1a1a1a";
cat_muzzle.value = "#ffc0cb";
cat_mouth.value = "#ffffff";
cat_tongue.value = "#fa4646";

// Functions
function colorChange(part) {
  if (part == "body") {
    root.style.setProperty("--cat-color", cat_body.value);
  } else if (part == "eyes") {
    root.style.setProperty("--cat-eyes", cat_eyes.value);
  } else if (part == "pupils") {
    root.style.setProperty("--cat-eye-pupil", cat_pupils.value);
  } else if (part == "muzzle") {
    root.style.setProperty("--cat-muzzle", cat_muzzle.value);
  } else if (part == "mouth") {
    root.style.setProperty("--cat-mouth", cat_mouth.value);
  } else if (part == "tongue") {
    root.style.setProperty("--cat-tongue", cat_tongue.value);
  }
}

// EventListeners
cat_body.addEventListener("input", () => {
  colorChange("body");
});

cat_eyes.addEventListener("input", () => {
  colorChange("eyes");
});

cat_pupils.addEventListener("input", () => {
  colorChange("pupils");
});

cat_muzzle.addEventListener("input", () => {
  colorChange("muzzle");
});

cat_mouth.addEventListener("input", () => {
  colorChange("mouth");
});

cat_tongue.addEventListener("input", () => {
  colorChange("tongue");
});
