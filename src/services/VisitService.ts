import http from "../shared/http-common";
import { Visit, SchVisQuery } from "../shared/types";

const getAll = () => {
    return http.get<Array<Visit>>('/visit')
}

const postQuery = (query: SchVisQuery) => {
    return http.post<Array<Visit>>('/visit', query)
}

const get = (visitID: any) => {
    return http.get<Array<Visit>>(`/visit/${visitID}`)
}

const getForPatient = (patientID: any) => {
    return http.get<Array<Visit>>(`/visit/patient/${patientID}`)
}

const getForDoctor = (doctorID: any) => {
    return http.get<Array<Visit>>(`/visit/doctor/${doctorID}`)
}

const setDescription = (visitID: any, description: string) => {
    return http.post<any>(`/visit/description/${visitID}?description=${description}`)
}

const setPatent = (visitID: any, patientID: string) => {
    return http.post<any>(`/visit/addpatient/${visitID}?patientID=${patientID}`)
}

const deletePatient = (visitID: any) => {
    return http.post<any>(`/visit/deletepatient/${visitID}`)
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