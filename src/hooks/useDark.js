import { ref } from "vue";

function getThemeFromStorage() {
  const theme = localStorage.getItem("duozhuavue-theme");
  return theme ? theme : "light";
}

export default function useDark() {
  const theme = getThemeFromStorage();
  const mode = ref(theme);
  const toggleMode = () => {
    mode.value = mode.value === "light" ? "dark" : "light";
    localStorage.setItem("duozhuavue-theme", mode.value);
  };
  return {
    mode,
    toggleMode,
  };
}
