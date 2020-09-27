import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { Evenement } from "../../../modules/evenement";
import { File as MyFile } from "../../../modules/file";

import { EvenementService } from "../evenement.service";

declare var $ :any;

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {

  @Input()  evenement: Evenement

  @Output() isClosed = new EventEmitter<boolean>();

  files : MyFile[];

  selectedFile : MyFile
  deleteConfirmation : string = ""

  selectedFiles: FileList

  currentFileUpload: File

  constructor(
    private evenementService : EvenementService,
  ) {

  }

  ngOnInit() {
  }

  toLoadData(){

    this.isClosed.emit(true);

  }

  ngOnChanges(){

    if (!!this.evenement) {

      this.evenementService.getAllFileByEvenement(this.evenement.id).subscribe(
        data => {

          this.files = data

        },
        error => {
          console.log("error")
        },
        () => { console.log('TypeEvenement Data loading ... Done')}
      );
    }
  }

  selectFile(event) {

    this.selectedFiles = event.target.files;
  }

  uploadFile() {

    this.currentFileUpload = this.selectedFiles.item(0);

    this.evenementService.addFile(this.evenement.id, this.currentFileUpload).subscribe(
      data => {

        this.toLoadData();

        $('.modal').modal('hide');

    });

    this.selectedFiles = null;
  }

  deleteFile(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedFile.id;

      this.evenementService.deleteFilet(id).subscribe(data => {

          this.toLoadData();

          $('.modal').modal('hide');

        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }

}
