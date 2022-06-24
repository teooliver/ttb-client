exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 6464:
/***/ ((module) => {

// Exports
module.exports = {
	"projects-drop": "ProjectsDropDown_projects-drop__6HEHX",
	"project-list-item": "ProjectsDropDown_project-list-item__bndm7",
	"client-name": "ProjectsDropDown_client-name__aZqnT",
	"projects-dropdown-search": "ProjectsDropDown_projects-dropdown-search___ZMpE"
};


/***/ }),

/***/ 4353:
/***/ ((module) => {

// Exports
module.exports = {
	"clock": "Clock_clock__pqdRt",
	"time-text": "Clock_time-text__eIyfN"
};


/***/ }),

/***/ 1787:
/***/ ((module) => {

// Exports
module.exports = {
	"Controls": "ClockControls_Controls__pWLfB",
	"play-btn": "ClockControls_play-btn__n0JeF",
	"stop-btn": "ClockControls_stop-btn__8qvUs",
	"reset-btn": "ClockControls_reset-btn__vqGSN"
};


/***/ }),

/***/ 9549:
/***/ ((module) => {

// Exports
module.exports = {
	"custom-datepicker-input": "CustomDatePickerInput_custom-datepicker-input__Z8ani"
};


/***/ }),

/***/ 2311:
/***/ ((module) => {

// Exports
module.exports = {
	"event-name-input": "EditableInput_event-name-input__lQIDW"
};


/***/ }),

/***/ 3680:
/***/ ((module) => {

// Exports
module.exports = {
	"list-item": "EventRow_list-item__MHP9S",
	"right-side": "EventRow_right-side__Dsrxk",
	"task": "EventRow_task__Ipuno",
	"project": "EventRow_project__RlB7J",
	"task-name": "EventRow_task-name__jE9zH",
	"date-picker": "EventRow_date-picker__OOQ2R",
	"total": "EventRow_total__PwVqI",
	"menu": "EventRow_menu__9Y1x_",
	"menu-list-container": "EventRow_menu-list-container__e6I00",
	"menu-item-btn": "EventRow_menu-item-btn__fw0ie"
};


/***/ }),

/***/ 629:
/***/ ((module) => {

// Exports
module.exports = {
	"EventsTable": "EventsTable_EventsTable__LNVrj",
	"day-total": "EventsTable_day-total__N609q",
	"date-header": "EventsTable_date-header__fCTMf",
	"load-more": "EventsTable_load-more__ym124"
};


/***/ }),

/***/ 3404:
/***/ ((module) => {

// Exports
module.exports = {
	"project-select": "ProjectSelect_project-select__R71SX",
	"select-project-icon": "ProjectSelect_select-project-icon__AIWJS",
	"selected-project": "ProjectSelect_selected-project__Ge7_J",
	"selected-project-name": "ProjectSelect_selected-project-name__Q6AHj",
	"selected-project-client": "ProjectSelect_selected-project-client__OHoST"
};


/***/ }),

/***/ 4429:
/***/ ((module) => {

// Exports
module.exports = {
	"Stopwatch": "Stopwatch_Stopwatch__le1Iu",
	"task-project-input": "Stopwatch_task-project-input__Ig9UJ",
	"clock-controls": "Stopwatch_clock-controls__wUzns",
	"editable-input": "Stopwatch_editable-input__bLqms",
	"project-select": "Stopwatch_project-select__Ycns7"
};


/***/ }),

/***/ 3956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useGetProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6891);
/* harmony import */ var _icons_Dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5557);
/* harmony import */ var _ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6464);
/* harmony import */ var _ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGetProjects__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_useGetProjects__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ProjectsDropDown = ({ setSelectedProject , setIsProjectDropwdownOpen ,  })=>{
    const { data: projects , isSuccess  } = (0,_hooks_useGetProjects__WEBPACK_IMPORTED_MODULE_1__/* .useGetProjects */ .S)();
    const handleSelection = (projectName)=>{
        setSelectedProject(projectName);
        setIsProjectDropwdownOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default()["projects-drop"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default()["projects-dropdown-search"]),
                type: "text",
                placeholder: "Search Projects",
                "data-testid": "projects-dropdown"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default()["project-list-item"]),
                onClick: ()=>handleSelection({
                        id: "",
                        name: "No Project",
                        client: "",
                        color: "white"
                    })
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dot__WEBPACK_IMPORTED_MODULE_2__/* .Dot */ .o, {
                        size: "24"
                    }),
                    "No Project"
                ]
            }),
            isSuccess && projects?.map((client)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default()["client-name"]),
                            children: client._id
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: client.projects.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: (_ProjectsDropDown_module_css__WEBPACK_IMPORTED_MODULE_3___default()["project-list-item"]),
                                    style: {
                                        color: project.color
                                    },
                                    onClick: ()=>handleSelection({
                                            id: project._id,
                                            name: project.name,
                                            client: project.client_name,
                                            color: project.color
                                        })
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dot__WEBPACK_IMPORTED_MODULE_2__/* .Dot */ .o, {
                                            size: "24"
                                        }),
                                        project.name
                                    ]
                                }, project._id)
                            )
                        })
                    ]
                }, client._id)
            )
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsDropDown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clock_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
/* harmony import */ var _Clock_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Clock_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Clock = ({ timerArray  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Clock_module_css__WEBPACK_IMPORTED_MODULE_1___default().clock),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Clock_module_css__WEBPACK_IMPORTED_MODULE_1___default()["time-text"]),
                children: timerArray[0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: ":"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Clock_module_css__WEBPACK_IMPORTED_MODULE_1___default()["time-text"]),
                children: timerArray[1]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: ":"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Clock_module_css__WEBPACK_IMPORTED_MODULE_1___default()["time-text"]),
                children: timerArray[2]
            })
        ]
    });
};


/***/ }),

/***/ 2022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ ClockControls)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4282);
/* harmony import */ var _hooks_useCreateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6826);
/* harmony import */ var _icons_PlayCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9101);
/* harmony import */ var _icons_StopCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8669);
/* harmony import */ var _icons_XCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3660);
/* harmony import */ var _ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1787);
/* harmony import */ var _ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCreateTask__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useCreateTask__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ClockControls = ({ setTimeInSeconds , selectedProject ,  })=>{
    const { 0: intervalId , 1: setIntervalId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: isPlaying , 1: setIsPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { task , setTask  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_2__/* .TaskContext */ .V);
    const createTaskMutation = (0,_hooks_useCreateTask__WEBPACK_IMPORTED_MODULE_3__/* .useCreateTask */ .S)();
    const handlePlayButton = ()=>{
        let interval = setInterval(()=>{
            setTimeInSeconds((previousState)=>previousState + 1
            );
        }, 1000);
        setIntervalId(interval);
        setIsPlaying(true);
        setTask({
            ...task,
            initial_time: new Date()
        });
    };
    const handleStopButton = ()=>{
        clearInterval(intervalId);
        setIsPlaying(false);
        let endTime = new Date();
        createTaskMutation.mutate({
            ...task,
            end_time: endTime,
            project: selectedProject.id
        });
        setTask({
            name: ""
        });
    };
    const handleResetButton = ()=>{
        clearInterval(intervalId);
        setTimeInSeconds(0);
        setIsPlaying(false);
        setTask({
            name: ""
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7___default().Controls),
        children: [
            isPlaying ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleStopButton,
                "data-testid": "stop-button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_StopCircle__WEBPACK_IMPORTED_MODULE_5__/* .StopCircle */ .P, {
                    className: (_ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7___default()["stop-btn"]),
                    size: "32"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handlePlayButton,
                "data-testid": "play-button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_PlayCircle__WEBPACK_IMPORTED_MODULE_4__/* .PlayCircle */ .k, {
                    className: (_ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7___default()["play-btn"]),
                    size: "32"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleResetButton,
                "data-testid": "reset-button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_XCircle__WEBPACK_IMPORTED_MODULE_6__/* .XCircle */ .a, {
                    className: (_ClockControls_module_css__WEBPACK_IMPORTED_MODULE_7___default()["reset-btn"]),
                    size: "32"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomDatePickerInput_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9549);
/* harmony import */ var _CustomDatePickerInput_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CustomDatePickerInput_module_css__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This will be used as the customInput in <DatePicker/> from React Date Picker
 * The props are going to be implicitly passed to the component.
 * I.e => customInput={<CustomDatePickerInput />}
 */ const CustomDatePickerInput = ({ value , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_CustomDatePickerInput_module_css__WEBPACK_IMPORTED_MODULE_1___default()["custom-datepicker-input"]),
        onClick: onClick,
        children: value
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDatePickerInput);


/***/ }),

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4282);
/* harmony import */ var _EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3__);




const EditableInput = ()=>{
    const { 0: isEditing , 1: setIsEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { task , setTask  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext_TaskContext__WEBPACK_IMPORTED_MODULE_2__/* .TaskContext */ .V);
    const onKeyUp = (event)=>{
        if (event.charCode === 13) {
            setIsEditing(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3___default().EditableInput),
        children: isEditing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            autoFocus: true,
            className: (_EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3___default()["event-name-input"]),
            type: "text",
            value: task.name,
            placeholder: "What are you working on?",
            onChange: (e)=>setTask({
                    ...task,
                    name: e.target.value
                })
            ,
            onSubmit: ()=>setIsEditing(false)
            ,
            onKeyPress: onKeyUp
        }) : // Todo: hover::cursor: text;
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_EditableInput_module_css__WEBPACK_IMPORTED_MODULE_3___default()["event-name-input"]),
            onClick: ()=>setIsEditing(true)
            ,
            children: task?.name ? task.name : "What are you working on?"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableInput);


/***/ }),

/***/ 404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_Dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5557);
/* harmony import */ var _reach_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3643);
/* harmony import */ var _reach_menu_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_menu_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3470);
/* harmony import */ var _icons_ThreeDotsVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9363);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomDatePickerInput_CustomDatePickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9454);
/* harmony import */ var _hooks_useUpdateTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4382);
/* harmony import */ var _reach_menu_button_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7281);
/* harmony import */ var _reach_menu_button_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reach_menu_button_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EventRow_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3680);
/* harmony import */ var _EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_7__, _hooks_useUpdateTask__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_7__, _hooks_useUpdateTask__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const EventRow = ({ task  })=>{
    const { 0: startDate , 1: setStartDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task.initial_time ? new Date(task.initial_time) : null);
    const { 0: endDate , 1: setEndDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task.end_time ? new Date(task.end_time) : null);
    const deletePostMutation = (0,_hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_7__/* .useDeleteTask */ .F)();
    const updateTaskMutation = (0,_hooks_useUpdateTask__WEBPACK_IMPORTED_MODULE_8__/* .useUpdateTask */ .k)();
    const endTime = new Date(endDate).getTime();
    const initialTime = new Date(startDate).getTime();
    const timeInSeconds = Math.round((endTime - initialTime) / 1000);
    const [hours, minutes, seconds] = (0,_utils_timer__WEBPACK_IMPORTED_MODULE_10__/* .calculateTimer */ .r)(timeInSeconds);
    const handleStartDateChange = (date)=>{
        // TODO: DEBOUNCE MUTATE
        setStartDate(date);
        updateTaskMutation.mutate({
            ...task,
            initial_time: date
        });
    };
    const handleEndDateChange = (date)=>{
        // TODO: DEBOUNCE MUTATE
        setEndDate(date);
        updateTaskMutation.mutate({
            ...task,
            end_time: date
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["list-item"]),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default().task),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["task-name"]),
                            children: [
                                " ",
                                task.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default().project),
                            style: {
                                color: task.project_color
                            },
                            children: task.project ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dot__WEBPACK_IMPORTED_MODULE_2__/* .Dot */ .o, {}),
                                    task.project
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dot__WEBPACK_IMPORTED_MODULE_2__/* .Dot */ .o, {}),
                                    "No Project"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["right-side"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["date-picker"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
                                selected: startDate,
                                // @ts-ignore
                                onChange: (date)=>handleStartDateChange(date)
                                ,
                                timeInputLabel: "Time:",
                                dateFormat: "h:mm aa",
                                showTimeInput: true,
                                customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomDatePickerInput_CustomDatePickerInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "-"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["date-picker"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
                                selected: endDate,
                                // @ts-ignore
                                onChange: (date)=>handleEndDateChange(date)
                                ,
                                timeInputLabel: "Time:",
                                dateFormat: "h:mm aa",
                                showTimeInput: true,
                                customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomDatePickerInput_CustomDatePickerInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default().total),
                            children: [
                                hours,
                                ":",
                                minutes,
                                ":",
                                seconds
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default().menu),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_reach_menu_button__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reach_menu_button__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThreeDotsVertical__WEBPACK_IMPORTED_MODULE_4__/* .ThreeDotsVertical */ .L, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reach_menu_button__WEBPACK_IMPORTED_MODULE_3__.MenuList, {
                                        className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["menu-list-container"]),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reach_menu_button__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                            className: (_EventRow_module_css__WEBPACK_IMPORTED_MODULE_11___default()["menu-item-btn"]),
                                            onSelect: ()=>deletePostMutation.mutate(task._id)
                                            ,
                                            children: "Delete"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3470);
/* harmony import */ var _EventRow_EventRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(404);
/* harmony import */ var _EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(629);
/* harmony import */ var _EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useGetInifiniteTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4460);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EventRow_EventRow__WEBPACK_IMPORTED_MODULE_2__, _hooks_useGetInifiniteTasks__WEBPACK_IMPORTED_MODULE_3__]);
([_EventRow_EventRow__WEBPACK_IMPORTED_MODULE_2__, _hooks_useGetInifiniteTasks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const EventsTable = ()=>{
    const { data , isFetchingNextPage , fetchNextPage , hasNextPage , isSuccess , isError , isLoading ,  } = (0,_hooks_useGetInifiniteTasks__WEBPACK_IMPORTED_MODULE_3__/* .useGetInifiniteTasks */ .I)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            isSuccess && data?.pages.map((groupedTasks)=>groupedTasks.results.map((group)=>{
                    const [hours, minutes, seconds] = (0,_utils_timer__WEBPACK_IMPORTED_MODULE_5__/* .calculateTimer */ .r)(Math.round(group.total_time));
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().EventsTable),
                        "data-testid": "events-table",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default()["date-header"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: date_fns_format__WEBPACK_IMPORTED_MODULE_1___default()(new Date(group._id), "EEE, dd LLL")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default()["day-total"]),
                                        children: [
                                            hours,
                                            ":",
                                            minutes,
                                            ":",
                                            seconds
                                        ]
                                    })
                                ]
                            }),
                            group.tasks.map((task)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventRow_EventRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    task: task
                                }, task._id)
                            )
                        ]
                    }, group._id);
                })
            ),
            isSuccess && hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_EventsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default()["load-more"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn btn-primary",
                    onClick: ()=>fetchNextPage()
                    ,
                    disabled: isFetchingNextPage,
                    children: isFetchingNextPage ? "Loading more..." : "Load More"
                })
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        color: "white",
                        marginLeft: "1rem"
                    },
                    children: "No Data Available"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ProjectSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_Dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5557);
/* harmony import */ var _icons_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6562);
/* harmony import */ var _ProjectsDropdown_ProjectsDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3956);
/* harmony import */ var _ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3404);
/* harmony import */ var _ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProjectsDropdown_ProjectsDropDown__WEBPACK_IMPORTED_MODULE_4__]);
_ProjectsDropdown_ProjectsDropDown__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ProjectSelect = ({ selectedProject , setSelectedProject ,  })=>{
    const { 0: isProjectDropwdownOpen , 1: setIsProjectDropwdownOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["project-select"]),
        children: [
            selectedProject.name ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["selected-project"]),
                onClick: ()=>setIsProjectDropwdownOpen(!isProjectDropwdownOpen)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dot__WEBPACK_IMPORTED_MODULE_2__/* .Dot */ .o, {
                            size: "24"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["selected-project-name"]),
                        children: selectedProject.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["selected-project-client"]),
                        style: {
                            color: selectedProject.color
                        },
                        children: selectedProject.client ? `- ${selectedProject.client}` : null
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_ProjectSelect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["select-project-icon"]),
                onClick: ()=>setIsProjectDropwdownOpen(!isProjectDropwdownOpen)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Folder__WEBPACK_IMPORTED_MODULE_3__/* .Folder */ .g, {
                        size: "24",
                        color: "white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Project"
                    })
                ]
            }),
            isProjectDropwdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectsDropdown_ProjectsDropDown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                setSelectedProject: setSelectedProject,
                setIsProjectDropwdownOpen: setIsProjectDropwdownOpen
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3470);
/* harmony import */ var _EditableInput_EditableInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4193);
/* harmony import */ var _ProjectSelect_ProjectSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7139);
/* harmony import */ var _Clock_Clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5299);
/* harmony import */ var _ClockControls_ClockControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2022);
/* harmony import */ var _Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4429);
/* harmony import */ var _Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProjectSelect_ProjectSelect__WEBPACK_IMPORTED_MODULE_3__, _ClockControls_ClockControls__WEBPACK_IMPORTED_MODULE_5__]);
([_ProjectSelect_ProjectSelect__WEBPACK_IMPORTED_MODULE_3__, _ClockControls_ClockControls__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Stopwatch = ()=>{
    const { 0: timeInSeconds , 1: setTimeInSeconds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: timerArray , 1: setTimerArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedProject , 1: setSelectedProject  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: "",
        name: "",
        client: "",
        color: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let timeArray = (0,_utils_timer__WEBPACK_IMPORTED_MODULE_6__/* .calculateTimer */ .r)(timeInSeconds);
        setTimerArray(timeArray);
    }, [
        timeInSeconds
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default().Stopwatch),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default()["task-project-input"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default()["editable-input"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditableInput_EditableInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default()["project-select"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectSelect_ProjectSelect__WEBPACK_IMPORTED_MODULE_3__/* .ProjectSelect */ .y, {
                                selectedProject: selectedProject,
                                setSelectedProject: setSelectedProject
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_7___default()["clock-controls"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Clock_Clock__WEBPACK_IMPORTED_MODULE_4__/* .Clock */ .S, {
                            timerArray: timerArray
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClockControls_ClockControls__WEBPACK_IMPORTED_MODULE_5__/* .ClockControls */ .z, {
                            setTimeInSeconds: setTimeInSeconds,
                            // timeInSeconds={timeInSeconds}
                            selectedProject: selectedProject
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Dot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Dot = ({ className , size , color  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-dot",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        })
    });
};


/***/ }),

/***/ 9101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PlayCircle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlayCircle = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-play-circle",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
            })
        ]
    });
};


/***/ }),

/***/ 8669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ StopCircle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StopCircle = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-stop-circle",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"
            })
        ]
    });
};


/***/ }),

/***/ 9363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ThreeDotsVertical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ThreeDotsVertical = ({ className , size , color  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-three-dots-vertical",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        })
    });
};


/***/ }),

/***/ 3660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ XCircle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const XCircle = ({ className , size , color  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "16",
        height: size || "16",
        fill: color || "currentColor",
        className: className || "bi-x-circle",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            })
        ]
    });
};


/***/ }),

/***/ 6826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useCreateTask)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(660);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_0__]);
react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const createTask = async (newTask)=>{
    if (newTask.project === "" || newTask.project === "No Project") {
        delete newTask.project;
    }
    const res1 = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T}/tasks`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then((res)=>res.json()
    );
    return res1;
};
const useCreateTask = ()=>{
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const createTaskMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(createTask, {
        onSuccess: ()=>{
            queryClient.invalidateQueries([
                "tasks"
            ]);
            queryClient.invalidateQueries([
                "infinite-tasks"
            ]);
        }
    });
    return createTaskMutation;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useDeleteTask)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(660);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_0__]);
react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const deleteTask = async (id)=>{
    const res1 = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then((res)=>res.json()
    );
    return res1;
};
const useDeleteTask = ()=>{
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const deletePostMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(deleteTask, {
        onSuccess: ()=>{
            queryClient.invalidateQueries([
                "tasks"
            ]);
        }
    });
    return deletePostMutation;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useGetInifiniteTasks)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(660);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_0__]);
react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getInifiniteTasks = async ({ pageParam =1  })=>{
    const res1 = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T}/tasks/group?page=${pageParam}`).then((res)=>res.json()
    );
    return res1;
};
const useGetInifiniteTasks = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        "infinite-tasks"
    ], getInifiniteTasks, {
        getNextPageParam: (lastPage, _allPages)=>{
            if (lastPage?.pagination?.next_page) {
                return lastPage.pagination.next_page;
            }
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useGetProjects)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(660);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_0__]);
react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getProjects = async ()=>{
    const res1 = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T}/projects/`).then((res)=>res.json()
    );
    return res1;
};
const useGetProjects = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "projects"
    ], getProjects);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useUpdateTask)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _utils_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(660);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_query__WEBPACK_IMPORTED_MODULE_0__]);
react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const updateTask = async (task)=>{
    const editable_fields = {
        name: task.name,
        initial_time: task.initial_time,
        end_time: task.end_time
    };
    const res1 = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api_client__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T}/tasks/${task._id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editable_fields)
    }).then((res)=>res.json()
    );
    return res1;
};
const useUpdateTask = ()=>{
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const updateTaskMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(updateTask, {
        onSuccess: ()=>{
            queryClient.invalidateQueries([
                "tasks"
            ]);
        }
    });
    return updateTaskMutation;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TimeTracker_EventsTable_EventsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7635);
/* harmony import */ var _components_TimeTracker_StopWatch_Stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7486);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TimeTracker_EventsTable_EventsTable__WEBPACK_IMPORTED_MODULE_1__, _components_TimeTracker_StopWatch_Stopwatch__WEBPACK_IMPORTED_MODULE_2__]);
([_components_TimeTracker_EventsTable_EventsTable__WEBPACK_IMPORTED_MODULE_1__, _components_TimeTracker_StopWatch_Stopwatch__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const TimeTracker = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        "aria-label": "time tracker",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TimeTracker_StopWatch_Stopwatch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TimeTracker_EventsTable_EventsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeTracker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7281:
/***/ (() => {



/***/ })

};
;