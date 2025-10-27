<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Formatos comerciales verdes

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_7/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 Los formatos comerciales verdes son importantes porque promueven el consumo responsable y la sostenibilidad. Reducen el impacto ambiental en cada etapa del proceso comercial. Además, responden a una creciente demanda de consumidores conscientes y comprometidos.


      separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        #t_7_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.1 Concepto
        .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_7/img_2.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 Los formatos comerciales verdes son modelos de negocio que integran prácticas sostenibles en su funcionamiento, imagen y oferta de productos. Su objetivo es minimizar el impacto ambiental, fomentar el consumo responsable y promover estilos de vida sostenibles.
          p.mb-3 Estos formatos no solo venden productos, también transmiten valores ecológicos, educación ambiental y compromiso con la comunidad. Incluyen desde tiendas físicas hasta plataformas digitales con enfoque ecológico.
      
      .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-8
                p.cita-decorada__texto.mb-0 Por ejemplo, una tienda que vende productos a granel sin empaques plásticos aplica un formato comercial verde al reducir residuos desde la experiencia de compra.
              .col-2.col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_7/img_3.png', class="cita-decorada__imagen-flotante-2")

    .bg_img_12.mb-0
       separador

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        #t_7_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.2.	Tipos
        .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_7/img_5.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 Los formatos comerciales verdes pueden variar según su diseño, tamaño, canal de venta o modelo operativo. A continuación, se presentan algunos de los más comunes:
        h5.mb-0 Tipos de formatos comerciales verdes:


    separador

    #t_7_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.3.	Clasificación
      .mb-3

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    .tarjeta.color-acento-contenido-5.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_7/img_12.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-3 Los formatos comerciales verdes pueden organizarse según diversos criterios estratégicos. Esta clasificación ayuda a comprender cómo se estructuran en función del canal de venta, el impacto ambiental, la escala de operación y la interacción con el cliente, permitiendo desarrollar modelos de negocio sostenibles y coherentes. Los formatos comerciales verdes pueden clasificarse desde distintos enfoques:

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10     
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 6.
            span Clasificación según enfoque de formatos comerciales verdes.
          .tabla-a.mb-5(data-aos="zoom-in-right")
            table
              caption 
                p <b>Fuente:</b> Adaptada de Kotler, P. & Keller, K., 2016.
              thead
                tr
                  th.col-3.col-lg-3 Criterio de Clasificación
                  th.col-5.col-lg-5 Categorías
                  th.col-4.col-lg-4 Ejemplo
              tbody
                tr
                  td Canal de venta	
                  td Físico / Digital / Híbrido.
                  td Tienda física ecológica vs. <em>e-commerce</em> sostenible
                tr
                  td Enfoque ambiental
                  td Bajo impacto / Cero residuos / Circular
                  td Tienda que reutiliza empaques o aplica economía circular
                tr
                  td Escala de operación
                  td Local / Regional / Nacional / Internacional
                  td Mercado campesino local vs. marca verde de alcance global
                tr
                  td Relación con el consumidor
                  td Autoservicio / Experiencial / Educativo
                  td Espacios donde el cliente puede aprender sobre reciclaje o producción limpia
                

</template>

<script>
export default {
  name: 'Tema7',
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
