<template>
  <div id="resume">
    <div id="resume-pic"></div>
    <div id="section1">
      <h2>Ted Ahlberg</h2>
      <h3>Software Developer</h3>
      <div class="h-line"></div>
      <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit ante sed venenatis
        facilisis. Nulla ullamcorper tellus diam, consectetur consectetur elit suscipit vel. Sed efficitur nunc
        fringilla, pulvinar ligula a, aliquet ante. Duis ipsum sem, convallis id eleifend vitae, bibendum at sapien.
        Phasellus malesuada libero sit amet nibh tempus sodales vitae at tortor</p>
    </div>
    <div id="section2">
      <h2>Contact</h2>
      <h3>Phone</h3>
      <p>+46 70-978 77 81</p>
      <h3>E-mail</h3>
      <p>ted.ahlberg95@gmail.com</p>
      <h3>Address</h3>
      <p>Dalhemsvägen 69 <br>254 65 Helsingborg</p>
      <h2>Skills</h2>
      <h2>Languages</h2>
    </div>
    <div id="section3">
      <h2>Education</h2>
      <h2>Work History</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Resume'
  }
</script>

<style>
  h2 {
    font-family: var(--font2);
    color: var(--a-color1);
    opacity: 90%;
  }

  .h-line {
    background-color: var(--a-color1);
    height: 4px;
    width: auto;
    margin: 1rem 2.5rem 1rem 2.5rem;
    border-radius: 2px;
    opacity: 90%;
  }

  #resume {
    position: relative;
    margin: 3rem auto 0 auto;
    background-color: var(--main-bg-color);
    box-shadow: var(--main-box-shadow);
    border-radius: 2rem;
    width: 85%;
    max-width: 960px;
    height: 50rem;
  }

  #resume-pic {
    position: absolute;
    width: 15rem;
    height: 15rem;
    margin: 2.5rem;
    background-image: url('./../../../assets/img/resume1.png');
    background-size: contain;
    border-radius: 50%;
    border: 1rem solid var(--a-color1);
    opacity: 90%;
  }

  #section1>h2 {
    font-size: 3rem;
    letter-spacing: 0.25rem;
    margin: 0 2.5rem 0 19.5rem;
    padding: 2.25rem 0 0 0;
  }

  #section1>h3 {
    color: var(--sub-text-color);
    font-family: var(--font3);
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 50%;
    margin: 0.5rem 0 1.5rem 21rem;
  }

  #section1>.h-line {
    margin: 1rem 2.5rem 0rem 21.25rem;
  }

  #section1>p {
    font-family: var(--font3);
    font-size: 1.1rem;
    margin: 1rem 2.5rem 0rem 21.5rem;
    opacity: 70%;
  }

  #section2 {
    margin: 1.25rem 2.5rem 0 2.75rem;
    width: 17rem;
    height: 20rem;
    /* background-color: red; */
    float: left;

    font-family: var(--font3);
  }

  #section2>h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin: 1rem 0 0 0;
  }

  #section2>h3 {
    margin: 0.4rem 0 0.25rem 0.25rem;
    color: var(--text-color);
    opacity: 60%;
  }

  #section2>p {
    margin: 0 0 0 0.25rem;
    opacity: 60%;
  }

  #section3 {
    margin: 1rem 0 0 -1.5rem;
    width: 20rem;
    height: 20rem;
    /* background-color: blue; */
    float: left;
  }

  /* @media screen and (max-width: 865px) */
</style>