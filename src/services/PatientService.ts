import http from "../shared/http-common";
import { Patient } from "../shared/types";

const getAll = () => {
    return http.get<Array<Patient>>('/patient')
}

const get = (patientID: any) => {
    return http.get<Array<Patient>>('/patient/${patientID}')
}

const create = (patient: Patient) => {
    return http.post<Array<Patient>>('/patient', patient)
}

const update = (patient: Patient) => {
    return http.put<Array<Patient>>('/patient', patient)
}

const remove = (patientID: any) => {
    return http.delete<Array<Patient>>('/patient/${patientID}')
  };

export const PatientService = {
    getAll,
    get,
    create,
    update,
    remove
  };