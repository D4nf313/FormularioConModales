import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModalComponent } from '../ng-modal/ng-modal.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  modalSwitch:boolean=false;

  constructor(private modalSS:ModalService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((date)=>{
        this.modalSwitch=date;
    })
  }
  openModal(){
    this.modalSwitch=true;
    console.log(this.modalSwitch)
  }

  
  open() {
    const modalRef = this.modalService.open(NgModalComponent);
  //  modalRef.componentInstance.name = 'World';
  }



}
