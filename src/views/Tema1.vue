<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Negocios verdes
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los negocios verdes son formas de actividad económica orientadas a la oferta de bienes y servicios que aportan beneficios al medio ambiente. Estos negocios adoptan prácticas responsables en lo ambiental, social y económico, integrando una visión basada en el ciclo de vida del producto o servicio.
        br
        br
        p.mb-0 El Ministerio de Ambiente y Desarrollo Sostenible de Colombia (MinAmbiente) los describe como emprendimientos que no solo ofrecen productos o servicios con impactos positivos sobre el entorno, sino que también promueven acciones sostenibles que ayudan a preservar los recursos naturales como base del desarrollo territorial sostenible (MinAmbiente, 2014).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-0 Asimismo, este tipo de negocios se alinean con los principios del desarrollo sostenible, impulsando una economía con bajas emisiones de carbono, un uso eficiente de los recursos naturales y una inclusión social efectiva.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Marco referencial y legal en Colombia
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 En Colombia, el desarrollo de los negocios verdes está respaldado por un conjunto de políticas y normativas que integran el cuidado del medio ambiente con la dimensión económica y social del desarrollo sostenible. Uno de los principales instrumentos que orienta esta visión es la Política nacional de producción y consumo sostenible (PNPCS), formulada en el año 2010 por el Ministerio de Ambiente y Desarrollo Sostenible. Esta política busca promover prácticas de producción más limpias, el uso eficiente de los recursos y el consumo responsable, sentando las bases para el fomento de iniciativas empresariales ambientalmente sostenibles.
        p.mb-0 En Colombia, el desarrollo de los negocios verdes está respaldado por un conjunto de políticas y normativas que integran el cuidado del medio ambiente con la dimensión económica y social del desarrollo sostenible. Uno de los principales instrumentos que orienta esta visión es la Política nacional de producción y consumo sostenible (PNPCS), formulada en el año 2010 por el Ministerio de Ambiente y Desarrollo Sostenible. Esta política busca promover prácticas de producción más limpias, el uso eficiente de los recursos y el consumo responsable, sentando las bases para el fomento de iniciativas empresariales ambientalmente sostenibles.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_3.svg", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-0 Estas acciones están en plena consonancia con los objetivos de desarrollo sostenible (ODS) planteados en la Agenda 2030 de la Organización de las Naciones Unidas (ONU), especialmente con aquellos que promueven la acción por el clima (ODS 13), la vida de ecosistemas terrestres (ODS 15) y la producción y consumo responsables (ODS 12).
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
