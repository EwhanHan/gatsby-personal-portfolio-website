import { createContext } from 'react';

const UserContext = createContext({
  isSidebarActive: false,
  showSidebar: () => {},
  hideSidebar: () => {},
});

export { UserContext };
