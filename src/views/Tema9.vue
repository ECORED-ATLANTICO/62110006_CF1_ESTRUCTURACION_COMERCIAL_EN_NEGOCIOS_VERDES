<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 <em>Brochure</em>
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-9.p-4
            .row.justify-content-center.align-items-center
              .col-2.col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_9/img_3.png', class="cita-decorada__imagen-flotante-2")
              .col-10.col-lg-8
                p.cita-decorada__texto.mb-0 Por ejemplo, una tienda que vende productos a granel sin empaques plásticos aplica un formato comercial verde al reducir residuos desde la experiencia de compra.
              
    separador

    #t_9_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 9.1 Concepto
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_9/img_4.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-5 Un <em>brochure</em> (o folleto) es una herramienta visual de comunicación utilizada para presentar de forma resumida y atractiva la información principal de un producto, servicio o empresa. Su objetivo es captar la atención del público, generar interés y facilitar la comprensión del valor que se ofrece.
        p.mb-0 En el contexto de los negocios verdes, el <em>rochure</em> sirve como medio para informar sobre los beneficios ecológicos, principios sostenibles y propuesta de valor ambiental de la oferta. Puede incluir imágenes, frases impactantes, datos sobre certificaciones, y llamados a la acción conscientes, como “elige productos responsables” o “únete al consumo verde”.

    bg_img_12
    separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        #t_7_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right").mb-3 9.2 Tipos
      .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-3 Los formatos comerciales verdes pueden variar según su diseño, tamaño, canal de venta o modelo operativo. A continuación, se presentan algunos de los más comunes:
        h5.mb-0 Tipos de portafolio y su adaptación verde:

    


</template>

<script>
export default {
  name: 'Tema9',
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
