import http from "../shared/http-common";
import { Doctor } from "../shared/types";

const getAll = () => {
    return http.get<Array<Doctor>>('/doctor')
}

const get = (doctorID: any) => {
    return http.get<Array<Doctor>>('/doctor/${doctorID}')
}

const create = (doctor: Doctor) => {
    return http.post<Array<Doctor>>('/doctor', doctor)
}

const update = (doctor: Doctor) => {
    return http.put<Array<Doctor>>('/doctor', doctor)
}

const remove = (doctorID: any) => {
    return http.delete<Array<Doctor>>('/doctor/${doctorID}')
  };

export const DoctorService = {
    getAll,
    get,
    create,
    update,
    remove
  };