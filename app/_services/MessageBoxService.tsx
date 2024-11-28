import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react"

const messageBoxService = {
    success: (message:string, title:string = "Success", autoClose:number = 3000) => {
        showNotification({
            title,
            message,
            color: "green",
            icon: <IconCheck size={16}/>,
            autoClose,
            position: "bottom-right"
        })
    },
    error: (message:string, title:string = "Fail", autoClose:number = 3000) => {
        showNotification({
            title,
            message,
            color: "red",
            icon: <IconX size={16}/>,
            autoClose,
            position: "bottom-right"
        })
    },
    notify: (message:string, title:string = "Notify", autoClose:number = 3000) => {
        showNotification({
            title,
            message,
            color: "blue",
            autoClose,
            position: "bottom-right"
        })
    }
}


export default messageBoxService;