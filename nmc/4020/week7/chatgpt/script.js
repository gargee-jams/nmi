const apiUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=co&api_key=jHiO1R5Cxohjya05TtDkkoNDf40W3c5NmHuFlDpd';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const parks = data.data;
    const parksList = document.getElementById('parks-list');
    const activitiesList = document.getElementById('activities-list');
    parks.forEach(park => {
      const parkItem = document.createElement('li');
      parkItem.innerHTML = `<h2>${park.fullName}</h2><p>${park.description}${park.activities}</p><p><a href=${park.images[0].url}><img src=${park.images[0].url}></a>`;
      parksList.appendChild(parkItem);
    });
  })
  
  .catch(error => console.log(error));
