const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

//Images popup hover effect
const cursorImage = document.getElementById("cursor-image-blender");
const anchorTags = document.querySelectorAll(".blender-anchor");

anchorTags.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    const imageURL = tag.getAttribute("data-image");
    cursorImage.style.backgroundImage = `url(${imageURL})`;
  });

  tag.addEventListener("mousemove", (e) => {
    cursorImage.style.display = "block";
    cursorImage.style.left = `${e.clientX + 15}px`;
    cursorImage.style.top = `${e.clientY - 60}px`;
  });

  tag.addEventListener("mouseleave", () => {
    cursorImage.style.display = "none";
  });
});

//Videos popup hover effect
const cursorVideo = document.getElementById("cursor-video");
const anchorTagsVideo = document.querySelectorAll(".animation-anchor");

anchorTagsVideo.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    const videoURL = tag.getAttribute("data-video");
    cursorVideo.innerHTML = `<video controls autoplay loop><source src="${videoURL}" type="video/mp4"></video>`;
  });

  tag.addEventListener("mousemove", (e) => {
    cursorVideo.style.display = "block";
    cursorVideo.style.left = `${e.clientX + 15}px`;
    cursorVideo.style.top = `${e.clientY}px`;
  });

  tag.addEventListener("mouseleave", () => {
    cursorVideo.style.display = "none";
    cursorVideo.innerHTML = "";
  });
});

//Images popup hover effect
const cursorSketchImage = document.getElementById("sketch-image");
const anchorTagsSketch = document.querySelectorAll(".sketch-anchor");

anchorTagsSketch.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    const imageURL = tag.getAttribute("data-image");
    cursorSketchImage.style.backgroundImage = `url(${imageURL})`;
  });

  tag.addEventListener("mousemove", (e) => {
    cursorSketchImage.style.display = "block";
    cursorSketchImage.style.left = `${e.clientX - 40}px`;
    cursorSketchImage.style.top = `${e.clientY + 30}px`;
  });

  tag.addEventListener("mouseleave", () => {
    cursorSketchImage.style.display = "none";
  });
});
