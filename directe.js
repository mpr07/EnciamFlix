document.addEventListener("DOMContentLoaded", function () {
  // Hora d'inici del primer vídeo (17:48 CET del 16 de desembre del 2023, zona horària de Catalunya)
  const startTimeVideo1 = new Date("2023-12-16T20:30:00");
  startTimeVideo1.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  // Hora d'inici del segon vídeo (17:50 CET del 16 de desembre del 2023, zona horària de Catalunya)
  const startTimeVideo2 = new Date("2023-12-23T20:55:00");
  startTimeVideo2.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo3 = new Date("2023-12-23T21:19:00");
  startTimeVideo3.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo4 = new Date("2023-12-23T21:44:00");
  startTimeVideo4.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo5 = new Date("2023-12-23T22:10:00");
  startTimeVideo5.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo6 = new Date("2023-12-23T22:34:00");
  startTimeVideo6.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo7 = new Date("2023-12-24T09:30:00");
  startTimeVideo7.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo8 = new Date("2023-12-17T09:53:00");
  startTimeVideo8.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo9 = new Date("2023-12-17T10:16:00");
  startTimeVideo9.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  const startTimeVideo10 = new Date("2023-12-17T10:40:00");
  startTimeVideo10.toLocaleString("en-US", { timeZone: "Europe/Madrid" });

  // URL dels vídeos en directe
  const videoUrls = [
    "https://mp4-down-high-es.ccma.cat/7/4/1468333243847.mp4" /*1 - El detectiu Conan 1: El detectiu més famós d'aquest segle*/,
    "https://mp4-down-high-es.ccma.cat/1/4/1468333324841.mp4" /*2 - El detectiu COnan 2: El famós detectiu que es va encongir*/,
    "https://mp4-down-high-es.ccma.cat/1/2/1701142642321.mp4" /*3 - Mr. Bean 1: Qui dies passa, anys empeny*/,
    "https://mp4-down-high-es.ccma.cat/9/0/1664754375509.mp4" /*4 - Haikyu 1: Un final i un començament*/,
    "https://mp4-down-high-es.ccma.cat/5/5/1664754219355.mp4" /*5 - Els guardians de la nit 1: Crueltat*/,
    "https://mp4-down-high-es.ccma.cat/8/2/1679624680628.mp4" /*6 - Yu Yu Hakusho 1: Adéu, món dels vius*/,
    "https://mp4-down-high-es.ccma.cat/6/0/1629159641006.mp4" /*7 - Els germans Kratt 1: La mare cocodril*/,
    "https://mp4-down-high-es.ccma.cat/9/8/1629761778289.mp4" /*8 - Els germans Kratt 2: Balenes i calamars*/,
    "https://mp4-down-high-int.ccma.cat/4/3/1625792450134.mp4" /*9 - LadyBug 1: Climatika*/,
    "https://mp4-down-high-es.ccma.cat/6/1/1672537889716.mp4" /*10 - Sakura 1: Sakura i el misteriós llibre màgic*/,
  ];

  // Funció per iniciar la reproducció del vídeo amb el temps passat des de l'inici
  function startPlayback(startTime, videoIndex) {
    const videoElement = document.getElementById("myvideo");

    // Obté el temps passat des de l'inici
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);

    // Construeix la URL del vídeo amb el temps passat des de l'inici
    const videoUrl = `${videoUrls[videoIndex]}#t=${elapsedTime}`;

    videoElement.src = videoUrl;

    // Inicia la reproducció
    videoElement.play();
    console.log(
      "Iniciant la reproducció en directe des de " + elapsedTime + " segons..."
    );
  }

  // Comprova si ja ha arribat l'hora d'inici del primer vídeo
  const currentTime = new Date();
  if (currentTime >= startTimeVideo1) {
    // Si ja ha arribat l'hora d'inici del primer vídeo, comença la reproducció amb aquest vídeo
    startPlayback(startTimeVideo1, 0);
  } else {
    // Si encara no ha arribat l'hora d'inici del primer vídeo, espera fins a l'arribada
    const timeUntilStart = Math.floor((startTimeVideo1 - currentTime) / 1000);
    setTimeout(() => startPlayback(startTimeVideo1, 0), timeUntilStart * 1000);
  }

  // Configura un temporitzador per iniciar el segon vídeo a l'hora d'inici específica
  const timeUntilStartVideo2 = Math.floor(
    (startTimeVideo2 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo2, 1),
    timeUntilStartVideo2 * 1000
  );

  const timeUntilStartVideo3 = Math.floor(
    (startTimeVideo3 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo3, 2),
    timeUntilStartVideo3 * 1000
  );

  const timeUntilStartVideo4 = Math.floor(
    (startTimeVideo4 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo4, 3),
    timeUntilStartVideo4 * 1000
  );

  const timeUntilStartVideo5 = Math.floor(
    (startTimeVideo5 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo5, 4),
    timeUntilStartVideo5 * 1000
  );

  const timeUntilStartVideo6 = Math.floor(
    (startTimeVideo6 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo6, 5),
    timeUntilStartVideo6 * 1000
  );

  const timeUntilStartVideo7 = Math.floor(
    (startTimeVideo7 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo7, 6),
    timeUntilStartVideo7 * 1000
  );

  const timeUntilStartVideo8 = Math.floor(
    (startTimeVideo8 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo8, 7),
    timeUntilStartVideo8 * 1000
  );

  const timeUntilStartVideo9 = Math.floor(
    (startTimeVideo9 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo9, 8),
    timeUntilStartVideo9 * 1000
  );

  const timeUntilStartVideo10 = Math.floor(
    (startTimeVideo10 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo10, 9),
    timeUntilStartVideo10 * 1000
  );

  const timeUntilStartVideo11 = Math.floor(
    (startTimeVideo11 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo11, 10),
    timeUntilStartVideo11 * 1000
  );

  const timeUntilStartVideo12 = Math.floor(
    (startTimeVideo12 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo12, 11),
    timeUntilStartVideo12 * 1000
  );

  const timeUntilStartVideo13 = Math.floor(
    (startTimeVideo13 - currentTime) / 1000
  );
  setTimeout(
    () => startPlayback(startTimeVideo13, 12),
    timeUntilStartVideo13 * 1000
  );

  const timeUntilStartVideo14 = Math.floor(
    (startTimeVideo14 - currentTime) / 1000
  );
  setTimeout(() => startPlayback(startTimeVideo14, 13));

  const timeUntilStartVideo15 = Math.floor(
    (startTimeVideo15 - currentTime) / 1000
  );
  setTimeout(() => startPlayback(startTimeVideo15, 14));
});
