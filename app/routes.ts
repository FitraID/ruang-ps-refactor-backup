import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    //FrontPages
    route("login", "routes/front-pages/login.jsx"),

    //Dashboard
    layout("layout/sidebar-layout.jsx", [
        route("dashboard", "routes/dashboard/index.jsx"),
        route("playstation", 'routes/dashboard/playstation.jsx'),
        route("finance", 'routes/dashboard/finance.jsx'),
        ...prefix("item", [
            index('routes/dashboard/item.jsx'),
            route("add-new",'routes/dashboard/item/add-new.jsx'),
        ]),
        route("user-management", 'routes/dashboard/user-management.jsx'),
        route("setting", 'routes/dashboard/setting.jsx'),
    ])
    
    
] satisfies RouteConfig;