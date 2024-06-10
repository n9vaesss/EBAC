
class Animal {
    constructor(nome, idade) {
      if (new.target === Animal) {
        throw new Error("Animal não pode ser instanciado diretamente.");
      }
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      throw new Error("Método abstrato deve ser implementado nas subclasses.");
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    emitirSom() {
      return "Au au!";
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    emitirSom() {
      return "Miau!";
    }
  }

  const cachorro1 = new Cachorro("Rex", 5, "Labrador");
  const gato1 = new Gato("Whiskers", 3, "Cinza");
  const cachorro2 = new Cachorro("Bob", 2, "Vira-lata");
  
  console.log(cachorro1.emitirSom());
  console.log(gato1.emitirSom()); 
  console.log(cachorro2.emitirSom());
  