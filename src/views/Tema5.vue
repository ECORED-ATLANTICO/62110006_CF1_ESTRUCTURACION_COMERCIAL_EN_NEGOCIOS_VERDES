<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Productos y servicios verdes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 En un mundo que busca equilibrio entre desarrollo y sostenibilidad, los productos y servicios verdes se han vuelto esenciales. No se trata solo de una tendencia, sino de una respuesta consciente a los desafíos ambientales. Elegir lo verde es apostar por soluciones que reducen el impacto ecológico, promueven el bienestar social y abren camino a una economía más responsable con la vida y el futuro del planeta.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1.	Concepto
    .mb-3


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2.	Tipo
    .mb-3

    .tarjeta.color-acento-contenido-5.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
        .row.g-0.align-items-stretch
          .col-12.col-lg-5.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/tema_5/img_4.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
          .col-12.col-lg-7
            .p-4.p-lg-5.d-flex.align-items-center.h-100
              div
                p.mb-3 Los productos y servicios verdes se distinguen por una serie de atributos que los hacen especialmente valiosos dentro del marco del desarrollo sostenible. Estas características permiten no solo reducir el impacto ambiental, sino también promover prácticas responsables y generar confianza en los consumidores.
                p.mb-3 <b>Tipos de productos y servicios verdes:</b> 


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3.	Características
    .mb-3

    .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 6.
            span Atributos de los productos y servicios verdes. 
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/tema_5/img_20.svg', class="img-fluid d-none d-lg-block mb-3", alt="En la figura se describe que los productos y servicios sostenible se destacan por: Respetar ecosistemas y conservar recursos. Usar insumos y energía eficientemente. Incorporar tecnologías limpias e innovadoras. Contar con certificaciones ambientales. Ser transparentes sobre su impacto. Fomentar el bienestar social y la ética.")
            img(src='@/assets/curso/temas/tema_5/img_21.svg', class="img-fluid d-block d-lg-none mb-3", alt="En la figura se describe que los productos y servicios sostenible se destacan por: Respetar ecosistemas y conservar recursos. Usar insumos y energía eficientemente. Incorporar tecnologías limpias e innovadoras. Contar con certificaciones ambientales. Ser transparentes sobre su impacto. Fomentar el bienestar social y la ética.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.

</template>

<script>
export default {
  name: 'Tema5',
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
