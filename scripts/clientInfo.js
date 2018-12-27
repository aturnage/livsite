var money =  [
  {
    id:0,
    name:"Pusiness Professional Chauffeur Service",
    description:"Experience comfort and convenience on your way to your destination with Business Professional Chauffeur Service of Olivette, Missouri. Our experienced drivers offer a luxury sedan service for groups and individuals throughout St. Louis.",
    images: ['bpcs-logo.png']
  } ,
  {
    id:1,
    name:"Conagra",
    description:"Conagra Brands (NYSE: CAG), headquartered in Chicago, combines a rich heritage of making great food with a sharpened focus and entrepreneurial spirit. We’re transforming the way we operate to fulfill what consumers and customers want, in a smart, simple way. ",
    images: ['conagra-foods-logo.png'],
  },
  {
    id:2,
    name:"It's Your Birthday, Inc.",
    description:"While volunteering at a homeless shelter, the founder of It’s Your Birthday, Inc. (Rolanda Finch) noticed several children running around. She asked the Executive Director, ‘How do they celebrate their birthday?’ He explained because of lack of resources and funding, nothing is done. Because Rolanda loves to celebrate her personal birthday and remembers how special they were when she was a child (with her own funds), she decided to start celebrating the children’s birthdays. ",
    images: ['iybi-logo.gif'],
  },
    {
    id:3,
    name:"The Legendary Melvin Turnage Band",
    description:"The Melvin Turnage Band provides music lovers with their favorite; 60's Motown, Rhythm & Blues, Jazz, Soul, Funk and big Band sound. For over 30 years, the Melvin Turnage Band has perfromed concerts nationwide and has torued internationally in Europe, Middle East, Africa, Greenland, Central America, and the Caribbean Islands.",
    images: ['mtb-logo.png']
  },
    {
    id:4,
    name:"National Association of Spellman College - St. Louis Chapter",
    description:"The National Alumnae Association of Spelman College (NAASC) is the official organization that supports Spelman College, a historically black college for women, through financial gifts, student recruitment, sisterhood, community service, and recognition of Spelman women.",
    images: ['naasc-stl.png']
   },
   {
     id:5,
     name:"Prince Hall Collegiate Society",
     description:"The Prince Hall Collegiate Society is a extension of the M.W.P.H.G.L. of MO and serves to provide leadership opportunites, guidance, and mentorship for collegiate men.",
     images: ['PHCS-logo-web.png']
   },
   {
     id:6,
     name:"Royal Vagabonds Foundation",
     description:"The Royal Vagabonds, Inc. social club had its beginning in the early 1930s when a group of professional young men of color formed a social club. Their intent was to provide a higher form of social activities that were generally unavailable to men of color because of the limiting social mores of the times. The social club hosted an annual golf tournament to raise funds for its philanthropic endeavors for 59 years.",
     images: ['royal-vagabond-logo.png']
   },
   {
     id:7,
     name:"Savvy Coders",
     description:"At Savvy Coders, we believe in empowering people to take a bold step toward a better career. We believe that coding is the indispensable skill of the 21st century.",
     images: ['savvy-coders-logo.png']
   },
   {
     id:8,
     name:"Sarah Lee Foods",
     description:"An American consumer-goods company based in Downers Grove, Illinois. It had operations in more than 40 countries and sold its products in over 180 countries. Its international operations were headquartered in Utrecht, The Netherlands. Sara Lee is also the brand name of a number of frozen and packaged foods, often known for the long-running slogan 'Everybody doesn't like something, but nobody doesn't like Sara Lee,' often incorrectly reported as 'Nobody does it like Sara Lee.'",
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
                    <div class='image'>${pics.images.map(img => `<img src="/images/${img}">`)}</div>
                    <div class="clientTitle">${pics.name}</div>
                    <div class="clientDescrip">${pics.description}</div>
                    </div>`
})

// select()

// This line allows for the desciption to be added from the function
  // <div class="clientDescrip">${pics.description}</div>


//* github@tonail *//
