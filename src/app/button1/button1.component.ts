import { Component, OnInit } from '@angular/core';
import { Review } from '../app.module';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit{
 
  constructor(private dialog: MatDialog) { }
  

  openPopup(): void {
    this.dialog.open(PopupComponent);
}
ngOnInit(): void {
  
}
ratingcount=0;
totalrating=0;
Finalrating:any;




  reviews: Review[] = [
    { title: 'Description', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec fringilla commodo mi ac malesuada. Sed in justo varius, tristique nunc id, rhoncus ex. Fusce condimentum euismod nisi, ac tincidunt tortor ultricies sed. Proin laoreet varius turpis, a malesuada lectus blandit sed. Nullam ut enim ut tellus pellentesque aliquam at vel metus.Sed bibendum orci nec nunc luctus, et varius quam vehicula.Nulla facilisi.
    
    Quisque tempor dui eget enim lobortis luctus.Curabitur eu mi sit amet lacus laoreet congue sed eu sem.In ac erat urna.Sed vitae neque odio. Suspendisse scelerisque tellus innisl pharetra fringilla. Sed fermentum elementum sagittis.Phasellus dapibus urna enim, at finibus erat rutrum eu.Morbi hendrerit justo eget urna condimentum rutrum.Fusce vehicula enim vitae ante fringilla, ac euismod miviverra. Etiam a rhoncus arcu.
    
    Quisque tempor dui eget enim lobortis luctus.Curabitur eu mi sit amet lacus laoreet congue sed eu sem.In ac erat urna.Sed vitae neque odio. Suspendisse scelerisque tellus innisl pharetra fringilla. Sed fermentum elementum sagittis.Phasellus dapibus urna enim, at finibus erat rutrum eu.Morbi hendrerit justo eget urna condimentum rutrum.Fusce vehicula enim vitae ante fringilla, ac euismod miviverra. Etiam a rhoncus arcu.
   
    Quisque tempor dui eget enim lobortis luctus.Curabitur eu mi sit amet lacus laoreet congue sed eu sem.In ac erat urna.Sed vitae neque odio. Suspendisse scelerisque tellus innisl pharetra fringilla. Sed fermentum elementum sagittis.Phasellus dapibus urna enim, at finibus erat rutrum eu.Morbi hendrerit justo eget urna condimentum rutrum.Fusce vehicula enim vitae ante fringilla, ac euismod miviverra. Etiam a rhoncus arcu.
  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec fringilla commodo mi ac malesuada. Sed in justo varius, tristique nunc id, rhoncus ex. Fusce condimentum euismod nisi, ac tincidunt tortor ultricies sed. Proin laoreet varius turpis, a malesuada lectus blandit sed. Nullam ut enim ut tellus pellentesque aliquam at vel metus.Sed bibendum orci nec nunc luctus, et varius quam vehicula.Nulla facilisi.
    ` },
    { title: 'Review', description: '' },
    { title: 'Resources', description: `References & Where to learn More

    Herbert Simon, The Sciences of the Artificial (3rd Edition), 1996:
https://monoskop.org/images/9/9c/Simon_Herbert_A_The_Sciences_of_the_Artificial_3rd_ed.pdf

d.school, An Introduction to Design Thinking PROCESS GUIDE, 2010:
https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/Introduction-to-design-thinking.pdf

Gerd Waloszek, Introduction to Design Thinking, 2012
https://experience.sap.com/skillup/introduction-to-design-thinking/
` , },
    { title: 'Submission', description: '' , }
  ];
  selectedReview: Review | null = this.reviews[0]; 

  openReview(review: Review): void {
    this.selectedReview = review;
  }
//   getrating(){
//     this.ratingcount++
// this.totalrating +=this.ratingcount?. value ||
// //console. log(this.ratingcontrol.value);

// this.Finalrating (this.totalrating/this.ratingcount) .toFixed(2)

 

//   }
}
