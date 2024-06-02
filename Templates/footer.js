document.addEventListener("DOMContentLoaded", () => {
  const footerContent = `
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src="https://i.ibb.co/dbSSC5m/enciamflix-logo.png" alt="Logo de SLee Dw">
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSALTRES</h2>
                <p>Aquesta és una pàgina web annexa al nostra servidor de discord, on podràs veure moltes sèries i
                    pel·lícules online!</p>
            </div>
            <div class="box">
                <h2>SEGUEIX-NOS</h2>
                <div class="red-social">
                    <a href="https://discord.gg/j3UdWZK6ZP" class="fa-brands fa-discord"></a>
                    <a href="https://twitter.com/Camel3XL" class="fa fa-twitter"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2024 <b>EnciamFlix</b></small>
        </div>
        <div class="grupo-3">
            <small>Tots els vídeos allotjats en aquesta pàgina web pertanyen a la CCMA. <br>
                Aquesta web només allotja vídeos de servidors totalment aliens a nosaltres.</small>
        </div>
    `;

  const footer = document.createElement("footer");
  footer.className = "pie-pagina";
  footer.innerHTML = footerContent;
  document.body.appendChild(footer);
});
