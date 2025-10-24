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

      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 4.
            span Tendencias de la oferta sostenible.. 
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/tema_3/img_12.svg', class="img-fluid d-none d-lg-block mb-3", alt="En la figura se describen tendencias de la oferta sostenible: Consumo consciente: mayor demanda de transparencia y ética. Digitalización educativa: uso de medios digitales para educar en sostenibilidad. Economía circular: preferencia por productos reutilizables y reciclables. Servicios sostenibles: expansión de sectores con bajo impacto ambiental.")
            img(src='@/assets/curso/temas/tema_3/img_13.svg', class="img-fluid d-block d-lg-none mb-3", alt="En la figura se describen tendencias de la oferta sostenible: Consumo consciente: mayor demanda de transparencia y ética. Digitalización educativa: uso de medios digitales para educar en sostenibilidad. Economía circular: preferencia por productos reutilizables y reciclables. Servicios sostenibles: expansión de sectores con bajo impacto ambiental.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.

    separador
    #t_3_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.6.	Proyección
    .mb-3

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La proyección de la oferta verde a mediano y largo plazo indica una transformación estructural en los mercados globales. Se espera que, hacia 2030, los productos y servicios sostenibles ocupen una porción significativa del comercio mundial, impulsados por la combinación de políticas ambientales estrictas, compromisos climáticos internacionales como el Acuerdo de París, y un consumidor cada vez más informado y exigente.
        
    .row.justify-content-center.align-items-star.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_3/img_15.png", class="img-fluid")
      
      .col-12.col-lg-9
        .cajon.color-acento-contenido.p-4.mb-3 
          p.mb-3 Sectores como las energías renovables, la movilidad eléctrica, la agricultura regenerativa y la economía circular tendrán un crecimiento acelerado. Este panorama también implica una transformación en el mercado laboral: según la Organización Internacional del Trabajo (OIT, 2023), los empleos verdes podrían superar los 100 millones de puestos a nivel global, contribuyendo no solo al desarrollo económico, sino también a la justicia social y la resiliencia ambiental.
          p.mb-3 Estas proyecciones plantean una oportunidad estratégica para empresas, gobiernos y comunidades, que deberán adaptar sus modelos productivos y sus capacidades para liderar en un entorno donde lo verde no será solo una opción, sino un estándar.
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
