import http from "../shared/http-common";
import { Patient } from "../shared/types";

const getAll = () => {
    return http.get<Array<Patient>>('/patient')
}

const get = (patientID: number) => {
    return http.get<Patient>(`/patient/${patientID}`)
}

const create = (patient: any) => {
    return http.post<any>(`/patient`, patient)
}

const update = (patientID: number, patient: any) => {
    return http.put<any>(`/patient/${patientID}`, patient)
}

const remove = (patientID: number) => {
    return http.delete<any>(`/patient/${patientID}`)
  };

const activate = (patientID: number) => {
    return http.post<any>(`/patient/activate/${patientID}`)
  };

const disactivate = (patientID: number) => {
    return http.post<any>(`/patient/disactivate/${patientID}`)
  };

export const PatientService = {
    getAll,
    get,
    create,
    update,
    remove,
    activate,
    disactivate
  };