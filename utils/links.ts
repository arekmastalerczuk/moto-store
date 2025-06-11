type NavLink = {
  href: string;
  label: string;
};

export const loggedOutLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/products",
    label: "Products",
  },
];

export const loggedInLinks: NavLink[] = [
  ...loggedOutLinks,
  {
    href: "/favorites",
    label: "Favorites",
  },
  {
    href: "/cart",
    label: "Cart",
  },
  {
    href: "/orders",
    label: "Orders",
  },
];
