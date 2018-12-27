var printImages = [
  {
    images:['abdul-pic.png', 'AlbumCover(Final).png', 'ArticleLayout2.png', 'BlackAlumniCHS98.jpg', 'BlackMardiGrasFlyer-Glow.jpg', 'bpcs-logo.png', 'BrandyCruesoeLogo(combine).png']
  }
]
// function shine(){
  var printer = document.querySelector(".print")
  printImages.forEach(function (pics){
    printer.innerHTML += `<div class="clientFormat">
    <div class='image'>${pics.images.map(img => `<img src="/printImages/${img}">`)}</div>
    </div>`
  })
// }
// shine();
