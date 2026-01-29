import { Button } from "../ui/button";

export const NavItems = () => {
  return (
    <div className="flex justify-between gap-1 sm:gap-5">
      <Button asChild>
        <a href="/">Home</a>
      </Button>
      <Button asChild>
        <a href="/about">About</a>
      </Button>
    </div>
  );
};
