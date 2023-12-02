import { NavigationItem } from "../@types/navigation";

export const navigationList: NavigationItem[] = [
  {
    id: 1,
    name: "Categories",
    linkTo: "/",
    children: [],
  },
  {
    id: 2,
    name: "Transactions",
    linkTo: "/transaction",
  },
  {
    id: 3,
    name: "Generator",
    linkTo: "/generator",
  },
];
