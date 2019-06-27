import { Component, OnInit } from '@angular/core';
import { PcService } from '../../services/pc.service';

import { NgForm } from '@angular/forms';
import { Pcs } from '../../models/pcs';

declare var M: any;

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css'],
  providers: [PcService]
})
export class PcsComponent implements OnInit {

  constructor(private pcService: PcService) { }

  ngOnInit() {
    this.getPcs();
  }

  addPc(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.pcService.putPc(form.value).subscribe(res => {
        this.resetForm(form);
        this.getPcs();
        M.toast({ html: "¡¡¡Pc actualizada!!!" });
      });
    } else {
      this.pcService.postPc(form.value).subscribe(res => {
        this.getPcs();
        this.resetForm(form);
        M.toast({ html: "¡¡¡Pc Guardada!!!" });
      });
    }
  }

  getPcs(){
    this.pcService.getPcs().subscribe(res =>{
      this.pcService.pcs = res as Pcs[];
    });
  }

  editPc(pc: Pcs){
    this.pcService.selectedPc = pc;
  }

  deletePc(_id: string, form: NgForm){
    if(confirm('¿Seguro que quiere eliminar esta Pc?')){
      this.pcService.deletePc(_id).subscribe(res => {
        this.getPcs();
        this.resetForm(form);
        M.toast({html: '¡¡¡Pc eliminada!!!'})
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.pcService.selectedPc = new Pcs();
    }
  }











}
