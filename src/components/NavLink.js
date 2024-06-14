export default function NavLink({ route, name }) {
    return (
      <li className="li-navbar">
        <a className="a-nav" href={route}>{name}</a>
      </li>
    );
  }