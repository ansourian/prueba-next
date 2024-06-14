import NavLink from "./NavLink";

export default function Header({}) {
  return (
    <header>
      <nav>
        <ul className="ul-navbar">
          <NavLink route={"/"} name={"HOME"} />
          <NavLink route={"/login"} name={"LOGIN"} />
          <NavLink route={"/acta"} name={"ACTA"} />
        </ul>
      </nav>
    </header>
  );
}
