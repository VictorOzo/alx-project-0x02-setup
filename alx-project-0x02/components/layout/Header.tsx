import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
