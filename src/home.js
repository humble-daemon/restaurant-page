function constructHome(){
    const home = document.createElement("div");
    home.classList.add("home")

    const p = document.createElement("p");
    p.innerText = "Welcome to our restaurant! Get ready to experience the flavors.";

    const p2 = document.createElement("p");
    p2.innerText = "We are awesome. Just awesome.";

    home.appendChild(p);
    home.appendChild(p2);

    return home;
}

export default constructHome();