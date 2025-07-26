import { Button } from "inputs-and-buttons";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const sidebarMenu = [
  {
    title: "Companies",
    icon: <ChevronRightIcon />,
    href: "/campaigns",
    children: [{ label: "New Company", href: "/campaigns/new" }],
  },
  {
    title: "Devices",
    icon: <ChevronRightIcon />,
    href: "/devices",
  },
];

export const Sidebar = () => (
  <aside
    className="
      sidebar justify-between md:justify-start 
      bg-[#ededed] min-w-[220px] px-[10px] py-[30px]
      box-border border-r border-[#ddd]
      flex flex-col sm:flex-row md:flex-col
      "
  >
    <div className="logo mb-3 h-10 flex items-center justify-center min-w-[40px] w-[40px] h-auto">
      <a href="/" className="">
        <img
          src="/img/logo.png"
          alt="logo"
          className="h-full w-full object-contain"
        />
      </a>
    </div>
    <nav className="nav-wrap">
      <ul
        className="menu-list gap-2
       flex flex-col sm:flex-row md:flex-col"
      >
        {sidebarMenu.map((section) => (
          <li
            className="menu-item menu-item-has-children   
            gap-2
            flex flex-col sm:flex-row md:flex-col
            "
            key={section.title}
          >
            <Link href={section.href ?? "#"}>
              <Button disabled={false} variant="rightIcon">
                {section.title}
              </Button>
            </Link>
            {section.children && (
              <ul className="sub-menu flex flex-col gap-2  ">
                {section.children.map((item) => (
                  <li key={item.label} className="menu-list">
                    <Link href={item.href}>
                      <Button disabled={false} variant="secondary">
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
