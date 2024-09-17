export default function Navbar() {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">StreamFlix</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
