document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  const parts = {
    background: {
      inputSelector: "#background",
      variable: "--main-background",
      default: "#dce6f0",
    },
    body: {
      inputSelector: ".cat_body",
      variable: "--cat-color",
      default: "#1a1a1a",
    },
    eyes: {
      inputSelector: ".cat_eyes",
      variable: "--cat-eyes",
      default: "#ffffff",
    },
    pupils: {
      inputSelector: ".cat_pupils",
      variable: "--cat-eye-pupil",
      default: "#1a1a1a",
    },
    muzzle: {
      inputSelector: ".cat_muzzle",
      variable: "--cat-muzzle",
      default: "#ffc0cb",
    },
    mouth: {
      inputSelector: ".cat_mouth",
      variable: "--cat-mouth",
      default: "#ffffff",
    },
    tongue: {
      inputSelector: ".cat_tongue",
      variable: "--cat-tongue",
      default: "#fa4646",
    },
  };

  Object.entries(parts).forEach(
    ([key, { inputSelector, variable, default: defaultValue }]) => {
      const input = document.querySelector(inputSelector);

      if (!input) {
        console.warn(`Input element for ${key} not found: ${inputSelector}`);
        return;
      }

      // Set default value
      input.value = defaultValue;
      root.style.setProperty(variable, defaultValue);

      // Listen to input changes
      input.addEventListener("input", () => {
        root.style.setProperty(variable, input.value);
      });
    }
  );
});
