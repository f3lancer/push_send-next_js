import { Button } from "inputs-and-buttons";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import "./Sidebar.css";

const sidebarMenu = [
  {
    title: "Companies",
    icon: <ChevronRightIcon />,
    href: "/campaigns",
    children: [
      { label: "New Company", href: "/campaigns/new" },
      // { label: "Edit Company", href: "/campaigns/123/edit" },
      // { label: "Info Company", href: "/campaigns/123" },
    ],
  },
  {
    title: "Devices",
    icon: <ChevronRightIcon />,
    href: "/devices",
    // children: [{ label: "Info Device", href: "/devices/abc" }],
  },
];

export const Sidebar = () => (
  <aside className="sidebar">
    <div className="logo mb-3 h-10 w-full">
      <a href="/" className="">
        <img
          src="/img/logo.png"
          alt="logo"
          className="h-full w-full object-contain"
        />
      </a>
    </div>
    <nav className="nav-wrap">
      <ul className="menu-list flex flex-col gap-2">
        {sidebarMenu.map((section) => (
          <li className="menu-item menu-item-has-children" key={section.title}>
            <Link href={section.href ?? "#"}>
              <Button
                disabled={false}
                // rightIcon={section.icon}
                variant="rightIcon"
              >
                {section.title}
              </Button>
            </Link>
            {section.children && (
              <ul className="sub-menu flex flex-col gap-2 mt-3">
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
