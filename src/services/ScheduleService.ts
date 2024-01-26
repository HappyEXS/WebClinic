import http from "../shared/http-common";
import { Schedule, SchVisQuery } from "../shared/types";

const getAll = () => {
  return http.get<Array<Schedule>>('/schedule')
}

const getQuery = (query: SchVisQuery) => {
    return http.post<Array<Schedule>>('/schedule', query)
}

const create = (schedule: any) => {
    return http.post<any>('/schedule/create', schedule)
}

const remove = (scheduleID: any) => {
    return http.delete<any>(`/schedule/${scheduleID}`)
  };

export const ScheduleService = {
    getAll,
    getQuery,
    create,
    remove,
  };