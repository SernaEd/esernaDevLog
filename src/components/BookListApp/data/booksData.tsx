import { BookProps } from "../interfaces/IBookProps"


import perro from "../../../assets/perro.jpg";

const firstBook: BookProps = {
    author: "Rebecca Serle",
    title: "In Five Years",
    url: "https://m.media-amazon.com/images/I/61l6GYwBwzL._AC_UY218_.jpg",
    id: 1
}

const secondBook: BookProps = {
    author: "Raquel D'Apice",
    title: "Welcome to the Club: 100 Parenting Milestones You Never Saw Coming",
    url: "https://m.media-amazon.com/images/I/51i8JNd+x+L._SY344_BO1,204,203,200_.jpg",
    id: 2
}

const thirdBook: BookProps = {
    id: 3,
    author: "Eduardo Serna",
    title: "Perro",
    url: perro
}

export const books = [
    firstBook, secondBook, thirdBook
]