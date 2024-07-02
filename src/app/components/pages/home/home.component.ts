import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/serives/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoutes: ActivatedRoute) {
    activatedRoutes.params.subscribe((params) => {
        if (params.searchTerm){
          this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
          

    }else{
      console.log('dddd')
       this.foods = this.foodService.getAll();}
       
      
    })
  }
 

  

}
