export default [
  {
    label: 'Log In',
    icon: 'lock_open',
    route: '/login',
    private: false,
  },
  // {
  //   label: 'User Zone',
  //   icon: 'person',
  //   private: true,
  //   children: [], // Jak będą ogarnięte rozwijalne menu przerzucić 3 poniższe pozycje do children.
  // },
  {
    label: 'Log out',
    icon: 'power_settings_new',
    route: '/logout',
    private: true,
  },
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
    label: 'Video',
    icon: 'theaters',
    route: '/video',
  },
  {
    label: 'Records',
    icon: 'disc_full',
    route: '/records',
    private: true,
  },
]
