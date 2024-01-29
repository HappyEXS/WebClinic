export enum CurrentPage {
    Home = "home",
    Login = "login",
    Register = "register",
    Dashboard = "dashboard",
    Schedule = "schedule",
    Specialities = "specialities",
    Visits = "visits",
    Doctors = "doctors",
    Patients = "patients",
  }

export type Speciality = {
  specialityID: number;
  name: string;
}

export type Doctor = {
  doctorID: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  password: string;
  specialityID: number;
  speciality: Speciality;
  rowVersion: string;
}

export type Patient = {
  patientID: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  password: string;
  isActive: boolean;
  rowVersion: string;
}

export type Schedule = {
  scheduleID: number;
  doctorID: number;
  doctor: Doctor;
  startTime: string;
  endTime: string;
}

export type Visit = {
  visitID: number;
  scheduleID: number;
  schedule: Schedule;
  patientID: number;
  patient: Patient;
  startTime: string;
  endTime: string;
  description: string;
  available: boolean;
}

export type SchVisQuery = {
  startDate: string;
  endDate: string;
  specID: number;
  searched: boolean;
}

export let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];