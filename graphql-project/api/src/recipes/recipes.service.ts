import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  create(createRecipeInput: CreateRecipeInput): Recipe {
    const recipe = new Recipe();
    recipe.exampleField = createRecipeInput.exampleField;

    return recipe;
  }

  findAll(): Recipe[] {
    const recipe1 = new Recipe();
    recipe1.exampleField = 1;

    const recipe2 = new Recipe();
    recipe2.exampleField = 2;

    const recipe3 = new Recipe();
    recipe3.exampleField = 3;

    return [recipe1, recipe2, recipe3];
  }

  findOne(id: number): Recipe {
    const recipe = new Recipe();
    recipe.exampleField = 1;

    return recipe;
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput): Recipe {
    const recipe = new Recipe();
    recipe.exampleField = updateRecipeInput.exampleField;

    return recipe;
  }

  remove(id: number): Recipe {
    const recipe = new Recipe();
    recipe.exampleField = 1;

    return recipe;
  }
}