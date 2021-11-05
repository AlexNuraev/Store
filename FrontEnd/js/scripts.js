
let brands = [];

const getBrands = async () => {
    try {
        const data = await
            axios.get('http://127.0.0.1:8000/brands')
        brands = data.data;
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

getBrands();
const init = () => {
    const $brandItems = document.getElementById('product-items');
    const $item_row = document.createElement('div');
    $item_row.className = 'row';
    const items = brands.map(product => {
        return ($item_row.innerHTML += `
          <div class="col-md-4">
          <figure class="card card-product">
            <div class="card-img-top">
              <img
                src=${brand?.image}
              />
              <a class="btn-overlay" href="#"
                ><i class="fa fa-search-plus"></i> Quick view</a
              >
            </div>
            <figcaption class="card-body">
              <div class="fix-height">
                <a class="title">${brand?.name}</a>
                <div class="price-wrap mt-2">
                  <span class="price">$ ${brand?.price}</span>
                </div>
              </div>
            </figcaption>
          </figu
          
          `);
    });
    $brandItems?.append($item_row);
};

window.addEventListener('load', () => {
    init();
});
