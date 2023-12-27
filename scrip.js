class figure {
    constructor(name, a, a2, b, b2) {
        this.name = name;
        this.a = a;
        this.a2 = a2
        this.b = b;
        this.b2 = b2;
    }
}
  class Kyb extends figure {
    showFigureKyb() {
        alert(`${this.name}, левая сторона ровна - ${this.a}, правая сторона ровна - ${this.a2}, верхняя сторона ровна - ${this.b}, нижняя сторона ровна - ${this.b2}, площать ровна - ${this.a*this.b}, периметр равен - ${this.a*2 + this.b*2}`)
    }
  }
  class Priamoygolnik extends figure {
    showFigurePriamoygolnik() {
        alert(`${this.name}, левая сторона ровна - ${this.a}, правая сторона ровна - ${this.a2}, верхняя сторона ровна - ${this.b}, нижняя сторона ровна - ${this.b2}, площать ровна - ${this.a*this.b}, периметр равен - ${this.a*2 + this.b*2}`)
    }
  }
  class Triygolnik extends figure {
    constructor (name, a, a2, b, h) {
      super(name, a, a2 ,b);
      this.h = h;
    }
    showFigureTriygolnik() {
      alert(`${this.name}, левая сторона ровна - ${this.a}, правая сторона ровна - ${this.a2}, основание ровно - ${this.b}, высота ровна - ${this.h}, площать ровна - ${(this.b*this.h)*0.5}, периметр равен - ${this.a*1 + this.a2*1 + this.b*1}`)
    }
  }

  let a = new Kyb ("куб","10","10","10","10")
  a.showFigureKyb()

  let b = new Priamoygolnik ("прямоугольник","10","10","20","20")
  b.showFigurePriamoygolnik()

  let c = new Triygolnik("триугольник","15","15","10","12")
  c.showFigureTriygolnik()








// showFigure(){
//     alert(`${this.name}, левая сторона ровна - ${this.a}, правая сторона ровна - ${this.a2}, верхняя сторона ровна - ${this.b}, нижняя сторона ровна - ${this.b2}, площать ровна - ${this.a*this.b}, периметр равен -${this.a*2 + this.b*2}`)
// }