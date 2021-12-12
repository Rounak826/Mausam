function importAll() {
    const path = require.context('./assets/svg', false, /\.(png|jpe?g|svg)$/);
    let images = {};
    path.keys().map((item) => { return images[item.replace('./', '')] = path(item).default });
    console.log(images['b_4_cloudy_night.svg']);
    return images;
  }

export default importAll;  
