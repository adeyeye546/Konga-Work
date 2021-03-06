Vue.component('related', {
    template: `
    <div class="container new-arrival"> 
                <div class="row">
                    <div class="col">
                        <h5 class="title">{{ title }}</h5>
                    </div>
                </div>
                <div class="row">

                    <div v-for="product in productitem" class="item col-3">
                        <a href="product.html"><img v-bind:src="product.imgpath" alt=""></a>
                        <p class="product-name">{{product.name}}</p>
                        <p class="price">{{product.price}}</p>

                    </div>
                   
                    </div>
            </div>
    `,
    data: function() {
        return {
            title: 'RECOMMENDED FOR YOU',
            productitem: [
                {
                    name: 'Lazer Printer',
                    price: '#12,000',
                    imgpath: 'img/a.jpg'
                },
                {
                    name: 'Home tool',
                    price: '#12,000',
                    imgpath: 'img/d.jpg'
                },
                {
                    name: 'Smart Apple Watch',
                    price: '#12,000',
                    imgpath: 'img/e.jpg'
                },
                {
                    name: 'Gold Apple Watch',
                    price: '#12,000',
                    imgpath: 'img/f.jpg'
                }
            
            ]
        }
    }
})