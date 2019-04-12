class Shape {
  area: number;
  color: string;
  constructor ( name: string, width: number, height: number ) {
      this.area = width * height;
      this.color = "pink";
  };

  shoutout() {
      return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
  }
}

var square = new Shape("square", 30, 30);
// console.log( square.shoutout() );
// console.log( 'Area of Shape: ' + square.area );
// console.log( 'Color of Shape: ' + square.color );

// console.log('====================================');
// console.log(console.log(process.env.NODE_ENV));
// console.log('====================================');

export default {
  a: square.area,
  B: square.color,
}