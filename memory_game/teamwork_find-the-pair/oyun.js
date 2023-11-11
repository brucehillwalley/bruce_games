const button = document.getElementsByTagName("button");

// const colorList = Array(Math.floor(button.length / 2)).fill(0).map(eleman => [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);

const colorList = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
].sort(() => Math.random() - 0.5);

Array.from(button).map((eleman, index) => {
  eleman.addEventListener("click", (e) => {
    e.target.classList.add("reset");
    // e.target.classList.contains("reset") ? e.target.style.backgroundColor = `rgb(${[colorList[index]]})` : e.target.style.backgroundColor = "";
    e.target.classList.contains("reset")
      ? (e.target.style.backgroundColor = colorList[index])
      : (e.target.style.backgroundColor = "");
    is2(Array.from(button));
  });
});

const is2 = (dizi) => {
  const filtered = dizi.filter((btn) => btn.classList.contains("reset"));
  if (filtered.length > 1) {
    if (
      filtered[0].style.backgroundColor == filtered[1].style.backgroundColor
    ) {
      filtered.map((eleman) => {
        setTimeout(() => {}, 500);
        eleman.classList.add("bildin");
        eleman.style.visibility = "hidden";
      });
    } else {
      dizi.map((eleman) => {
        setTimeout(() => {
          eleman.classList.remove("reset");
          eleman.style.backgroundColor = "";
        }, 500);
      });
    }
  }
};
