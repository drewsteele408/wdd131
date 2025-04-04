const container = document.querySelector('.show-list');

if (container) {
  const shows = [
      {
          id: 1, 
          date: 'April 5, 2025', 
          venue: 'Venue 101', 
          city: 'Rexburg',
          state: 'ID',  
          time: 'Doors: 7:00pm | Show: 8:00pm'
      }, 
      {
          id: 2, 
          date: 'April 12, 2025', 
          venue: 'The Depot', 
          city: 'Salt Lake City', 
          state: 'UT', 
          time: 'Doors: 7:00pm | Show: 8:00pm'
      },
      {
          id: 3, 
          date: 'April 30, 2025', 
          venue: 'Red Rocks Amphitheatre', 
          city: 'Morrison',
          state: 'CO', 
          time: 'Doors: 7:00pm | Show: 8:00pm'
      }
  ];

  shows.forEach(function(item){
      let show = document.createElement('article');
      show.setAttribute('class', 'show');

      let html = `
          <div class="show-content">
              <p>${item.date}</p>
              <p>${item.venue}</p>
              <p>${item.city}, ${item.state}</p>
              <p>${item.time}</p>
          </div>
      `;

      show.innerHTML = html;
      container.appendChild(show);
  });
}



const modal = document.getElementById('member-modal');

if (modal) {
  const hotspots = document.querySelectorAll('.hotspot');
  const closeBtn = document.querySelector('.close');
  const nameEl = document.getElementById('member-name');
  const infoEl = document.getElementById('member-info');

  const memberData = {
      drew: {
          name: 'Drew Steele', 
          info: "Sleeps with his guitar. Once rewired his pedalboard using chewing gum and sheer spite. Hasn’t spoken a full sentence since 2023, but somehow always finds the perfect chord to end a song. Eats string cheese like it's a coping mechanism. His amp is haunted, and we’ve all just accepted that."
      }, 
      reed: {
          name: 'Reed Cannon', 
          info: "Doesn't believe in click tracks or speed limits. Packs more cymbals than clothes. One time tried to barter merch for tacos — it worked. Keeps a cowbell “just in case.” Lives for the fill, dies by the fill. May or may not be banned from three gas stations across state lines."
      }, 
      logan: {
          name: 'Logan Cannon', 
          info: "Fronts the band, fronts the chaos. Writes lyrics on receipts, napkins, and occasionally other people's arms. Somehow balances emotional devastation with stage banter that could roast you into another dimension. Runs on iced coffee, questionable decisions, and pure stage presence."
      },
      chance: {
          name: 'Chance Curtis', 
          info: "Vanished for a week, came back with a new tattoo and a fuzz pedal that makes whale noises. Speaks in cryptic one-liners. Once played an entire set facing away from the crowd “for the aesthetic.” Carries around a notebook labeled “songs to cry in parking lots to.” No one has ever seen him blink."
      }
  };

  hotspots.forEach(spot => {
      spot.addEventListener('click', () => {
          const memberKey = spot.getAttribute('data-member');
          const member = memberData[memberKey];

          if (member) {
              nameEl.textContent = member.name;
              infoEl.textContent = member.info;
              modal.style.display = 'flex';
          }
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
}
