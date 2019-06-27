import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pcs } from '../models/pcs'

@Injectable({
  providedIn: 'root'
})
export class PcService {

  selectedPc: Pcs;
  pcs: Pcs[];
  readonly URL_API = 'http://localhost:3000/api/pcs';

  constructor(private http: HttpClient) {
    this.selectedPc = new Pcs();
   }

   getPcs(){
     return this.http.get(this.URL_API);
   }

   postPc(pcs: Pcs){
     return this.http.post(this.URL_API, pcs);
   }

   putPc(pcs: Pcs){
     return this.http.put(this.URL_API + `/${pcs._id}` , pcs);
   }

   deletePc(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }

}
