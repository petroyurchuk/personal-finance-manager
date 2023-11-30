import { NavigationItem } from "../@types/navigation";

export const navigationList: NavigationItem[] = [
  {
    id: 1,
    name: "Home",
    linkTo: "/",
  },
  {
    id: 2,
    name: "Categories",
    linkTo: "/",
    children: [],
  },
  {
    id: 3,
    name: "Transactions",
    linkTo: "/transaction",
  },
  {
    id: 4,
    name: "Generator",
    linkTo: "/generator",
  },
];
