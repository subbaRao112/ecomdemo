var slides = document.getElementsByClassName('slide');
var leftchv = document.getElementById('leftch');
var rightchv = document.getElementById('rightch');
let visible = false;


/* nav menu */

var bread = document.getElementById("breadcrumb");
bread.addEventListener("touchstart",openNav,false);
bread.addEventListener("click",openNav,false);



function openNav() {
    if(!visible){
        visible = true;
        bread.style.transform = "translatex(250px)";
        document.getElementById("accordian").style.WebkitTransition = 'all 0.5s';
        document.getElementById("accordian").style.transform = "translatex(250px)";
        document.getElementById("main").style.WebkitTransition = 'all 0.5s';
        document.getElementById("main").style.transform  = "translatex(250px)";
    }else{
        visible = false;
        bread.style.transform = "translatex(0)";
        document.getElementById("accordian").style.WebkitTransition = 'all 0.5s';
        document.getElementById("accordian").style.transform ="translatex(0)";
        document.getElementById("main").style.WebkitTransition = 'all 0.5s';
        document.getElementById("main").style.transform  = "translatex(0)";
    }
   
}










        var accoritem = document.getElementsByClassName("accoritem");
        for(s of accoritem){
            s.addEventListener("touchstart",handleclick,false);
            s.addEventListener("click",handleclick,false);
        }


        function handleclick(event){
            event.preventDefault();
            event.target.parentElement.classList.toggle("active");
            var panel = this.nextElementSibling;
            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            }else{
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }


        //siema

        const mySiema = new Siema({
            duration: 500,
            loop: true,
           
           
        });
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        prev.addEventListener('click', () => mySiema.prev());
        next.addEventListener('click', () => mySiema.next());

        //setInterval(() => mySiema.next(), 2000);


        [].forEach.call(document.querySelectorAll('.imagesledger'), function (el,i) {
            console.log(i);
            var slider = tns({
                container:el,
                items: 3,
                loop:true,
                gutter:20,
                nav:false,
                mouseDrag: true,
                slideBy: 'page',
                swipeAngle: 10,
                controlsContainer:".ctrlcontainer"+i,
                responsive: {
                    "900": {
                      "items": 3
                    },
                    "1200": {
                      "items": 6
                    }
                  },
              });
          });

     
