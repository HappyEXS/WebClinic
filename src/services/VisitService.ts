import http from "../shared/http-common";
import { Visit, SchVisQuery } from "../shared/types";

const getAll = () => {
    return http.get<Array<Visit>>('/visit')
}

const postQuery = (query: SchVisQuery) => {
    return http.post<Array<Visit>>('/visit', query)
}

const get = (visitID: any) => {
    return http.get<Array<Visit>>('/visit/${visitID}')
}

const getForPatient = (patientID: any) => {
    return http.get<Array<Visit>>('/visit/${patientID}')
}

const getForDoctor = (doctorID: any) => {
    return http.get<Array<Visit>>('/visit/${doctorID}')
}

const setDescription = (visitID: any, description: string) => {
    return http.post<Array<Visit>>('/visit/${visitID}', description)
}

const setPatent = (visitID: any, patientID: string) => {
    return http.post<Array<Visit>>('/visit/${visitID}', patientID)
}

const deletePatient = (visitID: any) => {
    return http.post<Array<Visit>>('/visit/${visitID}')
}

export const VisitService = {
    getAll,
    postQuery,
    get,
    getForPatient,
    getForDoctor,
    setDescription,
    setPatent,
    deletePatient
  };