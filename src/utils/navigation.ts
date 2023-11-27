import { NavigationItem } from "../@types/navigation";
import { navigationList } from "../data/navigation";

export const addCategory = (category: NavigationItem) => {
  return navigationList
    .filter((item) => item.children && item.children.length > 0)
    .map((item) => item.children?.push(category));
};
