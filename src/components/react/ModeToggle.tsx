import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    () => {
      if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as "light" | "dark" | "system") || "system";
      }
      return "system";
    }
  );

  const setTheme = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant={"outline"}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
