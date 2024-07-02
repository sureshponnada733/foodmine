import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/serives/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
tags?:Tag[];
isActiveRoute:boolean = false;
constructor(foodService:FoodService, activateRouter:ActivatedRoute){
this.tags = foodService.getAllTags();
}

}
