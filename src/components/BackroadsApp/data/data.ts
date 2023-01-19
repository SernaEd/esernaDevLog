import tourImg1 from '../images/tour-1.jpeg';
import tourImg2 from '../images/tour-2.jpeg';
import tourImg3 from '../images/tour-3.jpeg';
import tourImg4 from '../images/tour-4.jpeg';

export const pageLinks = [
    {id: 1, href: '#home', text: ' home'},
    {id: 2, href: '#about', text: ' about'},
    {id: 3, href: '#services', text: ' services'},
    {id: 4, href: '#tours', text: ' tours'},
]

export const socialLinks = [
    {id: 1, href: 'https://www.facebook.com', icon: "fab fa-facebook"},
    {id: 2, href: 'https://www.twitter.com', icon: "fab fa-twitter"},
    {id: 3, href: 'https://www.squarespace.com', icon: "fab fa-squarespace"},
]

export const services = [
    {id: 1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
    {
        id: 1,
        src: tourImg1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'china',
        period: 6,
        price: 2100,
    },
    {
        id: 2,
        src: tourImg2,
        date: 'october 1th, 2020',
        title: 'best of java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'indonesia',
        period: 11,
        price: 1400,
    },
    {
        id: 3,
        src: tourImg3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'hong kong',
        period: 8,
        price: 5000,
    },
    {
        id: 4,
        src: tourImg4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'kenya',
        period: 20,
        price: 3300,
    }
]