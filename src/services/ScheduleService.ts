import http from "../shared/http-common";
import { Schedule, SchVisQuery } from "../shared/types";

const getAll = () => {
  return http.get<Array<Schedule>>('/schedule')
}

const getQuery = (query: SchVisQuery) => {
    return http.post<Array<Schedule>>('/schedule', query)
}

const create = (schedule: Schedule) => {
    return http.post<Array<Schedule>>('/schedule/create', schedule)
}

const remove = (scheduleID: any) => {
    return http.delete<Array<Schedule>>('/schedule/${scheduleID}')
  };

export const ScheduleService = {
    getAll,
    getQuery,
    create,
    remove,
  };