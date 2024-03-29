import http from "../shared/http-common";
import { Doctor } from "../shared/types";

const getAll = () => {
    return http.get<Array<Doctor>>('/doctor')
}

const get = (doctorID: any) => {
    return http.get<Doctor>(`/doctor/${doctorID}`)
}

const create = (doctor: any) => {
    return http.post<any>('/doctor', doctor)
}

const update = (doctorID: number, doctor: any) => {
    return http.put<any>(`/doctor/${doctorID}`, doctor)
}

const remove = (doctorID: any) => {
    return http.delete<any>(`/doctor/${doctorID}`)
  };

export const DoctorService = {
    getAll,
    get,
    create,
    update,
    remove
  };