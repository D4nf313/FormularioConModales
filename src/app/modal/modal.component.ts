import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalSS:ModalService) { }

  ngOnInit(): void {
  
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

}
