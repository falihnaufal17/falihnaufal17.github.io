let data = [
    {
        name: 'MOLADIN',
        image: '../images/Screenshot 2021-07-29 at 9.45 1 (1).png',
        url: 'https://moladin.com/'
    },
    {
        name: 'TOKO SULTAN',
        image: '../images/Screenshot 2021-07-29 at 9.45 1 (2).png',
        url: 'https://tokosultan.netlify.app/'
    },
    {
        name: 'BAZAR',
        image: '../images/Screenshot 2021-07-29 at 9.45 1.png',
        url: 'https://shopbazar.co/'
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