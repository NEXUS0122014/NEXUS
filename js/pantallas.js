const pantallas = {

S001:{

    estado:"TRANSMISIÓN ACTIVA",
     texto:`
PRIMERA COORDENADA

La operación comienza aquí.

ARIA ha recuperado una primera evidencia.
Observad la evidencia y localizad el punto exacto.


`,

    imagen:null,

    boton:"MOSTRAR EVIDENCIA",

    audio:null,

    next:"S001B"
},

S001B:{
    estado:"EVIDENCIA LOCALIZADA",

     texto:`Situaros en el lugar mostrado y confirmad.`,
    
    
    imagen:"mural.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S002"
},



S002:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:`
Capturad una imagen del objetivo y 
confirmad para obtener nuevas indicaciones.
`,

    imagen:null,

    boton:"REGISTRAR EVIDENCIA",

    audio:null,

    efecto:"flash",

    next:"S003"

},
S003:{

    estado:"NUEVA COORDENADA",

    texto:`

Habéis desbloqueado una nueva ubicación.
Observad la imagen para descubrir el punto exacto.
Dirigíos hacia ese punto y, una vez allí, confirmad ubicación.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S003B"
},

S003B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"ayuntamiento.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S004"
},
S004:{

    estado:"UBICACIÓN CONFIRMADA",

    texto:`
Habéis llegado al punto indicado.
La ubicación ha sido verificada correctamente.

Una nueva coordenada está disponible.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S005"

},
S005:{

    estado:"NUEVA COORDENADA",

    texto:`
Habéis desbloqueado una nueva ubicación.
Observad la imagen para descubrir el punto exacto.
Dirigíos hacia ese punto y, una vez allí, confirmad ubicación.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S005B"
},

S005B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"puerta.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S006"
},
S006:{

    estado:"UBICACIÓN CONFIRMADA",

    texto:`
Habéis llegado al punto indicado.
La ubicación ha sido verificada correctamente.

Una nueva coordenada está disponible.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S007"

},
S007:{

    estado:"NUEVA COORDENADA",

    texto:`
Habéis desbloqueado una nueva ubicación.
Observad la imagen para descubrir el punto exacto.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S007B"

},

S007B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"tintin.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S008"

},
S008:{

    estado:"UBICACIÓN CONFIRMADA",

    texto:`
Habéis llegado al punto indicado.
La ubicación ha sido verificada correctamente.

Una nueva coordenada está disponible.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S009"

},
S009:{

    estado:"NUEVA COORDENADA",

    texto:`
Habéis desbloqueado una nueva ubicación.
Localizad la estación de recarga.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S009B"

},

S009B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"callejon.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S010"

},
S010:{

    estado:"ACTUALIZACIÓN DE INVENTARIO",

    texto:`
Recursos recibidos.
Organizad el inventario antes de continuar.

Se recomienda una parada de 10 minutos.
`,

    imagen:null,

    boton:"PAUSA DE OPERACIÓN",

    audio:null,

    efecto:null,

    next:"S011"

},
S011:{

    estado:"OBJETIVO DE RECUPERACIÓN",

    texto:`
Necesitáis un dispositivo para continuar la operación.
Localizad el establecimiento donde podréis adquirirlo.

Cuando confirméis la ubicación, recibiréis una pista del objeto.
`,

    imagen:null,

    boton:"MOSTRAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S011B"

},

S011B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"vaca.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S012"

},
S012:{

    estado:"DISPOSITIVO ASIGNADO",

    texto:`
Se ha activado un dispositivo de identificación.
Disponéis de créditos NEXUS para conseguirlo.

A continuación recibiréis una referencia para localizarlo.
`,

    imagen:null,

    boton:"MOSTRAR EVIDENCIA",

    audio:null,

    efecto:null,

    next:"S013"

},
S012B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:`Pasad por caja y utilizad los créditos NEXUS.`,

    imagen:"token.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S013"

},
S013:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:`
    Pasad por caja y utilizad los créditos NEXUS.`,

    imagen:"token.jpeg",

    boton:"RECURSO OBTENIDO",

    audio:null,

    efecto:null,

    next:"S014"


},
S014:{

    estado:"OPERACIÓN EN CURSO",

    texto:`
Dispositivo registrado correctamente.
La siguiente coordenada ha sido desbloqueada.

Continuad hasta el punto indicado.`,

    imagen:null,

    boton:"MOSTRAR SIGUIENTE COORDENADA",

    audio:null,

    efecto:null,

    next:"S015"

},
S015:{

    estado:"NUEVA COORDENADA",

    texto:`

Localizad el punto exacto. 
Observad el entorno.

`,

    imagen:null,

    boton:"LOCALIZAR OBJETIVO",

    audio:null,

    efecto:null,

    next:"S015B"

},

S015B:{

    estado:"EVIDENCIA LOCALIZADA ",

    texto:``,

    imagen:"imperial.jpeg",

    boton:"CONFIRMAR UBICACIÓN",

    audio:null,

    efecto:null,

    next:"S016"

},
S016:{

    estado:"SEÑAL NEXUS",

    texto:`
Buscad en la plaza una tarjeta de acceso temporal.
Necesitaréis este recurso para completar la misión.
Añadid la tarjeta de acceso al inventario
y confirmad para recibir las siguientes instrucciones.
`,

    imagen:null,

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:null

},
S017:{

    estado:"RUTA DE ACCESO",

    texto:`
Habéis llegado al tramo final de la operación.

Por motivos de seguridad, la ubicación definitiva permanece oculta.

Recibiréis la ruta por tramos. 
`,

    imagen:null,

    boton:"INICIAR RUTA",

    audio:null,

    efecto:null,

    next:"S017B"

},

S017B:{

    estado:"PRIMER TRAMO",

    texto:``,

    imagen:"rambla01.jpeg",

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S018"

},
S018:{

    estado:"CONFIRMAR UBICACIÓN",

    texto:`
Confirmad que habéis
localizado el objetivo.

Continuad con la
reconstrucción de la ruta.
`,

    imagen:null,

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S019"

},
S019:{

    estado:"NUEVO TRAMO DESBLOQUEADO",

    texto:`
Habéis desbloqueado el siguiente tramo de la ruta.


Localizad el siguiente punto y confirmad ubicación.
`,

    imagen:null,

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S019B"

},

S019B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"rambla02.jpeg",

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S020"

},
S020:{

    estado:"CONFIRMAR UBICACIÓN",

    texto:`
Confirmad que habéis
localizado el objetivo.

Último tramo activado. Confirmad para continuar.
`,

    imagen:null,

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S021"


},

S021:{

    estado:"TRAMO FINAL",

    texto:`
Se ha activado el último tramo de la ruta, pero la ubicación final sigue oculta.
Debéis encontrar una TARJETA DE ACCESO TOTAL.

`,

    imagen:null,

    boton:"LOCALIZAR OBJETIVO",

    audio:null,

    efecto:null,

    next:"S021B"

},

S021B:{

    estado:"EVIDENCIA LOCALIZADA",

    texto:``,

    imagen:"rambla03.jpeg",

    boton:"CONTINUAR",

    audio:null,

    efecto:null,

    next:"S022"

},

S022:{

    estado:"VALIDACIÓN",

    texto:`
Si habéis encontrado la tarjeta de acceso estáis en la ubicación definitiva!
Pulsad para activar la tarjeta.
`,

    imagen:null,

    boton:"ACTIVAR",

    audio:null,

    efecto:null,

    next:"S023"

},
S023:{

    estado:"ACCESO AUTORIZADO",

    texto:`
LUZ VERDE.

Mostrad la tarjeta de acceso al personal de la base.
Acceso concedido.
`,

    imagen:null,

    boton:"ACCESO CONCEDIDO",

    audio:null,

    efecto:null,

    next:null,

},

FINAL:{

    estado:"MISIÓN COMPLETADA",

   texto:`
FELIZ CUMPLEAÑOS ERIC!
ESTA CAJA ES PARA TI.
`,

    imagen:null,

    boton:null,

    audio:"aria_fin.m4a",

    efecto:null,

    next:null
}
};