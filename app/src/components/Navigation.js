import React from 'react';
import A from './A';

function Navigation(props) {
  return <nav className="main-navigation">
      <ul>
        {props.menuItems.map(menuItem => {
          const {
            href,
            id,
            text,
          } = menuItem;

          const {
            pathname
          } = window.location;

          const isSelected = pathname === href || (href.length > 1 && pathname.startsWith(href));

          return <li key={id} className={isSelected ? 'selected' : null}>
            <A href={href}>{text}</A>
          </li>
        })}
      </ul>
    </nav>;
}

export default Navigation;
