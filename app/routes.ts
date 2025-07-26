import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    //FrontPages
    route("login", "routes/front-pages/login.jsx"),

    //Dashboard
    layout("layout/sidebar-layout.jsx", [
        route("dashboard", "routes/dashboard/index.jsx"),
        ...prefix("playstation", [
            index('routes/dashboard/playstation.jsx'),
            route("add-new",'routes/dashboard/konsol/add-new.jsx'),
            route("edit/:id",'routes/dashboard/konsol/edit.jsx'),
        ]),
        route("finance", 'routes/dashboard/finance.jsx'),
        ...prefix("item", [
            index('routes/dashboard/item.jsx'),
            route("add-new",'routes/dashboard/item/add-new.jsx'),
            route("edit/:id",'routes/dashboard/item/edit.jsx'),
        ]),
        ...prefix("user-management", [
            index('routes/dashboard/user-management.jsx'),
            route("add-new",'routes/dashboard/user/add-new.jsx'),
            route("edit/:id",'routes/dashboard/user/edit.jsx'),
        ]),
        route("setting", 'routes/dashboard/setting.jsx'),
    ])
    
    
] satisfies RouteConfig;