import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    label: 'Explore',
    path: '/explore',
    icon: <FontAwesomeIcon icon={faCompass} />,
  },
  {
    label: 'Near Me',
    path: '/near-me',
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
  },
  {
    label: 'My Cart',
    path: '/my-cart',
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];
