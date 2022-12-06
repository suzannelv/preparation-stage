class Tricot {
      constructor( title, image, makeDuration )
  
      {this.title = title;
      this.image = image;
      this.makeDuration = makeDuration; 
      }
    }

    const tricots=[
      new Tricot ("Chien Loulou", "chien.jpg", "7h"),
      new Tricot ("Petite couple", "couple.jpg", "6h"),
      new Tricot ("Tony-Tony Chopper", "Chopper.jpg", "10h"), 
      new Tricot ("Porcinet", "porcinet.jpg", "4h"),
      new Tricot ("Moutons", "mouton.jpg", "3h"),
      new Tricot ("Winnie", "winnie.jpg","4h")
  ]


let tricotAdd = "";

for (let knitting of tricots ) {
tricotAdd += `
<div class="col mt-5">
<div class="card shadow-sm">
<img src="./images/tricot/${knitting.image}" alt="image${knitting.image}" class="img-fluid rounded mx-auto d-block photo-tricot">
<div class="card-body">
  <button class="card-text border-0 rounded-pill text-light btn-knitting fw-semibold">${knitting.title}</button>
    <p class="text-center mt-4">Temps de fabrication: 7h</p>
  </div>
</div>
</div>
 `

}
document.getElementById("knitting").innerHTML=tricotAdd 

