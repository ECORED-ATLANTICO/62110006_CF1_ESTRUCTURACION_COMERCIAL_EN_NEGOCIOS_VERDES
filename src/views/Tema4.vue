<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Perfil del cliente verde
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1.	Concepto
    .mb-3

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2.	Caracterización
    .mb-3

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3.	Tipologías
    .mb-3


</template>

<script>
export default {
  name: 'Tema4',
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
