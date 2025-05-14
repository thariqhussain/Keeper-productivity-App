import bmwCar from './assets/list_images/bmw.jpeg'
import benzCar from './assets/list_images/benz.jpeg'
import audiCar from './assets/list_images/audi.jpeg'

import exhausted from './assets/exhausted.jpeg'
import cool from './assets/cool.jpeg'
import smile from './assets/smile.jpeg'

let notes = [
    {
        id: 1,
        title: 'Customer Handling',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: 2,
        title: 'Insta Posts & Reels',
        description : 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 3,
        title: 'Accounts Billing',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 4,
        title: 'Inventory',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: 5,
        title: 'Monthly Accounts Billing',
        description : 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 6,
        title: 'Youtube Shorts',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
]

let carDetails = [
    {
        title: 'BMW',
        photo: bmwCar,
        number: 'M5',
        mail: 'www.bmw.com' 
    },
    {
        title: 'AUDI',
        photo: audiCar,
        number: 'Q5',
        mail: 'www.audi.com' 
    },
    {
        title: 'MERCEDES BENZ',
        photo: benzCar,
        number: 'GLC300',
        mail: 'www.mercedes.com' 
    },
]

export let emojiDetails = [
    {
        photo: smile,
        title: 'Happy smile',
        description: 'A person with happy smile will be the person who keeps other person happy'
    },
    {
        photo: exhausted,
        title: 'Exhausted',
        description: 'A person who is exhausted will can retain their strength by cold plunge'
    },
    {
        photo: cool,
        title: 'Cool',
        description: 'A person who is cool at any situation can tackle any situation easily'
    }
]

export default notes;
