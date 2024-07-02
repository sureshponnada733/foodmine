import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getAll(): Food[] {
    return sample_foods
  }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id == foodId) ?? new Food()
  }
  getAllTags(): Tag[] {
  return sample_tags;
  }
  getAllFoodsByTag(tag:string){
    return tag ==='All'?
    this.getAll():
    this.getAll().filter(Food=>Food.tags?.some(t=>t.toLowerCase().includes(tag.toLowerCase())))
  }

}

