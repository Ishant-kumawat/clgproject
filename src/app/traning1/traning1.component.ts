import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-traning1',
  templateUrl: './traning1.component.html',
  styleUrls: ['./traning1.component.css']
})

export class Traning1Component {
  
  constructor(private router: Router) { }
  startTraining() {
    
     
    this.router.navigate(['/button']);
    


    console.log('Button clicked in Traning1Component');
  }
  onSelect(){
      this.router.navigate(['/Button2']);

      console.log('Button clicked in Traning1Component');
  }
}

