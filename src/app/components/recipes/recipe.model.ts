export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;

  // constructor can be instantiated with new Keyword()
  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}

// This is a blueprint for a recipe object. It is a TypeScript class with a constructor that takes three arguments and assigns them to properties of the same name. The constructor is a special method that is called when a new instance of the class is created. The class has three properties: name, description, and imagePath. The class is exported so that it can be imported and used in other files.
