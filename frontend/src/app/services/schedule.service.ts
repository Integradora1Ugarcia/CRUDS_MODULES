import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedules } from '../models/schedules';



@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  selectedSchedule: Schedules;
  schedules: Schedules[];
  readonly URL_API = 'http://localhost:3000/api/schedules';

  constructor(private http: HttpClient) {
    this.selectedSchedule = new Schedules();
   }

   getSchedules(){
     return this.http.get(this.URL_API);
   }

   postSchedule(schedules: Schedules){
     return this.http.post(this.URL_API, schedules);
   }

   putSchedule(schedules: Schedules){
     return this.http.put(this.URL_API + `/${schedules._id}` , schedules);
   }

   deleteSchedule(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
