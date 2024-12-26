import food from "./images/food.jpg";


function constructMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu")

    const p = document.createElement("p");
    p.innerText = "our menu"


    const dishes = document.createElement("div");
    dishes.classList.add("dishes")

    dishes.appendChild(p);
    dishes.appendChild(dish(food, "noodles"));
    dishes.appendChild(dish(food, "noodles"));
    dishes.appendChild(dish(food, "noodles"));
    dishes.appendChild(dish(food, "noodles"));

    menu.appendChild(p);
    menu.appendChild(dishes);
    return menu;
}


function dish(img_src, text){
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const img = document.createElement('img');
    img.classList.add("food_image");
    img.src = img_src;

    const p  = document.createElement("p");
    p.innerText = text;

    dish.appendChild(img);
    dish.appendChild(p)

    return dish;

}

export default constructMenu();