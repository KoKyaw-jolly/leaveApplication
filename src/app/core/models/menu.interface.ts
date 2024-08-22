
export interface Menu {
  id: string;
  name: string;
  icon: string;
  routelink: string;
}

export const SideMenuList: Menu[]=[
    {
        "id": "dashboard",
        "name": "Dashboard",
        "icon": "fi fi-rr-home",
        "routelink": "dashboard"
    },
    {
        "id": "applyLeave",
        "name": "Apply Leave",
        "icon": "fi fi-rr-calendar-xmark",
        "routelink": "apply-leave"
    },
    {
        "id": "leaveTransaction",
        "name": "Leave Transaction",
        "icon": "fi fi-rr-folder-open",
        "routelink": "leave-transaction"
    },
    {
        "id": "leaveCalendar",
        "name": "Leave Calendar",
        "icon": "fi fi-rr-calendar-clock",
        "routelink": "leave-calendar"
    },
    {
        "id": "staffManagement",
        "name": "Staff Management",
        "icon": "fi fi-rr-users",
        "routelink": "staff-management"
    },
    {
        "id": "holidayManagement",
        "name": "Holiday Management",
        "icon": "fi fi-rr-umbrella-beach",
        "routelink": "holiday-management"
    },
    {
        "id": "leaveReport",
        "name": "Leave Report",
        "icon": "fi fi-rr-chart-histogram",
        "routelink": "leave-report"
    },
    {
        "id": "leavePolicy",
        "name": "Leave Ploicy",
        "icon": "fi fi-rr-compliance-document",
        "routelink": "leave-policy"
    },
    {
        "id": "generalSetting",
        "name": "General Setting",
        "icon": "fi fi-rr-settings-sliders",
        "routelink": "general-setting"
    }
]