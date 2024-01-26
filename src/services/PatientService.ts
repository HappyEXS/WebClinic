import http from "../shared/http-common";
import { Patient } from "../shared/types";

const getAll = () => {
    return http.get<Array<Patient>>('/patient')
}

const get = (patientID: any) => {
    return http.get<Patient>(`/patient/${patientID}`)
}

const create = (patient: any) => {
    return http.post<any>(`/patient`, patient)
}

const update = (patient: Patient) => {
    return http.put<any>(`/patient`, patient)
}

const remove = (patientID: any) => {
    return http.delete<any>(`/patient/${patientID}`)
  };

const activate = (patientID: any) => {
    return http.post<any>(`/patient/activate/${patientID}`)
  };

const disactivate = (patientID: any) => {
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