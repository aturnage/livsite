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
},
{
  id: 7,
  images:['savvycoders-demo-day.png']
},
{
  id: 8,
  images:['SkatePartyFlyer(Final).jpg']
},
{
  id: 9,
  images:['ThrowbackFlyerFinal.jpg']
},
{
  id: 10,
  images:['WebsiteLaunchFlyer.jpg']
},
{
  id: 11,
  images:['ImJustJokingFlyer.jpg']
},
{
  id: 12,
  images:['Mailer(front).jpg']
},
{
  id: 13,
  images:['MasonInvitation.jpg']
},
{
  id: 14,
  images:['TriviaNight(6.3.17).png']
},
{
  id: 15,
  images:['eventbrite-image.jpg']
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
