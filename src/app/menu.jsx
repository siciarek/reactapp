const menu = [
  {
    label: 'User Zone',
    icon: 'person',
    private: true,
    children: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
        private: true,
      },
      {
        label: 'Profile',
        icon: 'account_circle',
        route: '/profile',
        private: true,
      },
      {
        label: 'Log out',
        icon: 'power_settings_new',
        route: '/logout',
        private: true,
      },
    ]
  },
  null,
  {
    label: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    label: 'Authors',
    icon: 'face',
    route: '/authors',
  },
  {
    label: 'Artists',
    icon: 'mic',
    route: '/artists',
  },
  {
    label: 'Genres',
    icon: 'stars',
    route: '/genre/list',
  },
  null,
  {
    label: 'Lyrics',
    icon: 'library_books',
    route: '/lyrics',
  },
  {
    label: 'Audio',
    icon: 'volume_up',
    route: '/audio',
  },
  {
    label: 'Videos',
    icon: 'theaters',
    route: '/videos',
  },
  null,
  {
    label: 'Log In',
    icon: 'lock_open',
    route: '/login',
    private: false,
  },
]

export default menu