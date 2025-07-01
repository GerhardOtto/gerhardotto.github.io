import { Button } from "../ui/button";

export const NavItems = () => {
  return (
    <div className="flex justify-between gap-5">
      <Button asChild>
        <a href="/">Home</a>
      </Button>
      <Button asChild>
        <a href="/projects/">Projects</a>
      </Button>
      <Button asChild>
        <a href="/blogs/">Blogs</a>
      </Button>
    </div>
  );
};
