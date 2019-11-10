import './NavBar.scss';

import NavButton from './NavButton';

import nav from '../config/nav';

const NavBar = () => (
  <div className="NavBar">
    {nav.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;
