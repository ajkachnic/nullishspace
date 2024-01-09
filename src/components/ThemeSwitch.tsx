import { createSignal, createEffect, onMount } from "solid-js"

function init() {
   if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "light" | "dark";
  } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

export default function ThemeSwitch() {
  // const [theme, setTheme] = createSignal(localStorage.getItem("theme") ?? "light");
  const [theme, setTheme] = createSignal(init());
  const [ audio, setAudio ] = createSignal<HTMLAudioElement>();

  onMount(() => {
    setAudio(new Audio("/sfx/switch.mp3"));
  });

  function onClick() {
    console.log(theme())
    audio()?.play();
    setTheme(p => p === "light" ? "dark" : "light");
    console.log(theme())
  }

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <button
      onClick={onClick}
      class="text-sm font-sans rounded-md border-neutral-200 border-solid bg-neutral-100 text-neutral-900 dark:(bg-neutral-900 text-neutral-200 border-neutral-800)"
    >
      {theme() === "light" ? "🌙" : "🌞"}
    </button>
  );
}
