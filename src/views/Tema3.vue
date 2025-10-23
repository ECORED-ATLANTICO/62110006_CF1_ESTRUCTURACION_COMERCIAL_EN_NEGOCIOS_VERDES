<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Oferta verde
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1.	Concepto
    .mb-3

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2.	Clases
    .mb-3

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3.	Métodos
    .mb-3

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4.	Efectos
    .mb-3

    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5.	Tendencias
    .mb-3

    separador
    #t_3_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.6.	Proyección
    .mb-3

</template>

<script>
export default {
  name: 'Tema3',
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
