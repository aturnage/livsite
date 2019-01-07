var printImages = [
  {
    id: 0,
    images:['abdul-pic.png']
},
{
  id: 1,
  images:['AlbumCover(Final).png']
},
{
  id: 2,
  images:['ArticleLayout2.png']
},
{
  id: 3,
  images:['BlackAlumniCHS98.jpg']
},
{
  id: 4,
  images:['BlackMardiGrasFlyer-Glow.jpg']
},
{
  id: 5,
  images:['bpcs-logo.png']
},
{
  id: 6,
  images:['BrandyCruesoeLogo(combine).png']
}
]
// function shine(){
  var printer = document.querySelector(".print")
  printImages.forEach(function (pics){
    printer.innerHTML += `<div class="clientFormat">
    <div class='image'>${pics.images.map(img => `<img src="/printImages/${img}">`)}</div>
    </div>
    `
  })
