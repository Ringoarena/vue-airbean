<template>
  <main class="about">
    <h1>Vårt kaffe</h1>
    <h4>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h4>
    <p>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato.
      So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper.
      Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced.
      At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper.
      In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste,
      seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
    </p>
    <figure>
      <img src="@/assets/graphics/eva-cortado.jpg" alt="Eva Cortado, VD & Grundare" />
      <h3>Eva Cortado</h3>
      <p>VD & Grundare</p>
    </figure>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

main,
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure {
  justify-content: space-between;
  h3,
  p {
    margin: 0;
    padding: 0;
  }
}

.about {
  background-color: #f3e4e1;
  padding: 1rem;
  * {
    font-family: "Work Sans", sans-serif;
    margin: 1rem;
  }

  h1 {
    align-self: flex-start;
    font-weight: 700;
    line-height: 120%;
    h3 {
      font-family: "PT Serif", serif;
    }
  }
  p {
    font-size: 0.9rem;
  }
  figure {
    justify-content: space-between;
    h3,
    p {
      margin: 0;
      padding: 0;
    }
  }
  img {
    border-radius: 50px;
  }
}
</style>