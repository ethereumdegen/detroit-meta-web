import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      "START MENU",
      {
        icon: "Home",
        title: "Dashboard",
        subMenu: [
          {
            icon: "",
            pathname: "/",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/dashboard-overview-2",
            title: "Overview 2",
          },
        ],
      },
      {
        icon: "Calendar",
        pathname: "/calendar",
        title: "Calendar",
      },
      {
        icon: "MessageSquare",
        pathname: "/chat",
        title: "Chat",
      },
      {
        icon: "Inbox",
        title: "Email",
        subMenu: [
          {
            icon: "",
            pathname: "/inbox",
            title: "Inbox",
          },
          {
            icon: "",
            pathname: "/email-detail",
            title: "Email Detail",
          },
          {
            icon: "",
            pathname: "/compose",
            title: "Compose",
          },
        ],
      },
      {
        icon: "CreditCard",
        title: "E-commerce",
        subMenu: [
          {
            icon: "",
            pathname: "/products",
            title: "Products",
          },
          {
            icon: "",
            pathname: "/product-detail",
            title: "Product Detail",
          },
          {
            icon: "",
            pathname: "/orders",
            title: "Orders",
          },
          {
            icon: "",
            pathname: "/order-detail",
            title: "Order Detail",
          },
        ],
      },
      {
        icon: "HardDrive",
        pathname: "/file-manager",
        title: "File Manager",
      },
      "PAGES",
      {
        icon: "Trello",
        pathname: "/profile",
        title: "Profile",
      },
      {
        icon: "ShoppingBag",
        pathname: "/pricing",
        title: "Pricing",
      },
      {
        icon: "Files",
        pathname: "/invoice",
        title: "Invoice",
      },
      {
        icon: "FileCheck2",
        pathname: "/faq",
        title: "FAQ",
      },
      {
        icon: "ClipboardCheck",
        pathname: "/timeline",
        title: "Timeline",
      },
      {
        icon: "Edit",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pathname: "/crud-data-list",
            title: "Data List",
          },
          {
            icon: "",
            pathname: "/crud-form",
            title: "Form",
          },
        ],
      },
      {
        icon: "FileText",
        title: "Wizards",
        subMenu: [
          {
            icon: "",
            pathname: "/wizard-layout-1",
            title: "Layout 1",
          },
          {
            icon: "",
            pathname: "/wizard-layout-2",
            title: "Layout 2",
          },
          {
            icon: "",
            pathname: "/wizard-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Unlock",
        pathname: "/login",
        title: "Login",
      },
      {
        icon: "Inbox",
        pathname: "/register",
        title: "Register",
      },
      {
        icon: "HardDrive",
        pathname: "/error-page",
        title: "Error Page",
      },
      "USER INTERFACE",
      {
        icon: "Inbox",
        title: "Components",
        subMenu: [
          {
            icon: "",
            pathname: "/table",
            title: "Table",
            subMenu: [
              {
                icon: "",
                pathname: "/regular-table",
                title: "Regular Table",
              },
              {
                icon: "",
                pathname: "/tabulator",
                title: "Tabulator",
              },
            ],
          },
          {
            icon: "",
            title: "Overlay",
            subMenu: [
              {
                icon: "",
                pathname: "/modal",
                title: "Modal",
              },
              {
                icon: "",
                pathname: "/slide-over",
                title: "Slide Over",
              },
              {
                icon: "",
                pathname: "/notification",
                title: "Notification",
              },
            ],
          },
          {
            icon: "",
            pathname: "/tab",
            title: "Tab",
          },
          {
            icon: "",
            pathname: "/accordion",
            title: "Accordion",
          },
          {
            icon: "",
            pathname: "/button",
            title: "Button",
          },
          {
            icon: "",
            pathname: "/alert",
            title: "Alert",
          },
          {
            icon: "",
            pathname: "/progress-bar",
            title: "Progress Bar",
          },
          {
            icon: "",
            pathname: "/tooltip",
            title: "Tooltip",
          },
          {
            icon: "",
            pathname: "/dropdown",
            title: "Dropdown",
          },
          {
            icon: "",
            pathname: "/typography",
            title: "Typography",
          },
          {
            icon: "",
            pathname: "/icon",
            title: "Icon",
          },
          {
            icon: "",
            pathname: "/loading-icon",
            title: "Loading Icon",
          },
        ],
      },
      {
        icon: "Sidebar",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/regular-form",
            title: "Regular Form",
          },
          {
            icon: "",
            pathname: "/datepicker",
            title: "Datepicker",
          },
          {
            icon: "",
            pathname: "/tom-select",
            title: "Tom Select",
          },
          {
            icon: "",
            pathname: "/file-upload",
            title: "File Upload",
          },
          {
            icon: "",
            pathname: "/wysiwyg-editor",
            title: "Wysiwyg Editor",
          },
          {
            icon: "",
            pathname: "/validation",
            title: "Validation",
          },
        ],
      },
      {
        icon: "HardDrive",
        title: "Widgets",
        subMenu: [
          {
            icon: "",
            pathname: "/chart",
            title: "Chart",
          },
          {
            icon: "",
            pathname: "/slider",
            title: "Slider",
          },
          {
            icon: "",
            pathname: "/image-zoom",
            title: "Image Zoom",
          },
        ],
      },
    ],
  },
});

export { sideMenu };
