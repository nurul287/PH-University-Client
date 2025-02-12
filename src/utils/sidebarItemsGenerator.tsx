import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "src/types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item?.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    } else {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  }, []);

  return sidebarItems;
};
