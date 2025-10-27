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
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-9.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
            .cajon.color-acento-contenido.p-3.mb-0
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10
                  p.mb-0 
          .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/tema_8/img_3.png', class="img-fluid")
        .cita-decorada.mb-3 
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-10
                p.cita-decorada__texto.mb-3 Un portafolio de productos y servicios verdes es el conjunto organizado de bienes y servicios que ofrece una empresa, todos alineados con principios de sostenibilidad ambiental, responsabilidad social y eficiencia económica. Este portafolio no solo busca generar ingresos, sino también reducir impactos negativos al medio ambiente y promover prácticas de consumo responsable.
                p.cita-decorada__texto.mb-0 En los negocios verdes, el portafolio se convierte en una herramienta estratégica para satisfacer las necesidades del consumidor consciente, diferenciando la marca y contribuyendo a los Objetivos de Desarrollo Sostenible (ODS).
    
    .bg_img_12.mb-0
    separador
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10   
        #t_8_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.2.	Estructura
        .mb-3
    
    .bg_img_5.mb-0
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
                .tarjeta--1.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Línea de productos ecológicos
                .tarjeta--slider__content.text-center.mb-3 Artículos físicos diseñados con criterios de sostenibilidad.

              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--2.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Servicios responsables
                .tarjeta--slider__content.text-center Actividades o asesorías que promueven buenas prácticas ambientales.

              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--3.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Información de valor agregado
                .tarjeta--slider__content.text-center Etiquetas verdes, certificaciones, origen de materiales, etc.

              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--4.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Segmentación de oferta
                .tarjeta--slider__content.text-center Categorización según tipo de cliente, uso o impacto ambiental.
              
              .tarjeta.tarjeta--blanca-1.h-95
                .tarjeta--4.mb-3
                .tarjeta--slider__title.mb-3.text-center.fw-bold.p-2
                  span.texto-resaltado Propuesta de valor diferenciadora
                .tarjeta--slider__content.text-center Muestra por qué es una oferta “verde” y cómo se alinea con los valores del consumidor consciente.
        .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_8/img_12.png', class="img-fluid")
     
    separador
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10   
        #t_8_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.3.	Aplicabilidad
        .mb-3

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
