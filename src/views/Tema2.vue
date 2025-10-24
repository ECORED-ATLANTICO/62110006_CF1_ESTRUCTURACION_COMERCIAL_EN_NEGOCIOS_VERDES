<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Demanda verde
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
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
            .h2(data-aos="fade-right") 2.1.	Concepto
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_2/img_4.png", class="img-fluid")
        .col-12.col-lg-6(data-aos="zoom-in-right")
          p.mb-3 La demanda verde se define como la preferencia o necesidad de productos y servicios que contribuyen a la reducción de impactos ambientales negativos, al tiempo que promueven el bienestar social y el desarrollo económico sostenible. Esta demanda refleja una conciencia creciente entre los consumidores y otros actores del mercado sobre la importancia de elegir opciones responsables con el medio ambiente. 
          .cajon.color-acento-contenido.p-4.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.mb-0 La demanda verde se caracteriza no solo por un interés ambiental sino también por un compromiso activo hacia prácticas de consumo responsable que fomentan la conservación de recursos naturales y la reducción de emisiones contaminantes. Según Kotler y Armstrong (2018), la demanda verde impulsa a las empresas a innovar en procesos productivos y modelos de negocio que integran criterios de sostenibilidad.

      separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2.	Clases
          .mb-3
        .col-12.col-lg-10 
          p.mb-0 La demanda verde no es homogénea; varía según el grado de conocimiento, compromiso y comportamiento del consumidor frente a la sostenibilidad. Se pueden identificar varias clases:


    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3.	Métodos
    .mb-3

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4.	Efectos
    .mb-3

    separador

    #t_2_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.5.	Tendencias
    .mb-3

    separador

    #t_2_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.6.	Proyección
    .mb-3
    
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
