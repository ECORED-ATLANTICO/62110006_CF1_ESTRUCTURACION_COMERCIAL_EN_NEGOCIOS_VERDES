<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Demanda verde
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-8
                p.cita-decorada__texto.mb-0 Cada vez más personas prefieren productos sostenibles que cuiden el medio ambiente y apoyen a comunidades responsables. La demanda verde ayuda a reducir la contaminación, proteger los recursos naturales y construir un futuro más sano para todos.
              .col-2.col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_2/img_2.png', class="cita-decorada__imagen-flotante-1")

    separador

    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          #t_2_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.1. Concepto
          .mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_2/img_4.png", class="img-fluid")
        .col-12.col-lg-6(data-aos="zoom-in-right")
          p.mb-3 La demanda verde se define como la preferencia o necesidad de productos y servicios que contribuyen a la reducción de impactos ambientales negativos, al tiempo que promueven el bienestar social y el desarrollo económico sostenible. Esta demanda refleja una conciencia creciente entre los consumidores y otros actores del mercado sobre la importancia de elegir opciones responsables con el medio ambiente. 
          .cajon.color-acento-contenido.p-3.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.mb-0 La demanda verde se caracteriza no solo por un interés ambiental sino también por un compromiso activo hacia prácticas de consumo responsable que fomentan la conservación de recursos naturales y la reducción de emisiones contaminantes. Según Kotler y Armstrong (2018), la demanda verde impulsa a las empresas a innovar en procesos productivos y modelos de negocio que integran criterios de sostenibilidad.

      separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2. Clases
          .mb-3
        .col-12.col-lg-10 
          p.mb-3 La demanda verde no es homogénea; varía según el grado de conocimiento, compromiso y comportamiento del consumidor frente a la sostenibilidad. Se pueden identificar varias clases:
     
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")  
        TabsA.mb-0.tarjeta-tabs-a.color-acento-botones
          .tarjeta.color-acento-contenido-5.p-3.h-100.tarjeta-tabs-a__tarjeta(titulo="Demanda latente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                h5.mb-3 Demanda latente 
                p.mb-0 se manifiesta cuando existe interés en productos amigables con el medio ambiente, pero aún hay limitaciones en la oferta o falta de información clara que permita a los consumidores tomar decisiones informadas. En esta etapa, el mercado verde aún está en formación.
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_2/img_5.svg', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-acento-contenido-5.p-3.h-100.tarjeta-tabs-a__tarjeta(titulo="Demanda emergente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                h5.mb-3 Demanda emergente
                p.mb-0 representa el crecimiento inicial del mercado verde, donde aumenta la conciencia ambiental y más consumidores comienzan a buscar productos sostenibles, aunque no siempre están dispuestos a pagar un precio más alto.
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_2/img_6.svg', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-acento-contenido-5.p-3.h-100.tarjeta-tabs-a__tarjeta(titulo="Demanda consolidada")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                h5.mb-3 Demanda consolidada
                p.mb-0 corresponde a un mercado donde los consumidores valoran activamente la sostenibilidad y buscan productos con certificaciones o atributos verdes claros, aceptando un precio premium a cambio de mayor responsabilidad ambiental.
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_2/img_7.svg', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-acento-contenido-5.p-3.h-100.tarjeta-tabs-a__tarjeta(titulo="Demanda creciente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                h5.mb-3 Demanda creciente
                p.mb-0 implica una expansión sostenida y acelerada del consumo de productos y servicios verdes, con diversificación y aumento en la oferta, penetración en diferentes sectores y aceptación masiva.
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_2/img_8.svg', class="img-fluid")(data-aos="fade-up")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10
                p.cita-decorada__texto.mb-0 Esta clasificación ayuda a las empresas y gobiernos a diseñar estrategias adaptadas al nivel de desarrollo del mercado y la conciencia del consumidor (Ottman, 2011).
   
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 1.
          span Clasificación de la demanda sostenible
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_2/img_10.svg', class="img-fluid d-none d-lg-block mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
          img(src='@/assets/curso/temas/tema_2/img_11.svg', class="img-fluid d-block d-lg-none mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3. Métodos
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_2/img_12.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 Para evaluar el alcance y evolución de la demanda verde, se emplean diversas metodologías:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario-20")
          div(titulo="Encuestas de opinión y mercado")
            p.mb-0 instrumentos directos que recopilan información sobre percepciones, actitudes y comportamientos de los consumidores en relación con productos verdes. Estas encuestas ayudan a identificar barreras y motivadores de compra sostenible.
          div(titulo="Análisis de ventas y cuotas de mercado")
            p.mb-0 seguimiento cuantitativo de productos con certificación ambiental o atributos sostenibles para determinar la participación y crecimiento en el mercado.
          div(titulo="Monitoreo digital")
            p.mb-0 uso de herramientas de análisis de datos y tendencias online para detectar patrones en búsquedas, opiniones y consumo de productos verdes, aprovechando big data e inteligencia artificial.
          div(titulo="Evaluación de imagen y reputación corporativa")
            p.mb-0 análisis del posicionamiento de marcas respecto a sostenibilidad, mediante estudios de percepción y confianza del consumidor.
        p.mb-0 Estos métodos combinados permiten obtener una visión integral de la demanda verde, facilitando la toma de decisiones estratégicas para impulsar su crecimiento (Peattie, 1995).
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 2.
          span Métodos de evaluación y seguimiento a la demanda.
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_2/img_13.svg', class="img-fluid d-none d-lg-block mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
          img(src='@/assets/curso/temas/tema_2/img_14.svg', class="img-fluid d-block d-lg-none mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> SENA, 2025.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4. Efectos
    .mb-3

    .tarjeta.color-secundario-10.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_2/img_15.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-3 El crecimiento de la demanda por productos y servicios sostenibles está transformando los mercados globales. Esta tendencia no solo genera nuevas oportunidades económicas, sino que también impulsa avances tecnológicos, políticas públicas y beneficios sociales y ambientales.
              p.mb-0 A continuación, se resumen los principales efectos de esta transformación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10           
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 2.
          span Efectos del incremento de la demanda verde.
        .tabla-a.mb-5(data-aos="zoom-in-right")
          table
            caption 
              p <b>Fuente:</b> Agencia Internacional de Energía IEA, 2023.
            thead
              tr
                th.col-3.col-lg-3 Impacto
                th.col-7.col-lg-7 Descripción resumida
            tbody
              tr
                td Impulso a la innovación tecnológica
                td Estimula el desarrollo de tecnologías y procesos más limpios y eficientes.
              tr
                td Ventajas competitivas
                td Permite a las empresas diferenciarse y ganar mercado mediante prácticas sostenibles.
              tr
                td Fomento de políticas públicas
                td Motiva a los gobiernos a crear normas e incentivos para negocios y consumo verde.
              tr
                td Beneficios sociales y ambientales
                td Genera empleo verde, protege ecosistemas y mejora la calidad de vida.

    separador

    .bg_img_3.mb-3
      #t_2_5.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.5. Tendencias
      .mb-3

      p.mb-5 Actualmente, la demanda verde está marcada por varias tendencias clave que muestran una evolución en las preferencias y comportamientos de los consumidores:
        
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1.mb-0
          .custom-slider.p-2.p-sm-3.mb-0(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--1
                .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold.rounded-3.p-2 Consumo consciente y transparente
                .tarjeta--slider__content.text-center.mb-3 los consumidores exigen mayor transparencia sobre el origen, producción y ciclo de vida de los productos, favoreciendo aquellos con certificaciones reconocidas y prácticas éticas.
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--2
                .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold.fst-italic 
                .tarjeta--slider__content.text-center 
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--3
                .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold.fst-italic 
                .tarjeta--slider__content.text-center 
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--4
                .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold.fst-italic 
                .tarjeta--slider__content.text-center 
        .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_2/img_21.png', class="img-fluid")
      p.mb-5 Estas tendencias reflejan un cambio cultural profundo hacia la sostenibilidad, consolidando la demanda verde como un componente estratégico para las empresas y la sociedad (Nielsen, 2022).
      
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 3.
            span Tendencias de la demanda sostenible.
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/tema_2/img_22.svg', class="img-fluid d-none d-lg-block mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
            img(src='@/assets/curso/temas/tema_2/img_23.svg', class="img-fluid d-block d-lg-none mb-3", alt="La figura, relaciona cinco herramientas para el análisis del entorno digital y cual es su aplicación en el marketing.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.

    separador

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10   
        #t_2_6.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.6. Proyección
        .mb-3
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-6.mb-lg-0.mb-3
        .bloque-texto-b.color-secundario-10.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según MarketsandMarkets (2023), el mercado global de productos verdes podría superar los 1.2 billones de dólares en 2030, con sectores como energías renovables, alimentos orgánicos y movilidad eléctrica liderando la expansión.
            i.fas.fa-quote-right
      .col-12.col-lg-4
        p.mb-3 Este crecimiento implica grandes oportunidades económicas, sociales y ambientales para las próximas generaciones.
        p.mb-0 Se proyecta que la demanda verde tendrá un crecimiento exponencial en las próximas décadas, sustentado en diversos factores:
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
