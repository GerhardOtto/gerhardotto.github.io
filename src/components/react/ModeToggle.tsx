import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    "light"
  );

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return (
    <Button onClick={() => setThemeState(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
