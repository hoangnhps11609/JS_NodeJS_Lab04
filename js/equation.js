const equation = new Object();

equation.a = Number(prompt("Nhập a: "));
equation.b = Number(prompt("Nhập b: "));
equation.c = Number(prompt("Nhập c: "));

equation.giai = function () {
  if (this.a == 0) {
    alert("Phương trình có nghiệm: " + -this.c/this.b);
  } else {
    const delta = this.b**2 - 4 * this.a * this.c;
    if (delta < 0) {
      alert("Phương trình vô nghiệm");
    } else if (delta == 0) {
      const x = -this.b / (2 * this.a);
      alert("Phương trình có nghiệm kép: " + x);
    } else {
      const x1 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      const x2 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      alert("Phương trình có nghiệm phân biệt: " + x1 + ", " + x2);
    }
  }
};

equation.giai();
