/* =========================================================
   NEXUS CORPORATION
   TERMINAL
   Navegación simple de pantallas
   ========================================================= */

"use strict";


/* =========================================================
   ELEMENTOS DE LA INTERFAZ
   ========================================================= */

const loadingScreen = document.getElementById("loadingScreen");
const terminalScreen = document.getElementById("terminalScreen");
const finalScreen = document.getElementById("finalScreen");

const missionStatus = document.getElementById("missionStatus");
const ariaMessage = document.getElementById("ariaMessage");
const missionImage = document.getElementById("missionImage");
const actionButton = document.getElementById("actionButton");
const systemAudio = document.getElementById("systemAudio");


/* =========================================================
   PANTALLA ACTUAL
   ========================================================= */

let pantallaActual = "S001";




/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Mantener la pantalla inicial visible
    // durante 2 segundos antes de iniciar S001.

    if (loadingScreen) {
        loadingScreen.classList.remove("hidden");
    }

    if (terminalScreen) {
        terminalScreen.classList.add("hidden");
    }

    setTimeout(() => {

    const parametros = new URLSearchParams(window.location.search);
    const pantallaQR = parametros.get("screen");

    if (pantallaQR === "FINAL") {

        mostrarPantalla("FINAL");

    } else {

        mostrarPantalla("S001");

    }

}, 3000);

});


/* =========================================================
   MOSTRAR PANTALLA
   ========================================================= */

function mostrarPantalla(id) {

    const pantalla = pantallas[id];

    if (!pantalla) {

        console.error("Pantalla no encontrada:", id);

        return;
    }
/* -------------------------------------------------
   MODO IMAGEN
   ------------------------------------------------- */

if (terminalScreen) {

    terminalScreen.classList.toggle(
        "imageOnly",
        id.endsWith("B")
    );

}
    pantallaActual = id;



    /* -----------------------------------------------------
       PANTALLA FINAL
       ----------------------------------------------------- */

    if (id === "FINAL") {

        mostrarFinal();

        return;
    }


    /* -----------------------------------------------------
       MOSTRAR TERMINAL
       ----------------------------------------------------- */

    if (loadingScreen) {

        loadingScreen.classList.add("hidden");

    }

    if (finalScreen) {

        finalScreen.classList.add("hidden");

    }

    if (terminalScreen) {

        terminalScreen.classList.remove("hidden");

    }


    /* -----------------------------------------------------
       ESTADO
       ----------------------------------------------------- */

    if (missionStatus) {

        missionStatus.textContent =
            pantalla.estado || "";

    }


    /* -----------------------------------------------------
       MENSAJE
       ----------------------------------------------------- */

    if (ariaMessage) {

        ariaMessage.innerHTML =
            pantalla.texto
                ? pantalla.texto.replace(/\n/g, "<br>")
                : "";

    }


    /* -----------------------------------------------------
       IMAGEN
       ----------------------------------------------------- */

    if (missionImage) {

    document.body.classList.toggle(
        "has-image",
        !!pantalla.imagen
    );

    if (pantalla.imagen) {

        missionImage.src =
            "img/" + pantalla.imagen;

        missionImage.style.display = "block";


        /* -------------------------------------------------
           DETECTAR ORIENTACIÓN DE LA IMAGEN
           ------------------------------------------------- */

        const ajustarOrientacion = () => {

            const esVertical =
                missionImage.naturalHeight >
                missionImage.naturalWidth;

            const esHorizontal =
                missionImage.naturalWidth >
                missionImage.naturalHeight;

            missionImage.classList.toggle(
                "imageVertical",
                esVertical
            );

            missionImage.classList.toggle(
                "imageHorizontal",
                esHorizontal
            );

        };


        if (missionImage.complete) {

            ajustarOrientacion();

        } else {

            missionImage.addEventListener(
                "load",
                ajustarOrientacion,
                { once:true }
            );

        }

    } else {

        missionImage.removeAttribute("src");

        missionImage.style.display = "none";

        missionImage.classList.remove(
            "imageVertical",
            "imageHorizontal"
        );

    }

}


    /* -----------------------------------------------------
       BOTÓN
       ----------------------------------------------------- */

    if (actionButton) {

        if (pantalla.boton) {

            actionButton.textContent =
                pantalla.boton;

            actionButton.style.display =
                "block";

            actionButton.disabled = false;

        } else {

            actionButton.style.display =
                "none";

        }

    }


    /* -----------------------------------------------------
       AUDIO
       ----------------------------------------------------- */

    if (pantalla.audio) {

        reproducirAudio(pantalla.audio);

    }


    /* -----------------------------------------------------
       EFECTOS
       ----------------------------------------------------- */

    if (pantalla.efecto === "flash") {

        efectoFlash();

    }

}


/* =========================================================
   BOTÓN
   ========================================================= */

if (actionButton) {

    actionButton.addEventListener("click", () => {

        const pantalla =
            pantallas[pantallaActual];

        if (!pantalla) {

            return;
        }
/* -------------------------------------------------
   S002 — DISPARO DE CÁMARA
   El sonido ocurre al pulsar el botón.
   ------------------------------------------------- */

if (pantallaActual === "S002") {

    reproducirAudio("camera.m4a");

    setTimeout(() => {

        if (pantalla.next) {

            mostrarPantalla(pantalla.next);

        }

    }, 400);

    return;
}

        /* -------------------------------------------------
           ACCIONES FÍSICAS / QR
           
           Estos QR son parte de la experiencia física.
           El terminal no los escanea.
           El botón confirma la acción y continúa.
           ------------------------------------------------- */

        if (pantallaActual === "S016") {

            mostrarPantalla("S017");

            return;

        }

        if (pantallaActual === "S023") {

            mostrarPantalla("S024");

            return;

        }

        if (pantallaActual === "S026") {

            mostrarPantalla("FINAL");

            return;

        }


        /* -------------------------------------------------
           NAVEGACIÓN NORMAL
           ------------------------------------------------- */

        if (pantalla.next) {

            mostrarPantalla(
                pantalla.next
            );

        }

    });

}


/* =========================================================
   AUDIO
   ========================================================= */

function reproducirAudio(nombre) {

    if (!systemAudio) {

        return;
    }

    systemAudio.pause();

    systemAudio.currentTime = 0;

    systemAudio.src =
        "audio/" + nombre;

    systemAudio.play().catch(() => {});

}


/* =========================================================
   EFECTO FLASH
   ========================================================= */

function efectoFlash() {

    const fadeLayer =
        document.getElementById("fadeLayer");

    if (!fadeLayer) {

        return;
    }

    fadeLayer.classList.add("active");

    setTimeout(() => {

        fadeLayer.classList.remove("active");

    }, 180);

}


/* =========================================================
   PANTALLA FINAL
   ========================================================= */

function mostrarFinal() {

    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
    }

    if (terminalScreen) {
        terminalScreen.classList.add("hidden");
    }

    if (finalScreen) {
        finalScreen.classList.remove("hidden");
    }

    const pantallaFinal = pantallas["FINAL"];
    const finalMessage =
    document.getElementById("finalMessage");

if (finalMessage && pantallaFinal) {

    finalMessage.innerHTML =
        pantallaFinal.texto
            ? pantallaFinal.texto.replace(/\n/g, "<br>")
            : "";

}

   
    if (pantallaFinal && pantallaFinal.audio) {

        reproducirAudio(pantallaFinal.audio);

        document.addEventListener("click", () => {

            reproducirAudio(pantallaFinal.audio);

        }, { once: true });

    }

}