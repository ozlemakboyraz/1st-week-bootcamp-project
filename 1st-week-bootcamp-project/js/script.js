
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});


try {
const mute = document.querySelector('.mute__checkbox');
const audio = new Audio('audio/stranger_things.mp3');
const checkMute = () => {
    if (mute.checked) {
        audio.play().catch(() => {
            mute.checked = false;
        });
    } else {
        audio.pause();
    }
};

if (mute) {
    setTimeout(checkMute, 2000);
}

mute.addEventListener('change', checkMute);
}catch {
    console.log('Bu sayfada müzik yok.');
}

document.addEventListener("DOMContentLoaded", () => {
  const muteCheckbox = document.getElementById("mute");
  const muteLabel = document.getElementById("muteLabel");

  if (muteCheckbox && muteLabel) {
    muteCheckbox.addEventListener("change", () => {
      muteLabel.textContent = muteCheckbox.checked ? "🔇" : "🔊";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("youtubeTrigger");
    const wrapper = document.getElementById("videoWrapper");

    if (trigger && wrapper) {
        trigger.addEventListener("click", () => {
            const iframe = document.createElement("iframe");
            iframe.src = "https://www.youtube.com/embed/bV0RAcuG2Ao?start=100";
            iframe.classList.add("video-iframe");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("title", "Favori Sahne - Stranger Things");
            wrapper.innerHTML = "";
            wrapper.appendChild(iframe);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const favButton = document.getElementById("favoriteButton");
  if (favButton) {
    favButton.addEventListener("click", () => {
      favButton.classList.toggle("favorited");
      favButton.textContent = favButton.classList.contains("favorited")
        ? "Favorilere Eklendi 💚"
        : "Favorilere Ekle ❤️";
    });
  }
});
