<?php include "Head.php";?>
<body>

    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Crea el teu compte</h1>
                <input type="text" placeholder="Nom d'usuari" />
                <input type="email" placeholder="Correu" />
                <input type="password" placeholder="Contrasenya" />
                <button>Registrar</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Inicia Sessió</h1>
                <input type="email" placeholder="Correu" />
                <input type="password" placeholder="Contrasenya" />
                <a href="#">No recordes la contrasenya?</a>
                <button>Inicia Sessió</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Benvingut de nou!</h1>
                    <p>Gaudeix del ampli contingut</p>
                    <button class="ghost" id="signIn">Inica Sessió</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Som-hi!</h1>
                    <p>Dona't d'alta per tal de començar un llarg viatge</p>
                    <button class="ghost" id="signUp">Registrar</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    </script>
</body>
</html> 