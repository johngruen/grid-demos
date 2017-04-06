$(() => {
  
  $.get('https://unsplash.it/list', (data) => {
    const images = data.map((item, i) => {
      if (i > 50) {
        return `
          <div class="grid__item" style="background-image:url(https://unsplash.it/200/300?image=${item.id})"></div>`
      }
    })
    $('#grid-example-4 .gallery').append(images);
  });

});
