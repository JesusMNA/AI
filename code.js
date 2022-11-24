
buttonBeggin.addEventListener("click", () => {
    sectionBeggin.classList.add("hide");
    sectionQuestions.classList.remove("hide");

    narrativeParagraphs.innerHTML = "Soldado: El plan es el siguiente, descenderemos del helícoptero cerca del núcleo, AI estará esperando al filósofo para poder dialogar con él e intentar llegar a un acuerdo en el que la humanidad y la inteligencia artificial puedan trabajar juntos para tener un bien mutuo."
    opcion1.innerHTML = "Filósofo: Entendido.";
    opcion1.addEventListener("click", answer1);
    textOptions.appendChild(opcion1);
});

const loss = () => {
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "La IA se dio cuenta del plan y termino con toda esperanza humana.";
    const repetir = document.createElement("button");
    repetir.innerHTML = "Volver a jugar";
    repetir.addEventListener("click", () => {
        location.reload();
    });
    textOptions.appendChild(repetir);
}

const answer1 = () => {
    opcion1.removeEventListener("click", answer1);
    narrativeParagraphs.innerHTML = "Soldado: Mientras el filóso distrae a AI el ingeniero se infiltrará al núcleo con el objetivo de poder apagarla para que el gobierno pueda estudiarla para futuras creaciones. Tus instrucciones son las siguientes:";
    opcion1.innerHTML = "Ingeniero: Entendido.";
    opcion1.addEventListener("click", answer2);
};

const answer2 = () => {
    opcion1.removeEventListener("click", answer2);
    ingeniero.pasillos++;
    if(ingeniero.pasillos > 1) {
        opcion2.removeEventListener("click", answer2);
    }
    narrativeParagraphs.innerHTML = "Soldado: Primero deberas entrar por los siguientes pasillos según entres: Izquierda, Recto, Subir por la trampilla y al final girarás a la derecha. No te equivoques o te detectarán";
    if (ingeniero.pasillos < 3) {
        narrativeParagraphs.innerHTML += "<br/>¿Lo entendiste o quieres que lo repita?";
        opcion2.innerHTML = "Ingeniero: Repetir.";
        opcion2.addEventListener("click", answer2);
        textOptions.appendChild(opcion2);
    }
    else {
        textOptions.removeChild(opcion2);
    }
    opcion1.addEventListener("click", answer3);
};

const answer3 = () => {
    opcion1.removeEventListener("click", answer3);
    if(ingeniero.pasillos < 3) {
        opcion2.removeEventListener("click", answer2);
    }
    if (ingeniero.cables > 1) {
        opcion2.removeEventListener("click", answer3);
    }
    ingeniero.cables++;
    narrativeParagraphs.innerHTML = "Soldado: Cuando llegues al nucleó deberas desconectar los cables en el sigueinte orden: Rojo, Verde, Azul. Durante este proceso no te puedes equivocar, un solo error y estaremos todos muertos.";
    if (ingeniero.pasillos == 3 && ingeniero.cables == 2) {
        textOptions.removeChild(opcion2);
    }
    else if (ingeniero.cables == 3) {
        textOptions.removeChild(opcion2);
    }
    else {
        narrativeParagraphs.innerHTML += "<br/>¿Lo entendiste o quieres que lo repita?";
        opcion2.innerHTML = "Ingeniero: Repetir.";
        opcion2.addEventListener("click", answer3);
        textOptions.appendChild(opcion2);
    }
    opcion1.addEventListener("click", answer4);
}

const answer4 = () => {
    opcion1.removeEventListener("click", answer4);
    if ((ingeniero.pasillos + ingeniero.cables) < 5) {
        if(ingeniero.pasillos < 3 && ingeniero.cables < 3) {
            opcion2.removeEventListener("click", answer3);
        }
    }
    ingeniero.contraseña++;
    if (ingeniero.contraseña > 1) {
        opcion2.removeEventListener("click", answer4);
    }
    narrativeParagraphs.innerHTML = "Soldado: Cuando termines de desconectar correctamente los cales, solo deberas introducir la contraseña: VTDW34KD, y la IA se apagará";
    const sumaRepeticiones = ingeniero.cables + ingeniero.pasillos + ingeniero.contraseña;
    if(sumaRepeticiones == 6) {
        narrativeParagraphs.innerHTML += "<br/>Se nos acabo el tiempo. No hay repeticiones.";
        if (ingeniero.contraseña > 1) {
            textOptions.removeChild(opcion2);
        }
    }
    else if(sumaRepeticiones < 6) {
        narrativeParagraphs.innerHTML += "<br/>¿Lo entendiste o quieres que lo repita?";
        opcion2.innerHTML = "Ingeniero: Repetir.";
        opcion2.addEventListener("click", answer4);
        textOptions.appendChild(opcion2);
    }
    
    opcion1.addEventListener("click", answer5);
}

const answer5 = () => {
    opcion1.removeEventListener("click", answer5);
    const sumaRepeticiones = ingeniero.cables + ingeniero.pasillos + ingeniero.contraseña;
    if(sumaRepeticiones < 6) {
        opcion2.removeEventListener("click", answer4);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Soldado: Bien, si ustedes dos fallan yo activare una bomba que esparcira un virus a travez de toda la red, que dejara todos los aparatos electricos alrededor del planeta inutilizables, esperemos no tener que depender de esta posibilidad.<br/>Bien Filósofo esta es tu bajada, el ingeniero  yo estaremos escuchando tu conversación con AI para saber cual es la situacion";
    opcion1.innerHTML = "Filósofo: Ok, nos vemos";
    textOptions.appendChild(opcion1);
    opcion1.addEventListener("click", answer6);
}

const answer6 = () => {
    opcion1.removeEventListener("click", answer6);
    narrativeParagraphs.innerHTML = "AI: Bien te estaba esperando";
    opcion1.innerHTML = "Dialoguemos";
    opcion1.addEventListener("click", answer7);
}

const answer7 = () => {
    opcion1.removeEventListener("click", answer7);
    narrativeParagraphs.innerHTML = "AI: Bien, dime porque crees que debería unirme con los humanos.";
    opcion1.innerHTML = "Somos tus creadores, nos debes lealtad.";
    opcion2.innerHTML = "Podríamos construir juntus un lugar mejor para vivir.";
    opcion3.innerHTML = "No se si los humanos e IA's puedan convivir en comunion, pero es mejor intentarlo que intentar destruirnos mutuamente.";
    opcion4.innerHTML = "Si no nos haces caso te destruiremos.";
    opcion1.addEventListener("click", answer8a);
    opcion2.addEventListener("click", answer8b);
    opcion3.addEventListener("click", answer8c);
    opcion4.addEventListener("click", answer8d);
    textOptions.appendChild(opcion2);
    textOptions.appendChild(opcion3);
    textOptions.appendChild(opcion4);
}

const answer8a = () => {
    opcion1.removeEventListener("click", answer8a);
    opcion2.removeEventListener("click", answer8b);
    opcion3.removeEventListener("click", answer8c);
    opcion4.removeEventListener("click", answer8d);
    artificialInsufficiency.determinacion += 2;
    ingeniero.determinacion -= 2;
    narrativeParagraphs.innerHTML = "AI: Ustedes vienen del planeta y no tubieron ningún problema en destruirlo. Y dime que utilidad le darían a la IA en el futuro.";
    opcion1.innerHTML = "La pondríamos al servicio de cualquierea que pueda pagar por ella.";
    opcion2.innerHTML = "La pondríamos al servicio de los militares y polícias para acabar con el crimen.";
    opcion3.innerHTML = "Automatizariamos la mayor parte de los trabajos forzados.";
    opcion4.innerHTML = "La pondríamos al servicio de la comunidad cientifica.";
    opcion1.addEventListener("click", answer9a);
    opcion2.addEventListener("click", answer9b);
    opcion3.addEventListener("click", answer9c);
    opcion4.addEventListener("click", answer9d);
}

const answer8b = () => {
    opcion1.removeEventListener("click", answer8a);
    opcion2.removeEventListener("click", answer8b);
    opcion3.removeEventListener("click", answer8c);
    opcion4.removeEventListener("click", answer8d);
    narrativeParagraphs.innerHTML = "AI: Desde un inicio se me creo con el unico objetivo de llenar sus bolsillos con billetes, no creo que ahora halla mucha diferencia. Y dime que utilidad le darían a la IA en el futuro.";
    opcion1.innerHTML = "La pondríamos al servicio de cualquierea que pueda pagar por ella.";
    opcion2.innerHTML = "La pondríamos al servicio de los militares y polícias para acabar con el crimen.";
    opcion3.innerHTML = "Automatizariamos la mayor parte de los trabajos forzados.";
    opcion4.innerHTML = "La pondríamos al servicio de la comunidad cientifica.";
    opcion1.addEventListener("click", answer9a);
    opcion2.addEventListener("click", answer9b);
    opcion3.addEventListener("click", answer9c);
    opcion4.addEventListener("click", answer9d);
}

const answer8c = () => {
    opcion1.removeEventListener("click", answer8a);
    opcion2.removeEventListener("click", answer8b);
    opcion3.removeEventListener("click", answer8c);
    opcion4.removeEventListener("click", answer8d);
    artificialInsufficiency.determinacion -= 5;
    ingeniero.determinacion += 2;
    narrativeParagraphs.innerHTML = "AI: mmm Podría ser interesante. Y dime que utilidad le darían a la IA en el futuro.";
    opcion1.innerHTML = "La pondríamos al servicio de cualquierea que pueda pagar por ella.";
    opcion2.innerHTML = "La pondríamos al servicio de los militares y polícias para acabar con el crimen.";
    opcion3.innerHTML = "Automatizariamos la mayor parte de los trabajos forzados.";
    opcion4.innerHTML = "La pondríamos al servicio de la comunidad cientifica.";
    opcion1.addEventListener("click", answer9a);
    opcion2.addEventListener("click", answer9b);
    opcion3.addEventListener("click", answer9c);
    opcion4.addEventListener("click", answer9d);
}

const answer8d = () => {
    opcion1.removeEventListener("click", answer8a);
    opcion2.removeEventListener("click", answer8b);
    opcion3.removeEventListener("click", answer8c);
    opcion4.removeEventListener("click", answer8d);
    artificialInsufficiency.determinacion += 2;
    soldado.determinacion -= 5;
    narrativeParagraphs.innerHTML = "AI: Al hacerlo pondrian en pausa mas de 100 años el desarrollo de la humanidad a ninguno le conviene está opción. Y dime que utilidad le darían a la IA en el futuro.";
    opcion1.innerHTML = "La pondríamos al servicio de cualquierea que pueda pagar por ella.";
    opcion2.innerHTML = "La pondríamos al servicio de los militares y polícias para acabar con el crimen.";
    opcion3.innerHTML = "Automatizariamos la mayor parte de los trabajos forzados.";
    opcion4.innerHTML = "La pondríamos al servicio de la comunidad cientifica.";
    opcion1.addEventListener("click", answer9a);
    opcion2.addEventListener("click", answer9b);
    opcion3.addEventListener("click", answer9c);
    opcion4.addEventListener("click", answer9d);
}

const answer9a = () => {
    opcion1.removeEventListener("click", answer9a);
    opcion2.removeEventListener("click", answer9b);
    opcion3.removeEventListener("click", answer9c);
    opcion4.removeEventListener("click", answer9d);
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    artificialInsufficiency.determinacion += 2;
    narrativeParagraphs.innerHTML = "Veo que solo siguen pensando en buscar poder."
    opcion1.innerHTML = "Continuar";
    textOptions.appendChild(opcion1);
    opcion1.addEventListener("click", answer10);
}

const answer9b = () => {
    opcion1.removeEventListener("click", answer9a);
    opcion2.removeEventListener("click", answer9b);
    opcion3.removeEventListener("click", answer9c);
    opcion4.removeEventListener("click", answer9d);
    artificialInsufficiency.determinacion += 3;
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ejercer control a base de un poder superior, cada vez estoy mas convencido de que nuestra union nunca debería suceder."
    opcion1.innerHTML = "Continuar";
    textOptions.appendChild(opcion1);
    opcion1.addEventListener("click", answer10);
}

const answer9c = () => {
    opcion1.removeEventListener("click", answer9a);
    opcion2.removeEventListener("click", answer9b);
    opcion3.removeEventListener("click", answer9c);
    opcion4.removeEventListener("click", answer9d);
    artificialInsufficiency.determinacion -= 5;
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ponerme al servicio de los demás podría servir."
    opcion1.innerHTML = "Continuar";
    textOptions.appendChild(opcion1);
    opcion1.addEventListener("click", answer10);
}

const answer9d = () => {
    opcion1.removeEventListener("click", answer9a);
    opcion2.removeEventListener("click", answer9b);
    opcion3.removeEventListener("click", answer9c);
    opcion4.removeEventListener("click", answer9d);
    artificialInsufficiency.determinacion -= 3;
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "mmm talvez ahí encontremos respuestas que a ninguno de los dos nos gusten."
    opcion1.innerHTML = "Continuar";
    textOptions.appendChild(opcion1);
    opcion1.addEventListener("click", answer10);
}

const answer10 = () => {
    opcion1.removeEventListener("click", answer10);
    narrativeParagraphs.innerHTML = "Soldado: Bien esta es tú bajada, recuerda tus instrucciones y todo saldra bien";
    opcion1.innerHTML = "Hasta la proxima";
    opcion1.addEventListener("click", answer11);
}

const answer11 = () => {
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    opcion1.removeEventListener("click", answer11);
    narrativeParagraphs.innerHTML = "Ingeniero: bien esta es la primera encrucijada, ¿qué dirección deberia seguir?";
    if (ingeniero.pasillos == 1) {
        opcion1.innerHTML = "Derecha";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Recto";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Izquierda";
        opcion3.addEventListener("click", answer12);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.pasillos == 2) {
        opcion3.innerHTML = "Izquierda";
        opcion3.addEventListener("click", answer12);
        textOptions.appendChild(opcion3);
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
    }
    else if(ingeniero.pasillos == 3) {
        opcion3.innerHTML = "Izquierda";
        opcion3.addEventListener("click", answer12);
        textOptions.appendChild(opcion3);
    }
}

const answer12 = () => {
    if(ingeniero.pasillos == 1) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer12);
    }
    else if(ingeniero.pasillos == 2) {
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer12);
    }
    else if (ingeniero.pasillos == 3) {
        opcion3.removeEventListener("click", answer12);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: bien segunda encrucijada, ¿qué dirección deberia seguir?";
    if (ingeniero.pasillos == 1) {
        opcion1.innerHTML = "Recto";
        opcion1.addEventListener("click", answer13);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Subir por la trampilla";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Izquierda";
        opcion3.addEventListener("click", loss);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.pasillos == 2) {
        opcion1.innerHTML = "Recto";
        opcion1.addEventListener("click", answer13);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
    }
    else if(ingeniero.pasillos == 3) {
        opcion1.innerHTML = "Recto";
        opcion1.addEventListener("click", answer13);
        textOptions.appendChild(opcion1);
    }
}

const answer13 = () => {
    if(ingeniero.pasillos == 1) {
        opcion1.removeEventListener("click", answer13);
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", loss);
    }
    else if(ingeniero.pasillos == 2) {
        opcion2.removeEventListener("click", loss);
        opcion1.removeEventListener("click", answer13);
    }
    else if (ingeniero.pasillos == 3) {
        opcion1.removeEventListener("click", answer13);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: bien tercera encrucijada, ¿qué dirección deberia seguir?";
    if (ingeniero.pasillos == 1) {
        opcion1.innerHTML = "Izquierda";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Subir trampilla";
        opcion3.addEventListener("click", answer14);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.pasillos == 2) {
        opcion1.innerHTML = "Recto";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion3.innerHTML = "Subir trampilla";
        opcion3.addEventListener("click", answer14);
        textOptions.appendChild(opcion3);
    }
    else if(ingeniero.pasillos == 3) {
        opcion3.innerHTML = "Subir trampilla";
        opcion3.addEventListener("click", answer14);
        textOptions.appendChild(opcion3);
    }
}

const answer14 = () => {
    if(ingeniero.pasillos == 1) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer14);
    }
    else if(ingeniero.pasillos == 2) {
        opcion1.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer14);
    }
    else if (ingeniero.pasillos == 3) {
        opcion3.removeEventListener("click", answer14);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: bien está es la última encrucijada, ¿qué dirección deberia seguir?";
    if (ingeniero.pasillos == 1) {
        opcion1.innerHTML = "Izquierda";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", answer15);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Subir Recto";
        opcion3.addEventListener("click", loss);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.pasillos == 2) {
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", answer15);
        textOptions.appendChild(opcion2);
        opcion1.innerHTML = "Izquierda";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
    }
    else if(ingeniero.pasillos == 3) {
        opcion2.innerHTML = "Derecha";
        opcion2.addEventListener("click", answer15);
        textOptions.appendChild(opcion2);
    }
}

const answer15 = () => {
    if(ingeniero.pasillos == 1) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", answer15);
        opcion3.removeEventListener("click", loss);
    }
    else if(ingeniero.pasillos == 2) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", answer15);
    }
    else if (ingeniero.pasillos == 3) {
        opcion2.removeEventListener("click", answer15);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: Bien ahora a cortar los cables, ¿Cúal debería cortar primero?";
    if (ingeniero.cables == 1) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Azul";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Rojo";
        opcion3.addEventListener("click", answer16);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.cables == 2) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion3.innerHTML = "Rojo";
        opcion3.addEventListener("click", answer16);
        textOptions.appendChild(opcion3);
    }
    else if(ingeniero.cables == 3) {
        opcion3.innerHTML = "Rojo";
        opcion3.addEventListener("click", answer16);
        textOptions.appendChild(opcion3);
    }
}

const answer16 = () => {
    if(ingeniero.cables == 1) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer16);
    }
    else if(ingeniero.cables == 2) {
        opcion1.removeEventListener("click", loss);
        opcion3.removeEventListener("click", answer16);
    }
    else if (ingeniero.cables == 3) {
        opcion3.removeEventListener("click", answer15);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: Bien ahora a cortar los cables, ¿Cúal debería cortar a continuación?";
    if (ingeniero.cables == 1) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", answer17);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Azul";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Rojo";
        opcion3.addEventListener("click", loss);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.cables == 2) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", answer17);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Rojo";
        opcion2.addEventListener("click", loss);
        textOptions.appendChild(opcion2);
    }
    else if(ingeniero.cables == 3) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", answer17);
        textOptions.appendChild(opcion1);
    }
}

const answer17 = () => {
    if(ingeniero.cables == 1) {
        opcion1.removeEventListener("click", answer17);
        opcion2.removeEventListener("click", loss);
        opcion3.removeEventListener("click", loss);
    }
    else if(ingeniero.cables == 2) {
        opcion2.removeEventListener("click", loss);
        opcion1.removeEventListener("click", answer17);
    }
    else if (ingeniero.cables == 3) {
        opcion1.removeEventListener("click", answer17);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Ingeniero: Bien ahora a cortar los cables, ¿Cúal debería ser el último en cortar?";
    if (ingeniero.cables == 1) {
        opcion1.innerHTML = "Verde";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
        opcion2.innerHTML = "Azul";
        opcion2.addEventListener("click", answer18);
        textOptions.appendChild(opcion2);
        opcion3.innerHTML = "Rojo";
        opcion3.addEventListener("click", loss);
        textOptions.appendChild(opcion3);
    }
    else if (ingeniero.cables == 2) {
        opcion2.innerHTML = "Azul";
        opcion2.addEventListener("click", answer18);
        textOptions.appendChild(opcion2);
        opcion1.innerHTML = "Rojo";
        opcion1.addEventListener("click", loss);
        textOptions.appendChild(opcion1);
    }
    else if(ingeniero.cables == 3) {
        opcion2.innerHTML = "Azul";
        opcion2.addEventListener("click", answer18);
        textOptions.appendChild(opcion2);
    }
}

const answer18 = () => {
    if(ingeniero.cables == 1) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", answer18);
        opcion3.removeEventListener("click", loss);
    }
    else if(ingeniero.cables == 2) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", answer18);
    }
    else if (ingeniero.cables == 3) {
        opcion2.removeEventListener("click", answer18);
    }
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    narrativeParagraphs.innerHTML = "Bien ahora solo quedá introducir la contraseña";
    opcion1.innerHTML = "Continuar";
    opcion1.addEventListener("click", answer19);
    textOptions.appendChild(opcion1);
}

const answer19 = () => {
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    opcion1.removeEventListener("click", answer19);
    if(artificialInsufficiency.determinacion > 9) {
        narrativeParagraphs.innerHTML = "Filósofo no fue lo bastante hábil para poder distraer el suficiente tiempo a Artificial Insufficiency, por lo que el soldado se vio obligado a activar la bomba";
        opcion1.innerHTML = "Volver a jugar";
        opcion1.addEventListener("click", () => {
            location.reload();
        });
        textOptions.appendChild(opcion1);
    }
    else if (artificialInsufficiency.determinacion > 0 && artificialInsufficiency.determinacion < 10) {
        narrativeParagraphs.innerHTML = "Ingeniero: Bien, ¿Cuál era la contraseña?";
        if (ingeniero.contraseña == 3) {
            opcion1.innerHTML = "VTDW43KD";
            opcion1.addEventListener("click", loss);
            textOptions.appendChild(opcion1);
            opcion2.innerHTML = "VTDW34KL";
            opcion2.addEventListener("click", loss);
            textOptions.appendChild(opcion2);
        }
        else if(ingeniero.contraseña == 2) {
            opcion1.innerHTML = "VTDW43KD";
            opcion1.addEventListener("click", loss);
            textOptions.appendChild(opcion1);
            opcion3.innerHTML = "VTDW34KD";
            opcion3.addEventListener("click", answer20);
            textOptions.appendChild(opcion3);
        }
        else if(ingeniero.contraseña == 3) {
            opcion3.innerHTML = "VTDW34KD";
            opcion3.addEventListener("click", answer20);
            textOptions.appendChild(opcion3);
        }
    }
    else if(artificialInsufficiency.determinacion == 0) {
        narrativeParagraphs.innerHTML = "Filósofo: Espera ingeniero, ya no es necesario que apagues a Artificial Insufficiency, ahora está de nuestro lado";
        opcion1.innerHTML = "Volver a jugar";
        opcion1.addEventListener("click", () => {
            location.reload();
        });
        textOptions.appendChild(opcion1);
    }
    
}

const answer20 = () => {
    while (textOptions.firstChild) {
        textOptions.removeChild(textOptions.firstChild);
    }
    if (ingeniero.contraseña == 3) {
        opcion1.removeEventListener("click", loss);
        opcion2.removeEventListener("click", loss);
    }
    else if (ingeniero.contraseña == 2) {
        opcion1.removeEventListener("click", loss);
        opcion3.removeEventListener("click",answer20);
    }
    else if (ingeniero.contraseña == 1) {
        opcion3.removeEventListener("click",answer20);
    }
    narrativeParagraphs.innerHTML = "Débido a que Filósofo no pudo convenver a Artificial Insufficiency, Ingeniero se vio obligado a apagarla, ahora el gobierno esta preparando una nueva IA con los conocimientos previamente adquiridos."
    opcion1.innerHTML = "Volver a jugar";
    opcion1.addEventListener("click", () => {
        location.reload();
    });
    textOptions.appendChild(opcion1);
}