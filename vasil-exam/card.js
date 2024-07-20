let iteams = [
    {
        title: "iPad Pro 11″ (M4 ,256GB): Ultra Retina XDR Display",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: "$ 1172.61",
        image: "images/amazon/1.jpg",
        button: `<a href="" class="btn btn-primary">Add to Card</a>`,
    },
    {
        title: "Boult Audio UFO Truly Wireless",
        description: "Ear Earbuds with 48H Playtime, Built-in App Support, 45ms Low Latency Gaming, 4 Mics ENC, Breathing LEDs.",
        price: "$ 17.96",
        image: "images/amazon/2.jpg",
        button: `<a href="" class="btn btn-primary">Add to Card</a>`,
    },
    {
        title: "iPhone 15 Pro Max (256 GB) - Black Titanium",
        description: "iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back.",
        price: "$ 1798.33",
        image: "images/amazon/3.jpg",
        button: `<a href="" class="btn btn-primary">Add to Card</a>`,
    },
    {
        title: "Fire-Boltt Talk 2 Pro Ultra",
        description: "1.39″ Round Display Stainless Steel Luxury Smart Watch, Bluetooth Calling & 360 Health Monitoring, 123 Sports Modes, Inbuilt Voice Assistant",
        price: "$ 16.76",
        image: "images/amazon/4.jpg",
        button: `<a href="" class="btn btn-primary">Add to Card</a>`,
    },
]

iteams.forEach((val , index) => {
    let card_iteams = document.getElementById("additeams");
    let div = document.createElement("div");

    let title = document.createElement("h5");
    let disc = document.createElement("p");
    let price = document.createElement("price");
    let img = document.createElement("img");
    let btn = document.createElement("button");

    div.classList = "card-body shadow p-3 mb-5 bg-white rounded";

    title.innerHTML = val.title;
    title.classList = "card-title"; 

    disc.innerHTML = val.description;
    disc.classList = "card-text";

    price.innerHTML = val.price;
    price.classList = "card-price";

    img.src = val.image;
    img.classList = "card-img-top";

    btn.innerHTML = "Add to Cart";
    btn.classList = "btn btn-primary add-to-cart";
    btn.setAttribute("data-index", index);

    div.append(img);
    div.append(title);
    div.append(disc);
    div.append(price);
    div.append(btn);

    card_iteams.append(div);
})

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        let index = this.getAttribute("data-index");
        localStorage.setItem("cartItem", JSON.stringify(iteams[index]));
        window.location.href = "cart.html";
    });
});