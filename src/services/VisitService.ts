import http from "../shared/http-common";
import { Visit, SchVisQuery } from "../shared/types";

const getAll = () => {
    return http.get<Array<Visit>>('/visit')
}

const postQuery = (query: SchVisQuery) => {
    return http.post<Array<Visit>>('/visit', query)
}

const get = (visitID: number) => {
    return http.get<Array<Visit>>(`/visit/${visitID}`)
}

const getForPatient = (patientID: number) => {
    return http.get<Array<Visit>>(`/visit/patient/${patientID}`)
}

const getForDoctor = (doctorID: number) => {
    return http.get<Array<Visit>>(`/visit/doctor/${doctorID}`)
}

const setDescription = (visitID: number, description: string) => {
    return http.post<any>(`/visit/description/${visitID}?description=${description}`)
}

const addPatient = (visitID: number, patientID: number) => {
    console.log(visitID, patientID)
    return http.post<any>(`/visit/addPatient/${visitID}?patientID=${patientID}`)
}

const deletePatient = (visitID: number) => {
    return http.post<any>(`/visit/deletepatient/${visitID}`)
}

export const VisitService = {
    getAll,
    postQuery,
    get,
    getForPatient,
    getForDoctor,
    setDescription,
    addPatient,
    deletePatient
  };