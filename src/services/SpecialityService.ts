import http from "../shared/http-common";
import { Speciality } from "../shared/types";

const getAll = () => {
    return http.get<Array<Speciality>>("/speciality")
}

export const SpecialityService = {
    getAll,
  };