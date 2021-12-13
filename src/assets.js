function importAll() {
    const path = require.context('./assets/svg', false, /\.(png|jpe?g|svg)$/);
    let images = {};
    path.keys().map((item) => { return images[item.replace('./', '')] = path(item).default });
    return images;
  }

export default importAll;  
