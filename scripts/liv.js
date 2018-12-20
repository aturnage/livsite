function companyDescrip(){
  // Grabs the selector in html
  var about = document.querySelector(".livDescrip")
  // Enters in to in HTML
  about.innerHTML = `<div>Liv is a full-service business development consulting firm promoting business management and analysis services to create optimal opportunities and growth. Liv seeks to support businesses through strategic planning and effective communications to develop dynamic brands competing in their perspective industries. Our goal is to build on-going business relationships and support systems to ensure the success of all businesses.
  Liv has over 15+ years of experience of successful strategic planning and implementation gaining effective results in Business Development, Communications, and Project Management for businesses in the start-up, small, and corporate capacity.</div>`
}

function poemLyrics() {
  // Grabs the selector in html
  var poem = document.querySelector(".livPoem")
  // Enters in to in HTML
  poem.innerHTML = `<div>Dreams give us the <span class="lyrics">freedom</span> to believe and acheive the impossible <br>
                    As we grow <span class="lyrics">together</span> we are becoming more and more unstoppable <br>
                    Dreams are the lilfe blood of destiny<br>
                    We are fearless innovators, reality creators<br>
                    Our inspirations manifest into destinations<br>
                    Our love and <span class="lyrics">commitment</span> is moving nations forward<br>
                    Givng birth to a <span class="lyrics">global</span> perpsective for us to live as one <br>
                    Motivating the <span class="lyrics">creative</span> thoughts of our daughters and sons<br>
                    As we share the <span class="lyrics">energy</span> from out glowing SUN<br>
                    We've been traveling for a long time but we know the journey has just begun<br>
                    No matter the struggles we weill persist to LIV not merely exist<br>
                    Life Is Valuable don't waist a minute take a second and emerge yourself in it...<br>
                    <span class="lyrics">LIV!</span><br>
                    </div>`
}

// function gridMouseAction() {
//   var over = document.querySelector(".serviceSelector")
//   over.addEventListener("mouseover", mouseOver);
//   over.addEventListener("mouseout", mouseOff);
//
//   function mouseOver() {
//     over.style.backgroundColor = "#ffffff";
//     over.innerHTML = `<div class="tryWord">Hello</div>`;
//   }
//   function mouseOff() {
//     over.style.backgroundImage = "url('./images/adbusl-pic.png')";
//   }
// }
// gridMouseAction();
poemLyrics()
companyDescrip()
