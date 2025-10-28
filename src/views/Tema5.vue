<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Productos y servicios verdes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un mundo que busca equilibrio entre desarrollo y sostenibilidad, los productos y servicios verdes se han vuelto esenciales. No se trata solo de una tendencia, sino de una respuesta consciente a los desafíos ambientales. Elegir lo verde es apostar por soluciones que reducen el impacto ecológico, promueven el bienestar social y abren camino a una economía más responsable con la vida y el futuro del planeta.

    .bg_img_9.mb-0

      separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0
          #t_5_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.1 Concepto
          .mb-3
      
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_5/img_3.png", class="img-fluid")
        .col-12.col-lg-7.mb-3(data-aos="zoom-in-right")
          p.mb-3 Los productos y servicios verdes se definen como aquellos que, durante su diseño, producción y comercialización, minimizan el impacto ambiental negativo y promueven la sostenibilidad. Estos productos priorizan la conservación de los recursos naturales, la reducción de residuos, emisiones contaminantes y la responsabilidad social en toda su cadena de valor (Peattie & Charter, 2003). Además, responden a la creciente demanda de consumidores conscientes, quienes valoran el compromiso ambiental y ético de las empresas.
          .row.justify-content-center.align-items-center.mb-0
            .col-2.col-lg-2.d-none.d-lg-block(data-aos="zoom-in-right")
              figure
                img(src="@/assets/curso/temas/tema_5/img_4.svg", class="img-fluid")
            .col-12.col-lg-10(data-aos="zoom-in-right")
              p.mb-0 En cuanto a los servicios verdes, estos se caracterizan por prácticas sostenibles que incluyen la eficiencia en el uso de recursos, la reducción de la huella ambiental y la promoción de actividades que favorecen la conservación del entorno (OECD, 2021).
        .col-12.col-lg-10(data-aos="zoom-in-right")
          p.mb-0 Como ejemplo un detergente biodegradable, fabricado con ingredientes naturales y envasado con materiales reciclados, es un producto verde. De manera similar, un servicio verde podría ser un sistema de transporte público eléctrico que utilice energías renovables para su funcionamiento.

      separador
    
      #t_5_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.2 Tipo
      .mb-3

      .tarjeta.color-acento-contenido-5.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
        .row.g-0.align-items-stretch
          .col-12.col-lg-5.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/tema_5/img_5.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
          .col-12.col-lg-7
            .p-4.p-lg-5.d-flex.align-items-center.h-100
              div
                p.mb-3 Los productos y servicios verdes se distinguen por una serie de atributos que los hacen especialmente valiosos dentro del marco del desarrollo sostenible. Estas características permiten no solo reducir el impacto ambiental, sino también promover prácticas responsables y generar confianza en los consumidores.
                h5.mb-0 Tipos de productos y servicios verdes:
        
    .bg_img_10.mb-0
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Productos reciclables 
            p.mb-3 Bienes que pueden ser reprocesados para crear nuevos productos tras su uso.
            p.mb-0 <B>Ejemplo de producto verde:</B> botellas de vidrio retornables.
            p.mb-0 <B>Ejemplo de servicio verde:</B> servicio de reciclaje de residuos sólidos urbanos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Productos biodegradables
            p.mb-3 Se descomponen naturalmente sin dañar el ambiente por acción de microorganismos.
            p.mb-0 <B>Ejemplo de producto verde:</B> bolsas hechas de almidón de maíz.
            p.mb-0 <B>Ejemplo de servicio verde:</B> gestión de residuos orgánicos en restaurantes o empresas.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Productos reutilizables
            p.mb-3 Diseñados para múltiples usos, reduciendo la generación de basura.
            p.mb-0 <B>Ejemplo de producto verde:</B> bolsas de tela reutilizables para compras.
            p.mb-0 <B>Ejemplo de servicio verde:</B> alquiler de envases retornables para bebidas o alimentos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Productos orgánicos
            p.mb-3 Producidos sin pesticidas ni químicos sintéticos.
            p.mb-0 <B>Ejemplo de producto verde:</B> frutas y verduras orgánicas certificadas.
            p.mb-0 <B>Ejemplo de servicio verde:</B> servicio de catering con alimentos orgánicos y locales.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_11.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Productos de bajo impacto
            p.mb-3 Fabricados con procesos que reducen emisiones y consumo de recursos.
            p.mb-0 <B>Ejemplo de producto verde:</B> ropa hecha con algodón reciclado.
            p.mb-0 <B>Ejemplo de servicio verde:</B> auditorías energéticas para mejorar la eficiencia de edificios.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_12.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Servicios de movilidad sostenible
            p.mb-3 Transporte que reduce la huella de carbono y utiliza energías limpias.
            p.mb-0 <B>Ejemplo de producto verde:</B> vehículo eléctrico para uso personal (producto/activo).
            p.mb-0 <B>Ejemplo de servicio verde:</B> servicio de bicicletas compartidas eléctricas en ciudad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_13.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Servicios ecoturísticos
            p.mb-3 Actividades que conservan la biodiversidad y benefician comunidades locales.
            p.mb-0 <B>Ejemplo de producto verde:</B> Souvenirs hechos con materiales reciclados (producto).
            p.mb-0 <B>Ejemplo de servicio verde:</B> tours guiados en reservas naturales con prácticas sustentables.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_14.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Servicios de eficiencia energética
            p.mb-3 Soluciones para optimizar el consumo energético en hogares o empresas.
            p.mb-0 <B>Ejemplo de producto verde:</B> panel solar fotovoltaico para autoconsumo.
            p.mb-0 <B>Ejemplo de servicio verde:</B> instalación y mantenimiento de sistemas de energía renovable.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_15.png', class="img-fluid")

    .bg_img_11.mb-0
      
      separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0
          #t_5_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.3 Características
          .mb-3
          
      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_5/img_16.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-3 Los productos y servicios verdes se distinguen por una serie de atributos que los hacen especialmente valiosos dentro del marco del desarrollo sostenible. Estas características permiten no solo reducir el impacto ambiental, sino también promover prácticas responsables y generar confianza en los consumidores.
          TabsA.mb-0.tarjeta-tabs-a.color-acento-botones.custom-2
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Sostenibilidad ambiental")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-6.col-xxl-5.mb-4.mb-xl-0
                  h5.mb-3 Sostenibilidad ambiental 
                  p.mb-0 Se desarrollan utilizando procesos y materiales que respetan los ecosistemas y promueven la conservación de los recursos naturales a largo plazo.
                .col-8.col-lg-4.col-xxl-5.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_17.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Ecoeficiencia")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-5.mb-4.mb-lg-0
                  h5.mb-3 Ecoeficiencia
                  p.mb-0 optimizan el uso de insumos y energía para maximizar resultados con el menor impacto posible.
                .col-8.col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_18.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Innovación ambiental")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-5.mb-4.mb-lg-0
                  h5.mb-3 Innovación ambiental
                  p.mb-0 incorporan tecnologías limpias, procesos innovadores o materiales alternativos que minimizan la huella ecológica.
                .col-8.col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_19.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Certificación y cumplimiento normativo")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-5.mb-4.mb-lg-0
                  h5.mb-3 Certificación y cumplimiento normativo
                  p.mb-0 Generalmente cuentan con certificaciones oficiales (como FSC, ISO 14001, EU Ecolabel) que avalan su desempeño ambiental.
                .col-8.col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_20.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Transparencia")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-5.mb-4.mb-lg-0
                  h5.mb-3 Transparencia
                  p.mb-0 Proveen información clara y accesible sobre sus componentes, métodos de producción y posibles impactos.
                .col-8.col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_21.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Responsabilidad social")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-5.mb-4.mb-lg-0
                  h5.mb-3 Responsabilidad social
                  p.mb-0 Consideran el bienestar de las comunidades involucradas y promueven prácticas éticas en toda su cadena de valor.
                .col-8.col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema_5/img_22.svg', class="img-fluid")(data-aos="fade-up")
          
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          p.mb-0 Por ejemplo, una empresa que produce calzado utilizando residuos plásticos recuperados del océano y que además trabaja en colaboración con comunidades costeras para su manufactura ejemplifica estas características al fomentar tanto la innovación ambiental como la responsabilidad social. Agencias de turismo sostenible que trabajan en conjunto con comunidades locales para promover actividades ecoturísticas que generan ingresos justos y preservan el patrimonio natural y cultural.
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 6.
            span Atributos de los productos y servicios verdes. 
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/tema_5/img_23.svg', class="img-fluid d-none d-lg-block mb-3")
            img(src='@/assets/curso/temas/tema_5/img_24.svg', class="img-fluid d-block d-lg-none mb-3")
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
