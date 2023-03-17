import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  myForm: FormGroup;




  constructor(private modalSS:ModalService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((date)=>{
        this.modalSwitch=date;
    })
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

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
