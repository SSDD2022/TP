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
                         'Contiene un formulario de contacto, validando la obtención de algunos datos (función validarRequeridos)',
                         'Contiene un iframe (mapa)',
                         'Incluye íconos de Font Awesome a modo de referencia, no se vincularon a cuentas en particular. Tampoco se incluyó el número de celular en el contacto de WhatsApp',
                         'Se utilizaron fuentes de Google Fonts',
                         'Se trabajó responsividad, particularmente el formulario de contacto es totalmente responsivo (por ejemplo, se validó en notebook de 1.366px, celular apaisado de 777px y celular de 384px)',
                         'Se incorporó una transición en el menú de navegación',
                         'La estructura HTML se maquetó con grid',
                         'Está subido a GitHub, y se vinculó el repositorio a Netlify',
                        ],
            titCaracteristicas: 'Otras características',
            caracteristicas: ['Respecto del contenido, hicimos este sitio acompañando un emprendimiento vinculado a un integrante del equipo',
                              'Configuramos el favicon',
                              'Facilitamos el posicionamiento SEO enfatizando conceptos claves',
                              'Definimos el header y el footer una única vez',
                              'Distribuimos los archivos en carpetas, según su función'
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


