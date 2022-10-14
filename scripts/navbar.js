export function setup() {
    let tv = document.querySelector(".tv");
    let mov = document.querySelector(".mov");
    let spr = document.querySelector(".spr");
    let list_tv = document.querySelector(".ul-tv");
    let list_mov = document.querySelector(".ul-movies");
    let list_spr = document.querySelector(".ul-sports");
  
    function setMouseover(x, y, d1, d2) {
      x.addEventListener("mouseover", (e) => {
        y.style.display = "grid";
        d1.style.display = "none";
        d2.style.display = "none";
      });
    }
    function setMouseLeave(x, y) {
      x.addEventListener("mouseleave", (e) => {
        y.style.display = "none";
      });
    }
    setMouseover(tv, list_tv, list_mov, list_spr);
    setMouseover(mov, list_mov, list_tv, list_spr);
    setMouseover(spr, list_spr, list_tv, list_mov);
    //---------
    setMouseLeave(list_tv, list_tv);
    setMouseLeave(list_mov, list_mov);
    setMouseLeave(list_spr, list_spr);
  }

export function header(){
  return ` <div class="navbar">
  <div id="left_part">
    <i class="fa-sharp fa-solid fa-bars fclr"></i>
    <img class="logo"
      src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
    />
    <span class="fclr tv">TV</span>
    <span class="fclr mov">Movies</span>
    <span class="fclr spr">Sports</span>
    <span class="fclr">Disney+</span>
    <img
      style="width: 7%; margin-top: 1px"
      src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
      
    />
  </div>
  <div id="right_part">
    <div>
      <input type="text" placeholder="Search" class="input_box" /><i
        class="fa-solid fa-magnifying-glass fclr"
      ></i>
    </div>
    <button>SUBSCRIBE</button>
    <span class="fclr login">LOGIN</span>
  </div>
  </div>
  <div class="ul-tv">
  <a>Other Shows</a>
  <a>Hotstar Specials</a>
  <a>Quix</a>
  <a>Star Jalsha</a>
  <a>StarPlus</a>
  <a>Star Vijay</a>
  <a>Star Bharat</a>
  <a>Asianet</a>
  <a>more...</a>
  </div>
  <div class="ul-movies">
  <a>Odia</a>
  <a>Hindi</a>
  <a>Bengali</a>
  <a>Telugu</a>
  <a>Malayalam</a>
  <a>Tamil</a>
  <a>Marathi</a>
  <a>English</a>
  <a>Kannada</a>
  <a>Korean</a>
  <a>Japanese</a>
  </div>
  <div class="ul-sports">
  <a>Kabaddi</a>
  <a>Football</a>
  <a>Formula 1</a>
  <a>Martial Arts</a>
  <a>American Football</a>
  <a>Cricket</a>
  <a>Hockey</a>
  <a>Tennis</a>
  <a>Khelo India</a>
  <a>Formula E</a>
  <a>Athletics</a>
  <a>Golf</a>
  </div>`  
}