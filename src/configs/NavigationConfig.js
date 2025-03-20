import { DashboardOutlined, FilePptOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/home`,
    title: "main",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "home",
        path: `${APP_PREFIX_PATH}/home`,
        title: "home",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/catalog`,
        title: "catalog",
        icon: FilePptOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "items",
            path: `${APP_PREFIX_PATH}/items`,
            title: "items",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "categories",
            path: `${APP_PREFIX_PATH}/categories`,
            title: "categories",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "collections",
            path: `${APP_PREFIX_PATH}/collections`,
            title: "collections",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "combos",
            path: `${APP_PREFIX_PATH}/combos`,
            title: "combos",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "orders",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "clients",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "client list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "client list",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "client groups",
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: "client groups",
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/settings`,
    title: "system",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "settings",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mobile app",
        path: `${APP_PREFIX_PATH}/mobile-app`,
        title: "mobile app",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
