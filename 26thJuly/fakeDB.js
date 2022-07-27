var pets = [
    {
        name: 'Tobi',
        id: 0
    },
    {
        name: 'Loki',
        id: 1
    },
    {
        name: 'Jane',
        id: 2
    },
    {
        name: 'Tom',
        id:3
    },
    {
        name: 'Angela',
        id: 4
    }
]

var users = [
    {
        name: 'Sebastian',
        age: 15,
        pets: [
            pets[0], pets[1], pets[2], pets[3]
        ]
    },
    {
        name: 'Jacob',
        age: 18,
        pets: [
            pets[4]
        ]
    },
    {
        name: 'Aden',
        age: 17,
        pets: []
    }
]

module.exports = {
    pets,
    users
}