import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
   more=data
   ngOninit():void{
    this.more=data;
   }
}
