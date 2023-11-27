import React from "react";
import { NavigationItem } from "../../@types/navigation";
import { IoIosArrowForward } from "react-icons/io";
type NavigationListProps = {
  navigationItem: NavigationItem;
};
const NavigationList: React.FC<NavigationListProps> = ({ navigationItem }) => {
  const [isHover, setIsHover] = React.useState(false);
  const hasChildren =
    navigationItem.children && navigationItem.children.length > 0;
  return (
    <li
      className="mr-[10px]  leading-[50px] hover:bg-gray-500 min-w-[75px]  transition-all duration-150 relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a
        className="tracking-wide uppercase flex flex-1 transition-all duration-200 hover:tracking-wider items-center justify-center"
        href="/"
      >
        {navigationItem.name}
        {hasChildren && (
          <IoIosArrowForward
            className={`${
              isHover ? "rotate-90" : ""
            } transition-all duration-200`}
          />
        )}
      </a>
      {hasChildren && (
        <ul
          className={`absolute top-[100%] left-0 bg-black min-w-[120px]  ${
            isHover ? "block" : "hidden"
          } `}
        >
          {navigationItem.children?.map(({ id, name }) => (
            <li
              className="block leading-[50px] hover:bg-gray-500  text-center transition-all duration-150"
              key={id}
            >
              <a
                className="tracking-wide  uppercase block transition-all duration-200 hover:tracking-wider"
                href="/"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default NavigationList;
