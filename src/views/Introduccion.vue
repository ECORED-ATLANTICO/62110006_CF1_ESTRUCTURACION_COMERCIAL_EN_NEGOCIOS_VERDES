<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 En la actualidad es importante desarrollar y participar en negocios que respeten el medioambiente y generen beneficios sociales y económicos. A través del estudio de los negocios verdes, se conocerá qué son, qué leyes los respaldan en Colombia y cuáles son las oportunidades actuales para emprender con responsabilidad y sostenibilidad.
          p.mb-3 También se abordarán temas clave como la demanda y la oferta verde, analizando cómo piensan los consumidores conscientes, qué productos prefieren y cómo las empresas pueden responder a esas nuevas necesidades. Además, se aprenderá a identificar las tendencias del mercado, los tipos de clientes verdes y sus características.
          .cajon.color-adicional-1.p-2.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-11
                p.mb-0 El aprendiz tendrá la oportunidad de conocer productos y servicios sostenibles, aprenderá a darles valor agregado y a presentarlos de forma atractiva mediante formatos comerciales verdes, portafolios y brochures. Esto le permitirá desarrollar competencias para crear o apoyar proyectos que cuiden el planeta y aporten al bienestar de su comunidad.

    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Comercio sostenible

</template>

<script>
export default {
  name: 'Introduccion',
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
