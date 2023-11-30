export interface NavigationItem {
  id: number;
  name: string;
  linkTo: string;
  children?: NavigationItem[];
}
