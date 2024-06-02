document.addEventListener("DOMContentLoaded", () => {
  const headElements = [
    { tag: "meta", attributes: { charset: "utf-8" } },
    {
      tag: "meta",
      attributes: {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    },
    { tag: "title", content: "EnciamFlix!" },
    {
      tag: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "https://mpr07.github.io/EnciamFlix/Imatges/enciamet.png",
      },
    },
    {
      tag: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
        integrity:
          "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
        crossorigin: "anonymous",
      },
    },
    {
      tag: "link",
      attributes: {
        rel: "stylesheet",
        type: "text/css",
        href: "https://mpr07.github.io/EnciamFlix/style.css",
      },
    },
    {
      tag: "link",
      attributes: {
        rel: "stylesheet",
        type: "text/css",
        href: "https://mpr07.github.io/EnciamFlix/videoPlayer.css",
      },
    },
    {
      tag: "script",
      attributes: {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe",
        crossorigin: "anonymous",
      },
    },
    {
      tag: "script",
      attributes: { src: "//code.jquery.com/jquery-1.11.1.min.js" },
    },
    {
      tag: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
      },
    },
    {
      tag: "script",
      attributes: {
        type: "module",
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
      },
    },
    {
      tag: "script",
      attributes: {
        nomodule: "",
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
      },
    },
    {
      tag: "script",
      attributes: {
        src: "https://kit.fontawesome.com/02232aa1a7.js",
        crossorigin: "anonymous",
      },
    },
    {
      tag: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tag: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    },
    {
      tag: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet",
      },
    },
    {
      tag: "script",
      attributes: {
        src: "https://cdn.jsdelivr.net/npm/afterglowplayer@1.1.0/dist/afterglow.min.js",
      },
    },
  ];

  headElements.forEach((element) => {
    const el = document.createElement(element.tag);
    if (element.content) {
      el.textContent = element.content;
    }
    if (element.attributes) {
      Object.keys(element.attributes).forEach((attr) => {
        el.setAttribute(attr, element.attributes[attr]);
      });
    }
    document.head.appendChild(el);
  });
});
