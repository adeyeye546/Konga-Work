Vue.component('featured', {
    template: `
    <div class="container featured-item">
                <div class="row">
                    <div class="left col">
                        <img src="img/5.JPG" alt="">
                    </div>
                    <div class="right col">
                        <p class="title">
                            Samsung <br> Galaxy S6
                        </p>
                        <p class="origin-price">
                            #90,000
                        </p>
                        <p class="disc-price">
                            #70,000
                        </p>
                        <p>
                            <a href="#" class="btn btn-primary">
                                BUY NOW
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