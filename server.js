const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3000
const app = express()
const dataProducts =  {
    others: [
        {
            "title": "Бебешко съкровище",
            "img": "/images/27.jpg",
            id: 1
        },
        {
            "title": "Закачалка от епоксидна смола и МДФ",
            "img": "/images/13.jpg",
            id: 2
        },
        {
            "title": "Поставка за бижута 'Сребърна русалка'",
            "img": "/images/A7203551.jpg",
            id: 3
        },
        {
            "title": "Поставка за бижута 'Златна русалка'",
            "img": "/images/A7203546.jpg",
            id: 4
        },
        {
            "title": "Поставка за бижута 'Лазурна русалка'",
            "img": "/images/A7203574.jpg",
            id: 5
        },
        {
            "title": "LUXURY GIFT BOX",
            "img": "/images/A7204240.jpg",
            id: 6
        },
    ],
    fruitBowls: [
        {
            "title": "Зелена феерия",
            "img": "/images/20.jpg",
            id: 1
        },
    ],
    tables: [
        {
            "title": "Малка кокетна маса 'Екзотика'",
            "img": "/images/11.jpg",
            id: 1
        },
        {
            "title": "Малка кокетна маса 'Лазурна орхидея'",
            "img": "/images/19.jpg",
            id: 2
        },
        {
            "title": "Черна малка кокетна помощна масичка",
            "img": "/images/16a.jpg",
            id: 3
        },
        {
            "title": "Златна малка кокетна помощна масичка",
            "img": "/images/17c.jpg",
            id: 4
        },
    ],
    pads: [
        {
            "title": "Гръцко Море",
            "img": "/images/1.jpg",
            id: 1
        },
        {
            "title": "Лазурно Море",
            "img": "/images/2a.png",
            id: 2
        },
        {
            "title": "Ангелски Криле",
            "img": "/images/4.jpg",
            id: 3
        },
        {
            "title": "Перо",
            "img": "/images/5.jpg",
            id: 4
        },
        {
            "title": "Злато",
            "img": "/images/A7204109.jpg",
            id: 5
        },
        {
            "title": "Бял седеф и черна перла",
            "img": "/images/9.jpg",
            id: 6
        },
        {
            "title": "Дубай",
            "img": "/images/15.jpg",
            id: 7
        },
        {
            "title": "Орхидея върху намачкан  тюркоазен 'сатен'",
            "img": "/images/18.jpg",
            id: 8
        },
        {
            "title": "Море от Любов",
            "img": "/images/21.jpg",
            id: 9
        },
        {
            "title": "Злато в рози",
            "img": "/images/22.jpg",
            id: 10
        },
        {
            "title": "Черна орхидея върху 'сатен'",
            "img": "/images/23.jpg",
            id: 11
        },
        {
            "title": "Блясък",
            "img": "/images/_SDS8342.jpg",
            id: 12
        },
        {
            "title": "Камък Изумруд",
            "img": "/images/A7204148.jpg",
            id: 13
        },
    ],
    salvers: [
        {
            "title": "Тюркоазена магия",
            "img": "/images/6.jpg",
            id: 1
        },
        {
            "title": "Поднос за торти и сладкиши",
            "img": "/images/14.jpg",
            id: 2
        },
        {
            "title": "Бяло и злато",
            "img": "/images/30.jpg",
            id: 3
        },
        {
            "title": "Златист блясък",
            "img": "/images/8.jpg",
            id: 4
        },
        {
            "title": "Море",
            "img": "/images/10a.jpg",
            id: 5
        },
        {
            "title": "Кристални рози",
            "img": "/images/24.jpg",
            id: 6
        },
        {
            "title": "Златен сет",
            "img": "/images/25.jpg",
            id: 7
        },
        {
            "title": "Черно, сиво и бяло",
            "img": "/images/26.jpg",
            id: 8
        },
        {
            "title": "Ориенталска магия",
            "img": "/images/29.jpg",
            id: 9
        },
        {
            "title": "Черна магия",
            "img": "/images/A7201368.png",
            id: 10
        },
        {
            "title": "Шоколадов поднос",
            "img": "/images/A7201559.png",
            id: 11
        },
        {
            "title": "Златен поднос",
            "img": "/images/A7209407.png",
            id: 12
        },
    ],
    clocks: [
        {
            "title": "Стенен часовник 'Магнетичен'",
            "img": "/images/12.jpg",
            id: 1
        },
        {
            "title": "Стенен часовник 'Абстрактен'",
            "img": "/images/12a.jpg",
            id: 2
        },
        {
            "title": "Стенен часовник 'Модерен чар'",
            "img": "/images/12b.jpg",
            id: 3
        },
        {
            "title": "Стенен часовник 'Златна магия'",
            "img": "/images/12c.jpg",
            id: 4
        },
        {
            "title": "Стенен часовник 'Чарът'",
            "img": "/images/12f.jpg",
            id: 5
        },
        {
            "title": "Стенен часовник 'Тюркоазена магия'",
            "img": "/images/A7207095-2.png",
            id: 6
        },
    ]
}

const urls = [
    '/', '/product-pads', '/product-salver', '/product-clocks',
    '/product-fruitBowls', '/product-tables', '/other-product',
    '/about-us', '/complete-order', '/cart'
]

urls.forEach((url) => {
    app.get(url, (req, res) => {
        const filePath = path.resolve(__dirname, './build', 'index.html')
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err) {
                return console.log(err)
            }
    
            data = data
                .replace(/__TITLE__/g, 'Онлайн магазин ShineCo.')
                .replace(/__OG:IMAGE__/g, 'https://www.shinecobg.com/images/ShineCO%20LOGO.png')
    
            res.send(data)
        })
    })
})

app.get('/product-info', (req, res) => {
    const searchParams = new URLSearchParams(req.url)
    const cardIdParam = searchParams.get('cardId')
    const productParam = searchParams.get('/product-info?Product')
    const finded = dataProducts[productParam].find((card) => card.id === Number(cardIdParam))
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            return console.log(err)
        }

        data = data
            .replace(/__TITLE__/g, `${finded?.title}`)
            .replace(/__OG:IMAGE__/g, `https://www.shinecobg.com${finded?.img}`)

        res.send(data)
    })
})

app.use(express.static(path.resolve(__dirname, './build')))

app.listen(PORT,  () => {
    console.log(`Server is listening on port ${PORT}`)
})
