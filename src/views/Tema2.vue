<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Demanda verde
    

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1.	Concepto
    .mb-3

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2.	Clases
    .mb-3

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
