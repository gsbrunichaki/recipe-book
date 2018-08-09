import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pastel de Carne',
      'Um pastel de carne muito saboroso.',
      'https://xtudoreceitas.com/wp-content/uploads/Pastel-de-Carne-Temperado.jpeg'
    ),

    new Recipe(
      'Arroz com Camarão',
      'Um arroz muito bom, menos para os alérgicos.',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-com-camarao-747x482.jpg?x17678'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
