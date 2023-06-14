import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/outline";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === "dark";

  const toggleTheme = () => (isDark ? setTheme("light") : setTheme("dark"));

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "light mode" : "dark mode"}
      className='p-2 flex items-center justify-center rounded-full hover:bg-white/10'
    >
      {isDark ? (
        <SunIcon className='h-5 w-5' />
      ) : (
        <MoonIcon className='h-5 w-5' />
      )}
    </button>
  );
}

export default ThemeToggle;
