const url = 'https://discord.com/channels/@me/1262688294429528106/1281648470704259143'; 

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });