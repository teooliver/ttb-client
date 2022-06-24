(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9041:
/***/ ((module) => {

// Exports
module.exports = {
	"AppRoutes": "AppRoutes_AppRoutes__0jT0R"
};


/***/ }),

/***/ 1886:
/***/ ((module) => {

// Exports
module.exports = {
	"btn-navbar": "LoginButton_btn-navbar__55c6I",
	"btn-navbar--login": "LoginButton_btn-navbar--login__M_Bxt LoginButton_btn-navbar__55c6I"
};


/***/ }),

/***/ 7235:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__7Exjr",
	"logo": "Navbar_logo__keI4H",
	"active-link": "Navbar_active-link__uBIVV",
	"ul": "Navbar_ul__ljlPe",
	"seed-buttons": "Navbar_seed-buttons__bTQn8",
	"btn-navbar": "Navbar_btn-navbar__SywGi",
	"btn-navbar--add": "Navbar_btn-navbar--add__mY2gc Navbar_btn-navbar__SywGi",
	"btn-navbar--remove": "Navbar_btn-navbar--remove__kZypN Navbar_btn-navbar__SywGi"
};


/***/ }),

/***/ 7423:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

if (true) {
    const { server  } = __webpack_require__(2017);
    server.listen();
} else {}


/***/ }),

/***/ 2017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "server": () => (/* binding */ server)
});

;// CONCATENATED MODULE: external "msw/node"
const node_namespaceObject = require("msw/node");
;// CONCATENATED MODULE: external "msw"
const external_msw_namespaceObject = require("msw");
// EXTERNAL MODULE: ./src/utils/api-client.ts
var api_client = __webpack_require__(660);
;// CONCATENATED MODULE: ./mocks/data/getClientsRes.ts
const getClientRes = [
    {
        _id: "61bb3d2fc19459596babf595",
        name: "Ritchie and Sons",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf596",
        name: "Beatty and Cartwright Group",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf597",
        name: "Schroeder Inc",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf598",
        name: "Gaylord and Kuphal and Sons",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf599",
        name: "Zemlak and Bartell Inc",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf59a",
        name: "Mann and Kuvalis Inc",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf59b",
        name: "Emmerich LLC",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf59c",
        name: "D'Amore and Ziemann LLC",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    },
    {
        _id: "61bb3d2fc19459596babf59d",
        name: "Langosh Group",
        created_at: "2021-12-16T13:20:47.250+00:00",
        updated_at: "2021-12-16T13:20:47.250+00:00"
    }, 
];

;// CONCATENATED MODULE: ./mocks/data/getGroupedTasksRes.ts
const getGroupedTasksRes = {
    results: [
        {
            _id: "2021-12-16",
            tasks: [
                {
                    _id: "61bb3d2fc19459596babf5ab1",
                    name: "Buckridge Group",
                    initial_time: "2021-12-16T12:20:47Z",
                    end_time: "2021-12-16T14:20:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bd2",
                    name: "Orn and Sons",
                    initial_time: "2021-12-16T12:50:47Z",
                    end_time: "2021-12-16T13:50:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                }, 
            ],
            total_time: 10800.0
        },
        {
            _id: "2021-12-15",
            tasks: [
                {
                    _id: "61bb3d2fc19459596babf5ab3",
                    name: "Buckridge Group",
                    initial_time: "2021-12-16T12:20:47Z",
                    end_time: "2021-12-16T14:20:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bd4",
                    name: "Orn and Sons",
                    initial_time: "2021-12-16T12:50:47Z",
                    end_time: "2021-12-16T13:50:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5a75",
                    name: "Kassulke Inc",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b16",
                    name: "Kozey Group",
                    initial_time: "2021-12-15T12:50:47Z",
                    end_time: "2021-12-15T13:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5b87",
                    name: "Hills and Swift and Sons",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bc8",
                    name: "Nicolas and Casper Inc",
                    initial_time: "2021-12-15T12:23:17Z",
                    end_time: "2021-12-15T14:18:17Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5c39",
                    name: "Dicki Inc",
                    initial_time: "2021-12-15T11:50:47Z",
                    end_time: "2021-12-15T14:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5c10",
                    name: "Bednar LLC",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ce11",
                    name: "Harvey Group",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                }, 
            ],
            total_time: 56500.0
        },
        {
            _id: "2021-12-14",
            tasks: [
                {
                    _id: "61bb3d2fc19459596babf5ab12",
                    name: "Buckridge Group",
                    initial_time: "2021-12-16T12:20:47Z",
                    end_time: "2021-12-16T14:20:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bd13",
                    name: "Orn and Sons",
                    initial_time: "2021-12-16T12:50:47Z",
                    end_time: "2021-12-16T13:50:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5a714",
                    name: "Kassulke Inc",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b115",
                    name: "Kozey Group",
                    initial_time: "2021-12-15T12:50:47Z",
                    end_time: "2021-12-15T13:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5b816",
                    name: "Hills and Swift and Sons",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bc17",
                    name: "Nicolas and Casper Inc",
                    initial_time: "2021-12-15T12:23:17Z",
                    end_time: "2021-12-15T14:18:17Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5c318",
                    name: "Dicki Inc",
                    initial_time: "2021-12-15T11:50:47Z",
                    end_time: "2021-12-15T14:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5c919",
                    name: "Bednar LLC",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ce20",
                    name: "Harvey Group",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ac21",
                    name: "Tromp Group",
                    initial_time: "2021-12-14T12:48:13Z",
                    end_time: "2021-12-14T13:53:21Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5b522",
                    name: "Schiller and Hermann Group",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Auer and Bahringer and Sons",
                    project_color: "#b47aeaff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b923",
                    name: "Gleichner and Runolfsdottir and Sons",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5cc24",
                    name: "Zulauf Group",
                    initial_time: "2021-12-14T12:54:07Z",
                    end_time: "2021-12-14T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                }, 
            ],
            total_time: 35908.0
        },
        {
            _id: "2021-12-13",
            tasks: [
                {
                    _id: "61bb3d2fc19459596babf5ab25",
                    name: "Buckridge Group",
                    initial_time: "2021-12-16T12:20:47Z",
                    end_time: "2021-12-16T14:20:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bd",
                    name: "Orn and Sons",
                    initial_time: "2021-12-16T12:50:47Z",
                    end_time: "2021-12-16T13:50:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5a723",
                    name: "Kassulke Inc",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b13",
                    name: "Kozey Group",
                    initial_time: "2021-12-15T12:50:47Z",
                    end_time: "2021-12-15T13:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5b834",
                    name: "Hills and Swift and Sons",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bc35",
                    name: "Nicolas and Casper Inc",
                    initial_time: "2021-12-15T12:23:17Z",
                    end_time: "2021-12-15T14:18:17Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5c336",
                    name: "Dicki Inc",
                    initial_time: "2021-12-15T11:50:47Z",
                    end_time: "2021-12-15T14:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5c937",
                    name: "Bednar LLC",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ce38",
                    name: "Harvey Group",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ac39",
                    name: "Tromp Group",
                    initial_time: "2021-12-14T12:48:13Z",
                    end_time: "2021-12-14T13:53:21Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5b540",
                    name: "Schiller and Hermann Group",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Auer and Bahringer and Sons",
                    project_color: "#b47aeaff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b941",
                    name: "Gleichner and Runolfsdottir and Sons",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5cc43",
                    name: "Zulauf Group",
                    initial_time: "2021-12-14T12:54:07Z",
                    end_time: "2021-12-14T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5af44",
                    name: "Hilpert and Connelly and Sons",
                    initial_time: "2021-12-13T12:20:47Z",
                    end_time: "2021-12-13T14:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bf45",
                    name: "Cummings and Hermiston Group",
                    initial_time: "2021-12-13T12:48:13Z",
                    end_time: "2021-12-13T13:53:21Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5d346",
                    name: "O'Keefe and Hand and Sons",
                    initial_time: "2021-12-13T12:23:17Z",
                    end_time: "2021-12-13T14:18:17Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                }, 
            ],
            total_time: 18008.0
        },
        {
            _id: "2021-12-12",
            tasks: [
                {
                    _id: "61bb3d2fc19459596babf5ab",
                    name: "Buckridge Group",
                    initial_time: "2021-12-16T12:20:47Z",
                    end_time: "2021-12-16T14:20:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bd47",
                    name: "Orn and Sons",
                    initial_time: "2021-12-16T12:50:47Z",
                    end_time: "2021-12-16T13:50:47Z",
                    project: "Sauer and Howell Inc",
                    project_color: "#9799caff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5a7",
                    name: "Kassulke Inc",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b1",
                    name: "Kozey Group",
                    initial_time: "2021-12-15T12:50:47Z",
                    end_time: "2021-12-15T13:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5b8",
                    name: "Hills and Swift and Sons",
                    initial_time: "2021-12-15T12:54:07Z",
                    end_time: "2021-12-15T13:47:27Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bc",
                    name: "Nicolas and Casper Inc",
                    initial_time: "2021-12-15T12:23:17Z",
                    end_time: "2021-12-15T14:18:17Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5c3",
                    name: "Dicki Inc",
                    initial_time: "2021-12-15T11:50:47Z",
                    end_time: "2021-12-15T14:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5c9",
                    name: "Bednar LLC",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ce",
                    name: "Harvey Group",
                    initial_time: "2021-12-15T11:20:47Z",
                    end_time: "2021-12-15T15:20:47Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5ac",
                    name: "Tromp Group",
                    initial_time: "2021-12-14T12:48:13Z",
                    end_time: "2021-12-14T13:53:21Z",
                    project: "Walsh LLC",
                    project_color: "#b47aeaff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5b5",
                    name: "Schiller and Hermann Group",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Auer and Bahringer and Sons",
                    project_color: "#b47aeaff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b9",
                    name: "Gleichner and Runolfsdottir and Sons",
                    initial_time: "2021-12-14T11:20:47Z",
                    end_time: "2021-12-14T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5cc",
                    name: "Zulauf Group",
                    initial_time: "2021-12-14T12:54:07Z",
                    end_time: "2021-12-14T13:47:27Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5af",
                    name: "Hilpert and Connelly and Sons",
                    initial_time: "2021-12-13T12:20:47Z",
                    end_time: "2021-12-13T14:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5bf",
                    name: "Cummings and Hermiston Group",
                    initial_time: "2021-12-13T12:48:13Z",
                    end_time: "2021-12-13T13:53:21Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5d3",
                    name: "O'Keefe and Hand and Sons",
                    initial_time: "2021-12-13T12:23:17Z",
                    end_time: "2021-12-13T14:18:17Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5b0",
                    name: "Windler LLC",
                    initial_time: "2021-12-12T11:20:47Z",
                    end_time: "2021-12-12T15:20:47Z",
                    project: "Koepp and Bogisich Group",
                    project_color: "#9db5b2ff",
                    client: "Ritchie and Sons"
                },
                {
                    _id: "61bb3d2fc19459596babf5be",
                    name: "Cassin and Sons",
                    initial_time: "2021-12-12T11:50:47Z",
                    end_time: "2021-12-12T14:50:47Z",
                    project: "Mohr and Sons",
                    project_color: "#7bcdbaff",
                    client: "Emmerich LLC"
                },
                {
                    _id: "61bb3d2fc19459596babf5ca",
                    name: "Shanahan and Armstrong and Sons",
                    initial_time: "2021-12-12T12:50:47Z",
                    end_time: "2021-12-12T13:50:47Z",
                    project: "Conroy Inc",
                    project_color: "#878e99ff",
                    client: "Zemlak and Bartell Inc"
                },
                {
                    _id: "61bb3d2fc19459596babf5d0",
                    name: "Schowalter and Gerhold LLC",
                    initial_time: "2021-12-12T11:20:47Z",
                    end_time: "2021-12-12T15:20:47Z",
                    project: "Legros Group",
                    project_color: "#d3d5d4ff",
                    client: "Ritchie and Sons"
                }, 
            ],
            total_time: 43200.0
        }, 
    ],
    pagination: {
        previous: null,
        next: "/experiments?page=2&size=5",
        total_pages: 3,
        total_items: 11,
        size: 5,
        start: 1
    }
};

;// CONCATENATED MODULE: ./mocks/data/getProjectsRes.ts
const getProjectsRes = [
    {
        _id: "Ritchie and Sons",
        projects: [
            {
                _id: "61bb3d2fc19459596babf59f",
                name: "Koepp and Bogisich Group",
                color: "#9db5b2ff",
                client_name: "Ritchie and Sons"
            },
            {
                _id: "61bb3d2fc19459596babf5a0",
                name: "Legros Group",
                color: "#d3d5d4ff",
                client_name: "Ritchie and Sons"
            },
            {
                _id: "61bb3d2fc19459596babf5a2",
                name: "Walsh LLC",
                color: "#b47aeaff",
                client_name: "Ritchie and Sons"
            },
            {
                _id: "61bb3d2fc19459596babf5a4",
                name: "Sauer and Howell Inc",
                color: "#9799caff",
                client_name: "Ritchie and Sons"
            },
            {
                _id: "61bb3d2fc19459596babf5a6",
                name: "Barton LLC",
                color: "#878e99ff",
                client_name: "Ritchie and Sons"
            }, 
        ]
    },
    {
        _id: "Emmerich LLC",
        projects: [
            {
                _id: "61bb3d2fc19459596babf5a1",
                name: "Mohr and Sons",
                color: "#7bcdbaff",
                client_name: "Emmerich LLC"
            }, 
        ]
    },
    {
        _id: "Schroeder Inc",
        projects: [
            {
                _id: "61bb3d2fc19459596babf59e",
                name: "Aufderhar and Greenholt LLC",
                color: "#9db5b2ff",
                client_name: "Schroeder Inc"
            }, 
        ]
    },
    {
        _id: "Zemlak and Bartell Inc",
        projects: [
            {
                _id: "61bb3d2fc19459596babf5a3",
                name: "Auer and Bahringer and Sons",
                color: "#b47aeaff",
                client_name: "Zemlak and Bartell Inc"
            },
            {
                _id: "61bb3d2fc19459596babf5a5",
                name: "Conroy Inc",
                color: "#878e99ff",
                client_name: "Zemlak and Bartell Inc"
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./mocks/handlers.ts





const handlers = [
    external_msw_namespaceObject.rest.get(`${api_client/* API_URL */.T}/projects`, (_req, res, ctx)=>{
        return res(ctx.status(200), ctx.json(getProjectsRes));
    }),
    external_msw_namespaceObject.rest.get(`${api_client/* API_URL */.T}/clients`, (_req, res, ctx)=>{
        return res(ctx.status(200), ctx.json(getClientRes));
    }),
    external_msw_namespaceObject.rest.get(`${api_client/* API_URL */.T}/tasks/group`, (req, res, ctx)=>{
        return res(ctx.status(200), ctx.json(getGroupedTasksRes));
    }), 
];

;// CONCATENATED MODULE: ./mocks/server.ts


// This configures a request mocking server with the given request handlers.
const server = (0,node_namespaceObject.setupServer)(...handlers);


/***/ }),

/***/ 9877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ LoginButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9347);
/* harmony import */ var _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1886);
/* harmony import */ var _LoginButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LoginButton_module_css__WEBPACK_IMPORTED_MODULE_3__);




const LoginButton = ()=>{
    const auth = (0,_context_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleLoginClick = ()=>{
        // TODO: Open login / signup Modal/Popup (Side Nav to the righ?)
        if (auth.user) {
            auth.logout();
            return;
        }
        router.push("/login");
    };
    if (auth.user) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_LoginButton_module_css__WEBPACK_IMPORTED_MODULE_3___default()["btn-navbar--login"]),
            onClick: handleLoginClick,
            children: "Logout"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_LoginButton_module_css__WEBPACK_IMPORTED_MODULE_3___default()["btn-navbar--login"]),
        onClick: handleLoginClick,
        children: "Login / Signup"
    });
};


/***/ }),

/***/ 1837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(786);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(666);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(660);
/* harmony import */ var _icons_ClockHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1327);
/* harmony import */ var _icons_FileText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185);
/* harmony import */ var _icons_Folder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6562);
/* harmony import */ var _icons_PersonSquare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7235);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9877);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_1__]);
react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Navbar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const handleRemoveAllData = ()=>{
        // removeAllData(queryClient);
        try {
            fetch(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_10__/* .API_URL */ .T}/seed/remove`).then((_res)=>queryClient.invalidateQueries([
                    "projects"
                ])
            ).then((_res)=>queryClient.invalidateQueries([
                    "tasks"
                ])
            );
        } catch (error) {
            console.log(error);
        }
    };
    const handleSeedData = async ()=>{
        // seedData(queryClient);
        try {
            fetch(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_10__/* .API_URL */ .T}/seed/clients`).then((_res)=>fetch(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_10__/* .API_URL */ .T}/seed/projects`)
            ).then((_res)=>queryClient.invalidateQueries([
                    "projects"
                ])
            ).then((_res)=>fetch(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_10__/* .API_URL */ .T}/seed/tasks`)
            ).then((_res)=>queryClient.invalidateQueries([
                    "tasks"
                ])
            ).then((_res)=>queryClient.invalidateQueries([
                    "clients"
                ])
            );
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default().navbar),
        "data-testid": "navbar",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bold",
                        children: "Time"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Track"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/timetracker" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/timetracker",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ClockHistory__WEBPACK_IMPORTED_MODULE_4__/* .ClockHistory */ .i, {})
                                    }),
                                    "Timer"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/reports" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/reports",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_FileText__WEBPACK_IMPORTED_MODULE_5__/* .FileText */ .a, {})
                                    }),
                                    "Reports"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/projects" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/projects",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Folder__WEBPACK_IMPORTED_MODULE_6__/* .Folder */ .g, {})
                                    }),
                                    "Projects"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/clients" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/clients",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_PersonSquare__WEBPACK_IMPORTED_MODULE_7__/* .PersonSquare */ .q, {})
                                    }),
                                    "Clients"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/tags" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/tags",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Tags__WEBPACK_IMPORTED_MODULE_3__/* .Tags */ .$, {})
                                    }),
                                    "Tags"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.pathname === "/profile" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["active-link"]) : "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/profile",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Tags__WEBPACK_IMPORTED_MODULE_3__/* .Tags */ .$, {})
                                    }),
                                    "Profile"
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["seed-buttons"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginButton_LoginButton__WEBPACK_IMPORTED_MODULE_8__/* .LoginButton */ .T, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["btn-navbar--add"]),
                        onClick: handleSeedData,
                        children: "Seed Data"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default()["btn-navbar--remove"]),
                        onClick: handleRemoveAllData,
                        children: "Remove All Data"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ClockHistory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ClockHistory = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-clock-history",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
            })
        ]
    });
};


/***/ }),

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ FileText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FileText = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-file-text",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
            })
        ]
    });
};


/***/ }),

/***/ 6201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PersonSquare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonSquare = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-person-square",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
            })
        ]
    });
};


/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Tags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Tags = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-tags",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
            })
        ]
    });
};


/***/ }),

/***/ 9347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const AuthProvider = ({ children  })=>{
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const login = (user, callback)=>{
        setUser(user);
        if (!callback) {
            return;
        }
        callback();
    };
    const logout = (callback)=>{
        setUser(null);
        if (!callback) {
            return;
        }
        callback();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user: user1,
            login,
            logout
        },
        children: children
    });
};
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9347);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1837);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);
/* harmony import */ var _context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4282);
/* harmony import */ var _components_AppRoutes_AppRoutes_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9041);
/* harmony import */ var _components_AppRoutes_AppRoutes_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_AppRoutes_AppRoutes_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7035);
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6938);
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__, react_query__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__, react_query__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
// if (process.env.REACT_APP_ENV === 'enable_mockups') {
//   const { worker } = require('../../mocks/browser');
//   worker.start();
// }
if (true) {
    __webpack_require__(7423);
}
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthProvider */ .H, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "App",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            "aria-label": "application area",
                            className: (_components_AppRoutes_AppRoutes_module_css__WEBPACK_IMPORTED_MODULE_8___default().AppRoutes),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "http://localhost:5000";


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 786:
/***/ ((module) => {

"use strict";
module.exports = import("react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,863,521], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();