import Auth from '../pages/Auth';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import HousePage from '../pages/HousePage';
import NewHousePage from '../pages/NewHousePage';
import {
  ADD_HOUSE_ROUTE,
  AUTH_ROUTE,
  FAVORITES_ROUTE,
  HOME_ROUTE,
  HOUSE_ROUTE,
} from '../utils/constants';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: HOUSE_ROUTE,
    Component: HousePage,
  },
  {
    path: ADD_HOUSE_ROUTE,
    Component: NewHousePage,
  },
  {
    path: FAVORITES_ROUTE,
    Component: Favorites,
  },
  {
    path: AUTH_ROUTE,
    Component: Auth,
  },
];
