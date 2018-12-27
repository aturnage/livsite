var money =  [
  {
    id:0,
    name:"Adbul Kaba Abdullah",
    description:"Dynamic branding brochure collateral for political campaign",
    images: ['abdul-pic.png']
  } ,
  {
    id:1,
    name:"Conagra",
    description:"Advertising collateral for fundraising event",
    images: ['conagra-foods-logo.png'],
  },
  {
    id:2,
    name:"It's Your Birthday, Inc.",
    description:"Advertising collateral for fundraising event",
    images: ['iybi-logo.gif'],
  },
    {
    id:3,
    name:"The Legendary Melvin Turnage Band",
    description:"Advertising collateral for fundraising event",
    images: ['mtb-logo.png']
  },
    {
    id:4,
    name:"National Association of Spellman College - St. Louis Chapter",
    description:"Advertising collateral for fundraising event",
    images: ['naasc-stl.png']
   },
   {
     id:5,
     name:"Prince Hall Collegiate Society",
     description:"Advertising collateral for fundraising event",
     images: ['PHCS-logo-web.png']
   },
   {
     id:6,
     name:"Royal Vagabonds Foundation",
     description:"Advertising collateral for fundraising event",
     images: ['royal-vagabond-logo.png']
   },
   {
     id:7,
     name:"Saavy Coders",
     description:"Advertising collateral for fundraising event",
     images: ['savvy-coders-logo.png']
   },
   {
     id:8,
     name:"Sarah Lee Foods",
     description:"Advertising collateral for fundraising event",
     images: ['sara-lee-logo.png']
   }
 ]
//   function select() {
// // This is an array of clients. Add to clients here!
// // You could also host this online and pull down as json later
//  var clients =  [
//    {
//      id:0,
//      name:"Adbul Kaba Abdullah",
//      description:"Dynamic branding brochure collateral for political campaign",
//      images: ["abdul-pic.png", "abdul-pic.png", "abdul-pic.png",]
//    } ,
//    {
//      id:1,
//      name:"National Association of Spellman College",
//      description:"Advertising collateral for fundraising event",
//      images: ['game-night-flyer.jpeg.jpg', 'game-night-flyer.jpeg.jpg']
//    },
//      {
//      id:2,
//      name:"Association of Spellman",
//      description:"Advertising collateral for fundraising event",
//      images: []
//    },
//      {
//      id:3,
//      name:"Nationwide",
//      description:"Advertising collateral for fundraising event",
//      images: []
//     },
//     {
//       id:4,
//       name:"Spellman College",
//       description:"Advertising collateral for fundraising event",
//       images: []
//     }
//   ]
//   // fuction to be called when item is selected
//   const onChange = (e) => {
//     const client = clients.find(client => client.id === e.target.value*1)
//     const display = document.getElementById('client-display')
//     // sets the display to the selected client
//     // loops through each images url maps to <img> tag for display
//     // style html as necessary
//     display.innerHTML = `<div>
//        <div>${client.name}</div>
//        <div>${client.description}</div>
//        <div class='image'>
//         ${client.images.map(img=> `<img src="/images/${img}">`)}
//        </div>
//       </div>`
//   }
//
//   // grabs selection div from the dom
//   const selectWrapper = document.getElementById('client-select-wrapper')
//   let select = `<select id='client-select'></select>`
//
//   selectWrapper.innerHTML = select
//   select = document.getElementById('client-select')
//   select.addEventListener("change", onChange)
//   // map through clients array to generate the selct options for each client
//   select.innerHTML = `${clients.map(client => `<option
//         class='select-option'
//         key=${client.id}
//         value=${client.id}
//       >
//          ${client.name}
//        </option>`
//      )}`
// }

// loops through each client and displays client information
var post = document.querySelector(".pics")
money.forEach(function (pics){
  post.innerHTML += `<div class="clientFormat">
                    <div class="clientTitle">${pics.name}</div>
                    <div class="clientDescrip">${pics.description}</div>
                    <div class='image'>${pics.images.map(img => `<img src="/images/${img}">`)}</div>
                    </div>`
})
// select()





//* github@tonail *//
