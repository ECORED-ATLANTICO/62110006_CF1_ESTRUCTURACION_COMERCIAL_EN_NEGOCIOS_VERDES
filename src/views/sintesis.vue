<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center
      .col-12.col-lg-2.mb-lg-0.mb-3
        img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-10
        p El componente Comercio sostenible te permitirá comprender qué son los negocios verdes, su marco legal en Colombia, y las oportunidades y tendencias que los rodean. Aprenderás a identificar y analizar la demanda y la oferta verde, sus métodos, efectos y proyecciones. También reconocerás el perfil del cliente verde y sus características, conocerás los tipos de productos y servicios sostenibles, y comprenderás cómo generar valor agregado. Finalmente, explorarás formatos comerciales responsables, construirás portafolios sostenibles y aprenderás a diseñar brochures para comunicar con impacto en mercados comprometidos con el medioambiente.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
