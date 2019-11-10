import Link from 'next/link';

import './Header.scss';

const Header = ({ title }) => (
  <Link href="/">
    <div className="Header">{title}</div>
  </Link>
);

export default Header;
