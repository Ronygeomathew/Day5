 import { Component } from '@angular/core';
 import { HeroService } from 'src/app/hero.service';

 @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
 })
 export class HomeComponent {
  constructor(private hero: HeroService) { }
  todo: any
  ngOnInit() {
     this.hero.getdata().subscribe(data => {
       this.todo = data;
     })
     console.log(this.todo)
   }
   //update
   updateitem(id: any) {

  }
   deleteitem(id: any) {
    this.todo = this.todo.filter((t: any) => t.id != id);
  }
  
 
  }
  
  
