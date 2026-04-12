import { NavLink } from "@/components/NavLink";

export const Header = () => {
  return (
    <header className="fixed z-50">
      <div className="wrapper">
        <nav>
          <div className="px-14 py-8 flex items-center gap-12">
            <NavLink
              label="Twitter"
              href="https://twitter.com/bionicashish"
              newTab
            />
            <NavLink label="Contact" href="mailto:hello@bionicashish.com" />
          </div>
        </nav>
      </div>
    </header>
  );
};
