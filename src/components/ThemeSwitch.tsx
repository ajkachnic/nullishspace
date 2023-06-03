import { useState, useEffect, useRef } from "preact/hooks";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const audio = useRef<HTMLAudioElement>();

  useEffect(() => {
    audio.current = new Audio("/sfx/switch.mp3");
  }, []);

  function onClick() {
    audio.current?.play();
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={onClick}
      class="text-sm font-sans rounded-md border-blue-200 border-solid bg-blue-100 text-neutral-900 dark:(bg-blue-700 text-neutral-200 border-blue-500)"
    >
      {theme === "light" ? "🌙" : "🌞"}
      {/* Toggle Theme */}
    </button>
  );
}
