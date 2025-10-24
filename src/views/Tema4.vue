<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Perfil del cliente verde

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_4/img_2.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4
        p.mb-0 El cliente verde se ha convertido en un referente dentro del nuevo modelo de consumo responsable. Su forma de actuar en el mercado se basa en principios éticos, sociales y ambientales. A continuación, se desarrolla su concepto, principales rasgos y las tipologías que lo representan, organizadas alfabéticamente para facilitar su comprensión.
    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1.	Concepto
    .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_3.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          p.mb-3 El cliente verde es un consumidor consciente que valora la sostenibilidad en sus decisiones de compra. Más allá de satisfacer una necesidad personal, busca minimizar el impacto ambiental y promover una economía más justa. Este perfil valora la transparencia en los procesos, el respeto por el entorno y el compromiso social de las marcas.
          p.mb-3 Por ejemplo, una persona que adquiere frutas orgánicas de pequeños productores locales para apoyar economías rurales y evitar agroquímicos. Este tipo de cliente tiene una mirada crítica hacia los modelos tradicionales de consumo y se involucra activamente en prácticas que favorezcan el equilibrio entre desarrollo y sostenibilidad.
          .cajon.color-acento-contenido.p-4.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.mb-0 Como señalan Gómez y Castaño (2020), el consumidor verde no solo compra diferente, también piensa y actúa desde una lógica transformadora.
      
    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2.	Caracterización
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-1.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_4.png", class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 El consumidor verde no solo se interesa por la calidad y el precio de los productos, sino que además incorpora criterios éticos y ambientales en sus decisiones de compra. Su comportamiento refleja una creciente conciencia sobre el impacto que el consumo tiene en el planeta y en las generaciones futuras. A continuación, se presentan algunas de las principales características que definen a este grupo de consumidores:

    .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
            h5 Figura 5.
            span Valores del cliente verde. 
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/tema_4/img_5.svg', class="img-fluid d-none d-lg-block mb-3", alt="En la figura  se describen valores y motivaciones del cliente verde: Principios clave: Cuidado ambiental. Ética. Justicia social. Compran productos que: Tienen impacto positivo. Provienen de marcas éticas. No dañan el ambiente ni vulneran derechos. Prefieren marcas con: Equidad. Transparencia. Respeto por los derechos humanos.")
            img(src='@/assets/curso/temas/tema_4/img_6.svg', class="img-fluid d-block d-lg-none mb-3", alt="En la figura  se describen valores y motivaciones del cliente verde: Principios clave: Cuidado ambiental. Ética. Justicia social. Compran productos que: Tienen impacto positivo. Provienen de marcas éticas. No dañan el ambiente ni vulneran derechos. Prefieren marcas con: Equidad. Transparencia. Respeto por los derechos humanos.")
          figcaption(data-aos="zoom-in-right") 
            <b>Fuente:</b> SENA, 2025.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3.	Tipologías
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10           
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 4.
          span Tipos de cliente verde.
        .tabla-a.mb-5(data-aos="zoom-in-right")
          table
            caption 
              p <b>Fuente:</b> Adaptada de Kotler y Armstrong, 2018; Ottman, 2011 y PNUMA, 2021.
            thead
              tr
                th.col-3.col-lg-3 Característica
                th.col-5.col-lg-5 Descripción
                th.col-4.col-lg-4 Ejemplo
            tbody
              tr
                td Activismo ecológico	
                td Participa en campañas, movimientos o acciones para defender el medio ambiente.
                td Firma peticiones para proteger reservas naturales.
              tr
                td Búsqueda de información
                td Investiga antes de comprar, verificando sellos, etiquetas o certificaciones.
                td Consulta si un producto es libre de crueldad animal.
              tr
                td Conciencia social
                td Se interesa por las condiciones laborales y el impacto social del producto.
                td Prefiere marcas que apoyan comunidades vulnerables.
              tr
                td Educación ambiental
                td Tiene conocimientos sobre sostenibilidad y busca aprender más sobre el tema.
                td Asiste a talleres o sigue cuentas educativas en redes sociales.
              tr
                td Preferencia por lo local
                td Da prioridad a productos fabricados en su región o país.
                td Compra en mercados de agricultores locales.
              tr
                td Reducción de residuos
                td Minimiza su generación de basura a través del consumo responsable.
                td Lleva su propia bolsa reutilizable al supermercado.
              tr
                td Reutilización y reciclaje
                td Adopta hábitos de reaprovechamiento de materiales y objetos.
                td Transforma frascos de vidrio en envases para alimentos.


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
