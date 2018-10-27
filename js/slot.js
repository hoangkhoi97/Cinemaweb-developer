function onSeatClick(btn) {
    var a = document.getElementsByClassName("on");

    if (document.getElementById(btn.id).classList.contains('on'))
    {
        btn.classList.remove("on");
        btn.classList.add("off");
        document.getElementById("slot").innerHTML = " ";

    }
    else {

        if(a.length > 0) {
            for(let i = 0; i < a.length; ++i){
                a[i].classList.remove("on");
            }
        }

        btn.classList.remove("off");
        btn.classList.add("on");
        document.getElementById("slot").innerHTML = btn.id;

    }

}