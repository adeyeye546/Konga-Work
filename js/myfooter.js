Vue.component('myfooter', {
    template: `
    <div class="container footer">
    <div class="row">
        <div class="col">
            <p>
                Copyright ©{{ new Date().getFullYear() }}. All right reserved by Gbenga Adeyeye
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