let data = [
    {
        name: 'MOLADIN',
        image: '../images/moladindotcom.png',
        url: 'https://moladin.com/'
    },
    {
        name: 'TOKO SULTAN',
        image: '../images/Screenshot 2021-07-29 at 9.45 1 (2).png',
        url: 'https://github.com/falihnaufal17/toko-sultan-web'
    },
    {
        name: 'BAZAR',
        image: '../images/Screenshot 2021-07-29 at 9.45 1.png',
        url: 'https://shopbazar.co/'
    },
    {
        name: 'PulsaDong Seller',
        image: '../images/pulsadong-seller.jpeg',
        url: 'https://play.google.com/store/apps/details?id=com.pulsadongmobile'
    }
]
let elementList = ''

data.map((item) => {
    elementList += `
        <div class="col-6 col-md-4">
            <a href=${item.url} class="fn-card" target="__blank">
                <div class="detail">
                    <div></div>
                    <div>${item.name}</div>
                    <div></div>
                </div>
                <img src="${item.image}">
            </a>
        </div>
    `
})

document.getElementById('portofolio-lists').innerHTML = elementList