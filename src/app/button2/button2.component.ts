import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
declare var $: any; // Import jQuery

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component {
  constructor(private dialog: MatDialog) { }
  

  openPopup(): void {
    this.dialog.open(PopupComponent);
}

}
