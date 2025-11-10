<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Portafolio de productos y servicios verdes
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_8/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Contar con un portafolio verde permite a las empresas ofrecer soluciones que cuidan el planeta y satisfacen nuevas necesidades del mercado. Este enfoque fortalece la imagen responsable del negocio, impulsa la innovación sostenible y abre puertas a oportunidades con consumidores y aliados comprometidos con el futuro.

    separador

    #t_8_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 8.1.	Concepto
      .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_8/img_2.png", class="img-fluid")
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-3 Un portafolio de productos o servicios es el conjunto organizado de todos los bienes y/o servicios que una empresa ofrece al mercado. Este portafolio permite mostrar la diversidad de opciones disponibles para diferentes tipos de clientes, facilitando la gestión comercial y la toma de decisiones estratégicas.
        h5.mb-3 El portafolio de productos o servicios tiene estas características clave:
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-9.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-0
              ul.list-unstyled.mb-0
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
                  span Agrupa y clasifica los productos y servicios por categorías, líneas o familias.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
                  span Permite identificar qué productos generan más valor o impacto.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
                  span Se adapta según el tipo de cliente, canal de venta o tendencia del mercado.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
                  span Ayuda a mantener una oferta equilibrada entre productos ecológicos, innovadores y de alta demanda.
          .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/tema_8/img_3.png', class="img-fluid")
        .cita-decorada.mb-3 
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10
                p.cita-decorada__texto.mb-3 Un portafolio de productos y servicios verdes es el conjunto organizado de bienes y servicios que ofrece una empresa, todos alineados con principios de sostenibilidad ambiental, responsabilidad social y eficiencia económica. Este portafolio no solo busca generar ingresos, sino también reducir impactos negativos al medio ambiente y promover prácticas de consumo responsable.
                p.cita-decorada__texto.mb-0 En los negocios verdes, el portafolio se convierte en una herramienta estratégica para satisfacer las necesidades del consumidor consciente, diferenciando la marca y contribuyendo a los Objetivos de Desarrollo Sostenible (ODS).
    .bg_img_15.mb-0

      separador
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10   
          #t_8_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 8.2.	Estructura
          .mb-3
    
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_8/img_6.png", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-0 Un portafolio de productos y servicios verdes está estructurado para reflejar el compromiso ambiental y social de una empresa. Este portafolio no solo agrupa lo que se ofrece, sino que comunica el enfoque sostenible de forma estratégica y coherente. El portafolio suele incluir:
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1.mb-0
          .custom-slider.p-2.p-sm-3.mb-0(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--5.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Línea de productos ecológicos
                .tarjeta--slider__content.text-center.mb-3 Artículos físicos diseñados con criterios de sostenibilidad.
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--6.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Servicios responsables
                .tarjeta--slider__content.text-center Actividades o asesorías que promueven buenas prácticas ambientales.
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--7.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Información de valor agregado
                .tarjeta--slider__content.text-center Etiquetas verdes, certificaciones, origen de materiales, etc.
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--8.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Segmentación de oferta
                .tarjeta--slider__content.text-center Categorización según tipo de cliente, uso o impacto ambiental.
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--9.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Propuesta de valor diferenciadora
                .tarjeta--slider__content.text-center Muestra por qué es una oferta “verde” y cómo se alinea con los valores del consumidor consciente.
        .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_8/img_12.png', class="img-fluid")
    
    .bg_img_10.mb-0
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-3 Productos ecológicos
            p.mb-3 Bienes con diseño responsable, menor huella ecológica y ciclo de vida sostenible.
            h5.mb-0 Ejemplo.
            p.mb-0 <em>Shampoo</em> sólido biodegradable, bolsas de yute reutilizables.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_13.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-3 Servicios sostenibles
            p.mb-3 Ofertas que promueven el cuidado del entorno o uso eficiente de recursos.
            h5.mb-0 Ejemplo.
            p.mb-0 Talleres de huertas urbanas, servicios de compostaje doméstico.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_14.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-3 Paquetes combinados
            p.mb-3 Integración de productos + servicios con enfoque educativo o comunitario.
            h5.mb-0 Ejemplo.
            p.mb-0 <em>Kit</em> de limpieza natural + guía de uso y reducción de residuos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_15.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-3 Información ambiental
            p.mb-3 Datos adicionales que fortalecen la confianza del consumidor verde.
            h5.mb-0 Ejemplo.
            p.mb-0 Etiquetas ecológicas, certificaciones, trazabilidad del origen.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_16.png', class="img-fluid")
        
    separador

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10   
        #t_8_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.3.	Aplicabilidad
        .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_8/img_17.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 Diseñar y gestionar un portafolio verde requiere conocer las necesidades del cliente sostenible, los estándares ambientales vigentes y las posibilidades del entorno. A continuación, algunas formas de aplicarlo:
        .tarjeta.color-acento-contenido-5.p-4.rounded-3.mb-0
          ul.list-unstyled.mb-0
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
              span Diversificación responsable: ofrecer variedad sin comprometer la sostenibilidad.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
              span Innovación constante: mejorar productos y servicios para aumentar su valor ecológico.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
              span Educación al consumidor: explicar el impacto positivo de cada opción del portafolio.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#8C8FEC; font-size: 15px; line-height: 1.5;").mb-0
              span Evaluación periódica: medir y ajustar el portafolio según resultados ambientales y sociales.

    .row.justify-content-center.align-items-stretch.mb-5.g-4
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita--link.h-100
          .cita--link__caja.py-3.px-4.h-100
            .row.align-items-center.justify-content-center.h-100.position-relative.g-3
              .col-12.col-lg-2.cita--link__icono.text-center
                figure.mb-0
                  img(src='@/assets/curso/temas/tema_1/img_14.svg', class="img-fluid")
              .col-12.col-lg-6.text-center.text
                p.cita--link__subtitulo.mb-0 Ir al video Portafolio de productos y servicios:
                p.cita--link__titulo.mb-1 Portafolio de productos y servicios
                  strong 
              .col-12.col-lg-4.text-center.text-lg-end
                a.boton.color-acento-botones.d-inline-flex.align-items-center.gap-2(href="https://www.youtube.com/watch?v=DWjhZ4fNVuk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA" target="_blank")
                  span Ir al enlace
                  i.fas.fa-link
    
</template>

<script>
export default {
  name: 'Tema8',
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
