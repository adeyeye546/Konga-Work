Vue.component('detail', {
    template: `
    <div class="container featured-item">
                <div class="row">
                    <div class="left col">
                        <img src="img/product-detail-pic.JPG" alt="">
                    </div>
                    <div class="right col">
                        <p class="title">
                            Gold Apple <br> Watch
                        </p>
                        <p class="origin-price">
                            #100,000
                        </p>
                        <p class="disc-price">
                            #90,000
                        </p>
                        <p>
                            <a href="#" class="btn btn-primary">
                                ADD TO CART
                            </a>
                        </p>
                    </div>
                </div>
            </div>
    `,
    data: function() {
        return {

        }
    }
})