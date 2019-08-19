slides = [
    {
        img: "img/slide1.jpg",
        title: "Test1",
        content: "lorem",
        slideFrom: "top",
        contentFrom: "bottom",
        contentDelay: 1
    },
    {
        img: "img/slide2.jpg",
        slideFrom: "left",
    },
    {
        img: "img/slide3.jpeg",
        title: "Test3",
        slideFrom: "right",
        contentFrom: "bottom"
    },
    {
        img: "img/slide4.jpg",
        content: "lorem lorem lorem lorem",
        slideFrom: "bottom",
        contentFrom: "right",
        contentDelay: 2
    }
]

createSliderek(".box", slides)