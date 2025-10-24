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
      .col-1.col-lg-1.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_3.svg", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-0 Estas acciones están en plena consonancia con los objetivos de desarrollo sostenible (ODS) planteados en la Agenda 2030 de la Organización de las Naciones Unidas (ONU), especialmente con aquellos que promueven la acción por el clima (ODS 13), la vida de ecosistemas terrestres (ODS 15) y la producción y consumo responsables (ODS 12).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.cita-decorada__texto Además del marco normativo nacional, como la Política Nacional de Producción y Consumo Sostenible (PNPCS) y la Resolución 196 de 2018, los negocios verdes en Colombia también pueden apoyarse en estándares internacionales de gestión ambiental, como la norma ISO 14001. Esta norma, reconocida a nivel mundial, proporciona una estructura para que las organizaciones identifiquen, gestionen y mejoren continuamente su desempeño ambiental, lo cual es coherente con los principios de los negocios verdes.
      .col-8.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_1/img_5.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-0 La implementación de la ISO 14001 permite a las empresas demostrar su compromiso con la protección del medio ambiente, cumplir con la legislación aplicable y fortalecer su reputación ante consumidores y mercados que valoran la sostenibilidad. Esto refuerza el papel de Colombia como referente regional en la promoción de emprendimientos verdes, en concordancia con los Objetivos de Desarrollo Sostenible y la Agenda 2030.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2.	Oportunidades
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_1/img_7.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 El desarrollo de los negocios verdes ofrece amplias oportunidades económicas en sectores estratégicos como la agricultura ecológica, el ecoturismo, las energías renovables, el biocomercio y la reutilización de residuos. Estas actividades no solo fomentan la innovación y el emprendimiento, sino que también contribuyen activamente a la protección del medio ambiente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_8.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 Un ejemplo representativo es la producción de cosméticos naturales elaborados con plantas nativas, que ha tenido una alta aceptación en los mercados internacionales, dinamizando las economías locales y generando empleo sostenible.
        p.mb-0 A continuación, se presenta una tabla que resume algunas de las principales oportunidades que ofrecen los negocios verdes en el contexto colombiano:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10           
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          span Oportunidades que ofrecen los negocios verdes en Colombia.
        .tabla-a.mb-5(data-aos="zoom-in-right")
          table
            caption 
              p <b>Fuente:</b> Adaptada de MinAmbiente, 2023 y ONU, 2015.
            thead
              tr
                th.col-3.col-lg-3 Sector o actividad
                th.col-5.col-lg-5 Oportunidad económica
                th.col-4.col-lg-4 Beneficio ambiental y social
            tbody
              tr
                td Agricultura ecológica	
                td Comercialización de productos orgánicos y certificados a nivel nacional e internacional.
                td Uso sostenible del suelo, reducción de agroquímicos, generación de empleo rural.
              tr
                td Turismo de naturaleza (ecoturismo)
                td Creación de rutas y destinos turísticos sostenibles.
                td Conservación de ecosistemas y patrimonio natural, participación de comunidades locales.
              tr
                td Energías alternativas
                td Inversión en energías renovables (solar, eólica, biomasa).
                td Disminución de gases de efecto invernadero, acceso a energía limpia en zonas rurales.
              tr
                td Biocomercio
                td Desarrollo de productos derivados de la biodiversidad (cosméticos, alimentos funcionales).
                td Aprovechamiento responsable de la biodiversidad, impulso a la economía local.
              tr
                td Reutilización de residuos
                td Emprendimientos de reciclaje, economía circular, productos a partir de materiales usados.
                td Reducción de residuos, ahorro de materias primas, conciencia ambiental.
              tr
                td Moda y diseño sostenible
                td Producción de ropa ecológica con fibras naturales o recicladas.
                td Disminución de la contaminación textil, consumo responsable.

    separador

    .bg_img_1.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10  
          #t_1_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.3 Tendencias del mercado
          .mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-3 Las tendencias del mercado verde o sostenible reflejan una transformación profunda en la forma en que las empresas y los consumidores abordan la sostenibilidad. A continuación, se presentan las principales tendencias que están moldeando este panorama:
          p.mb-0 Principales tendencias del mercado verde o sostenible:

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
