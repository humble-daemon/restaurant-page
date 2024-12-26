function constructAbout(){
    const about = document.createElement("div");
    about.classList.add("about")

    const p = document.createElement("p");
    p.innerText = "about us";

    const p2 = document.createElement("p");
    p2.innerText ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, quas dolorum perspiciatis similique explicabo cupiditate at. Alias eius impedit quam iure repellat veritatis nihil dolores ipsa eveniet exercitationem minima voluptas provident maxime, nulla quis natus eligendi dicta. Perspiciatis dolorem, praesentium quam vitae nisi unde ratione ex? Porro laudantium fugit adipisci obcaecati. Id dolorum nihil atque aliquid praesentium autem sunt deleniti sapiente suscipit fuga, sequi quisquam, minus inventore. Aspernatur, laborum atque. Animi praesentium accusamus reprehenderit consectetur nemo commodi repellendus quam voluptatum nesciunt ducimus. Laborum deleniti possimus natus ullam et ex. Enim odit sint inventore dolores quidem laborum blanditiis delectus minima repudiandae?";
    
    

    about.appendChild(p);
    about.appendChild(p2);



    return about;
}

export default constructAbout();