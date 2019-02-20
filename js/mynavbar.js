Vue.component('mynavbar', {
    template: `
    <div class="mynavbar container">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="index.html">Konga</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">COMPUTER AND ASSESSORIES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PHONES AND TABLETS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ELECTRONICS</a>
            </li>
           
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">MY CART</a>
            </li>
          </ul>

        </div>
      </nav>
</div>
    `,
    data: function() {
        return {

        }
    }
})