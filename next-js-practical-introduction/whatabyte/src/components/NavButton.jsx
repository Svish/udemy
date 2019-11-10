import Link from 'next/link';
import classnames from 'classnames';

import { useRouter } from 'next/router';

import './NavButton.scss';

const NavButton = ({ path, icon, label }) => {
  const { pathname } = useRouter();

  return (
    <Link href={path}>
      <div className={classnames('NavButton', { active: path === pathname })}>
        <div className="Icon">{icon}</div>
        <span className="Label">{label}</span>
      </div>
    </Link>
  );
};

export default NavButton;
