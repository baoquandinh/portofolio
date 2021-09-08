import "../test.css";
import "../styles/navbar.css";
import { Nav } from "react-bootstrap";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

export const handleTransition = (section) => {
  document
    .getElementById(`${section}-section`)
    .scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const navItems = ["home", "about", "projects"];

  return (
    <div className="nav-wrapper">
      <Nav className="justify-content-center navbar navbar-dark bg-dark">
        {navItems.map((item, index) => (
          <Nav.Item
            key={`${item}${index}`}
            onClick={() => handleTransition(item)}
          >
            <Nav.Link href={`#${item}-section`}>{item.toUpperCase()}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};
