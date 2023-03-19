import { Component } from '@angular/core';
// import { data } from 'src/assets/data';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  constructor( private router: Router, private hero: HeroService){}
  //  more=data
  //  ngOninit():void{
   more= this.hero.giveData();

    learnmore(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/singlepg1'])
    }
   }

