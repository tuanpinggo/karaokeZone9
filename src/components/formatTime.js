import { format } from "date-fns";

export function formatTime(time){
    return format(new Date(time), 'dd/MM/yyyy hh:mm:ss')
}