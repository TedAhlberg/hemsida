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
    <div class="flex-wrapper">

      <div id="section2">
        <div class="icon-wrapper">
          <IconContact class="icon" />
        </div>
        <div class="section-wrapper">
          <h2>Contact</h2>
          <h3>Phone</h3>
          <p>+46 70-978 77 81</p>
          <h3>E-mail</h3>
          <p>Ted.ahlberg95@gmail.com</p>
          <h3>Address</h3>
          <p>Dalhemsvägen 69 <br>254 65 Helsingborg</p>
        </div>
        <div class="icon-wrapper">
          <IconLanguages class="icon" />
        </div>
        <div class="section-wrapper">
          <h2 class="h-descender">Languages</h2>
          <h3>Spoken</h3>
          <p class="p-bar">Swedish</p>
          <Bar class="bar" level="10" />
          <p class="p-bar">English</p>
          <Bar class="bar" level="9" />
          <h3>Programming</h3>
          <p class="p-bar">JavaScript</p>
          <Bar class="bar" level="8.5" />
          <p class="p-bar">HTML/CSS</p>
          <Bar class="bar" level="8" />
          <p class="p-bar">Java</p>
          <Bar class="bar" level="6" />
          <p class="p-bar">C++</p>
          <Bar class="bar" level="4" />
        </div>
      </div>

      <div id="section3">
        <div class="icon-wrapper">
          <IconEducation class="icon" />
        </div>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor's Degree</h3> 2018 - 2021
            <span>
              Malmö University - Major in Computer Science, Specialisation in Computer Application Development
            </span>
          </li>
          <li>
            <h3>High School</h3> 2011 - 2014
            <span>
              NTI Gymnasiet Helsingborg - Technology Program, Information- and Media Technology
            </span>
          </li>
        </ul>
        <div class="icon-wrapper">
          <IconWorkHistory class="icon" />
        </div>
        <h2 class="h-descender">Work History</h2>
        <ul>
          <li>
            <h3>ICA DE Helsingborg</h3> 2016 - Present
            <span>
              Warehouse worker - Full time permanent employment
            </span>
          </li>
          <li>
            <h3>Academic Search</h3> 2015 - 2016
            <span>
              Market research - Hourly seasonal employment
            </span>
          </li>
        </ul>
        <CircleBar title='Photo shop' level='8.5'/>
      </div>
    </div>
  </div>
</template>

<script>
  import Bar from './Bar.vue'
  import CircleBar from './CircleBar.vue'

  import IconContact from './../../icons/IconContact.vue'
  import IconLanguages from './../../icons/IconLanguages.vue'
  import IconEducation from './../../icons/IconEducation.vue'
  import IconWorkHistory from './../../icons/IconWorkHistory.vue'

  export default {
    name: 'Resume',
    components: {
      Bar,
      CircleBar,
      IconContact,
      IconLanguages,
      IconEducation,
      IconWorkHistory
    }
  }
</script>

<style>
  h2 {
    font-size: 1.8rem;
    letter-spacing: 0.25px;
    margin: 0.25rem 0 0 0;
    font-family: var(--font2);
    color: var(--a-color1);
    opacity: 90%;
  }

  h3 {
    letter-spacing: 0.5px;
    margin: 0.75rem 0 0 0;
  }

  ul {
    font-family: var(--font3);
  }

  li {
    margin: 0.5rem 0 0 -1rem;
    padding: 0;
  }

  .h-line {
    background-color: var(--a-color1);
    height: 4px;
    width: auto;
    margin: 1rem 2.5rem 1rem 2.5rem;
    border-radius: 2px;
    opacity: 90%;
  }

  .h-descender {
    padding-top: 0.25rem;
  }

  .flex-wrapper {
    display: flex;
  }

  .section-wrapper {
    margin: 0 0 1.5rem 0;
  }

  .icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--a-color1);
    margin: 0 0.75rem 0 0;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    float: left;
    opacity: 90%;
  }

  .icon {
    width: 1.7rem;
    height: 1.7rem;
    color: var(--main-bg-color);

    margin: auto;
    position: relative;
  }

  .bar {
    width: 8rem;
    float: right;
    margin: -0.75rem 2rem 0 0;
    opacity: 90%;
  }

  #resume {
    position: relative;
    margin: 3rem auto 0 auto;
    background-color: var(--main-bg-color);
    box-shadow: var(--main-box-shadow);
    border-radius: 2rem;
    width: auto;
    max-width: 960px;
    height: auto;
    padding-bottom: 2.5rem;
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
    letter-spacing: 2.5px;
    margin: 0 2.5rem 0 19.5rem;
    padding: 2.25rem 0 0 0;
  }

  #section1>h3 {
    font-family: var(--font3);
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: var(--sub-text-color);
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
    margin: 1.75rem 0 0 3rem;
    width: 21rem;
    float: left;
    font-family: var(--font3);
  }

  #section2>.section-wrapper>h3 {
    color: var(--text-color);
    opacity: 60%;
  }

  #section2>.section-wrapper>p {
    margin: 0.25rem 0 0 0.25rem;
    opacity: 60%;
  }

  #section2>.section-wrapper>.p-bar {
    margin: 0.5rem 0 0 0.25rem;
  }

  #section3 {
    margin: 1.75rem 2.5rem 0 0;
    width: auto;
    height: auto;
  }

  #section3>ul {
    margin: 0 0 0.5rem 0;
    color: var(--text-color);
    opacity: 60%;
  }

  #section3>ul>li>h3 {
    display: inline;
    padding: 0;
    margin-right: 1rem;
  }

  #section3>ul>li>span {
    display: block;
    margin: 0.25rem 0 0 0.25rem;
    padding: 0 0 0.5rem 0;
  }

  ::marker {
    font-size: 1.4rem;
  }

  /* @media screen and (max-width: 865px) */
</style>