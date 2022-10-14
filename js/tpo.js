const { createApp } = Vue
createApp({
    data(){
        return{
            titulo: 'TPO Comisión 22527 (Python-Front end, 2do cuatrimetre 2022)',
            titEquipo: 'Equipo',
            equipo: [ { participante: 'Adrián Buscaglia',
                        rol:          'desarrollo'
                      },
                      { participante: 'Silvia Durán',
                        rol:          'desarrollo y contacto con el docente'
                      },
                      { participante: 'Víctor Sequera',
                        rol:          'desarrollo y product owner'
                      }
                    ],
            titTematica: 'Temática',
            tematica: ['Venta de ropa'],
            titRequisitos: 'Requisitos',
            requisitos: ['Tiene 4 páginas html', 
                         'Se utilizaron etiquetas semánticas',
                         '(pendiente) Contiene un formulario de contacto, validando algunos datos requeridos (Javascript)',
                         'Contiene un iframe (mapa)',
                         'Incluye íconos de Font Awesome a modo de referencia, no se vincularon a cuentas personales. También se eliminó el número de celular en el contacto por WhatsApp',
                         'Se utilizaron fuentes de Google Fonts',
                         'Se trabajó responsividad, particularmente el formulario de contacto es totalmente responsive (diferencia "notebook", "celular apaisado" y "celular en vertical")',
                         'Se incorporó una transición en el menú de navegación',
                         'La estructura HTML se maquetó con grid',
                         'Está subido a GitHub, y se vinculó el repositorio a Netlify',
                        ],
            titCaracteristicas: 'Características adicionales',
            caracteristicas: ['Respecto del contenido, acompañamos un emprendimiento vinculado a un participante del equipo',
                              'Configuramos el favicon',
                              'Distribuimos los archivos en carpetas, según sus características'
                             ],
            titLinks: 'Links',
            links: [{ sitio: 'Repositorio', 
                      url:   'https://github.com/SSDD2022/TP'
                    },
                    { sitio: 'Sitio', 
                      url:   'https://maviris.netlify.app/index.html'
                    }
                   ],
            titFuera: 'No realizado',
            fueraScope: ['Consumir una API Rest desde JavaScript',
                          'No se utilizaron frameworks de CSS (opcional)',
                          'No pudimos trabajar en forma colaborativa con GitHub'
                        ],
        }
    }
}).mount('#app')


