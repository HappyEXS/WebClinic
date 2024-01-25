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
  DoctorID: number;
  Name: string;
  Surname: string;
  DateOfBirth: string;
  Email: string;
  Password: string;
  SpecialityID: number;
  Speciality: Speciality;
  RowVersion: string;
}

export type Patient = {
  PatientID: number;
  Name: string;
  Surname: string;
  DateOfBirth: string;
  Email: string;
  Password: string;
  IsActive: boolean;
  RowVersion: string;
}

export type Schedule = {
  ScheduleID: number;
  DoctorID: number;
  Doctor: Doctor;
  StartTime: string;
  EndTime: string;
}

export type Visit = {
  VisitID: number;
  ScheduleID: number;
  DoctorID: number;
  Doctor: Doctor;
  StartTime: string;
  EndTime: string;
}