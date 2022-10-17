export class Cocktail {
  constructor(CocktailData) {
    this.data = CocktailData.fetch(url);
    this.name = CocktailData.strDrink;
    this.id = CocktailData.idDrink;
  }
}