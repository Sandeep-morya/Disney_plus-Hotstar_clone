import {setup,login_page,working} from "./navbar.js";
setup();
document.querySelector("#signin").innerHTML=login_page();
working();
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  let arr = [
    
    {
      title: "Liger - Saala CrossBread",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6424/1356424-h-258e1813fce6",
    },
    {
      title: "She-Hulk",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
    },
    {
      title: "Prey 2022",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6",
    },
    
    {
      title: "Warewolf By Night",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6395/1366395-h-e01c59603785",
    },
    {
      title: "Black Adam",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Black-Adam-poster.jpg",
    },
    {
      title: "Cadaver",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7333/1317333-h-c4cd88bedeb7",
    },
    {
      title: "Lightyear",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem voluptates ex amet dolores numquam dolorum neque ea consequatur optio? Voluptas iste quasi voluptatem enim? Amet impedit incidunt quae quasi?",
      imageUrl:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8/1310008-h-14af1d2c7500",
    },
  ];
  let carousel = document.querySelector(".carousel");

  let sliders = [];
  let slideIndex = 0;

  const createSlide = () => {
    if (slideIndex >= arr.length) {
      slideIndex = 0;
    }

    let slide = document.createElement("div");
    let image = document.createElement("img");
    image.src = arr[slideIndex].imageUrl;
    let content = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = arr[slideIndex].title;
    let des = document.createElement("p");
    des.textContent = arr[slideIndex].des;
    content.append(title, des);
    slide.append(content, image);
    carousel.append(slide);

    slideIndex++;

    slide.className = "slider";
    content.className = "slide-content";
    title.className = "title";
    des.className = "des";

    sliders.push(slide);

    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };

  for (let i = 0; i < 6; i++) {
    createSlide();
  }
  setInterval(createSlide, 4000);
  document.querySelector(".loader2").style.display = "block";
}, 2000);

setTimeout(function () {
  document.querySelector(".loader2").style.display = "none";

  document.querySelector("#movies").style.display = "block";
}, 4000);