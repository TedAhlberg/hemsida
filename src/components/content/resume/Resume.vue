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
        <div>
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
        </div>

        <div>
          <div class="icon-wrapper">
            <IconLanguages class="icon" />
          </div>
          <div class="section-wrapper">
            <h2>Languages</h2>
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
      </div>

      <div id="section3">
        <div>
          <div class="icon-wrapper">
            <IconEducation class="icon" />
          </div>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Bachelor's Degree</h3>
              <p>2018 - 2021</p>
              <span>
                Malmö University - Major in Computer Science, Specialisation in Computer Application Development <br />
                Thesis: <a href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1567351&dswid=-9236" target="_blank">Typography and readability for mobile devices</a>
              </span>
            </li>
            <li>
              <h3>High School</h3>
              <p>2011 - 2014</p>
              <span>
                NTI Gymnasiet Helsingborg - Technology Program, Information- and Media Technology
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div class="icon-wrapper">
            <IconWorkHistory class="icon" />
          </div>
          <h2>Work History</h2>
          <ul>
            <li>
              <h3>ICA DE Helsingborg</h3>
              <p>2016 - Present</p>
              <span>
                Warehouse worker - Full time permanent employment
              </span>
            </li>
            <li>
              <h3>Academic Search</h3>
              <p>2015 - 2016</p>
              <span>
                Market research - Hourly seasonal employment
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div class="icon-wrapper">
            <IconSkills class="icon" />
          </div>
          <h2>Skills</h2>
          <div class="skills-wrapper">
            <CircleBar class="circle-bar" title='Photo shop' level='8' />
            <CircleBar class="circle-bar" title='React' level='7' />
            <CircleBar class="circle-bar" title='NodeJS' level='6.5' />
            <CircleBar class="circle-bar" title='Vue' level='5.5' />
            <CircleBar class="circle-bar" title='Linux' level='3.5' />
            <CircleBar class="circle-bar" title='Firebase' level='3' />
          </div>
        </div>
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
  import IconSkills from './../../icons/IconSkills.vue'

  export default {
    name: 'Resume',
    components: {
      Bar,
      CircleBar,
      IconContact,
      IconLanguages,
      IconEducation,
      IconWorkHistory,
      IconSkills
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
    opacity: 0.9;
  }

  h3 {
    letter-spacing: 0.5px;
    margin: 0.75rem 0 0 0;
    padding-top: 0.25rem;
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
    opacity: 0.9;
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
    opacity: 0.9;
  }

  .icon {
    width: 1.7rem;
    height: 1.7rem;
    color: var(--main-bg-color);

    margin: auto;
    position: relative;
  }

  .bar {
    width: 45%;
    float: right;
    margin: -0.75rem 1rem 0 0;
    opacity: 0.9;
  }

  .skills-wrapper {
    width: 100%;
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .circle-bar {
    margin: 1rem;
    opacity: 0.9;
  }

  #resume {
    position: relative;
    margin: 3rem auto 2rem auto;
    background-color: var(--main-bg-color);
    box-shadow: var(--main-box-shadow);
    border-radius: 2rem;
    width: 97.5%;
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
    opacity: 0.9;
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
    opacity: 0.5;
    margin: 0.5rem 0 1.5rem 21rem;
  }

  #section1>.h-line {
    margin: 1rem 2.5rem 0rem 21.25rem;
  }

  #section1>p {
    font-family: var(--font3);
    font-size: 1.1rem;
    margin: 1rem 2.5rem 0rem 21.5rem;
    opacity: 0.7;
  }

  #section2 {
    margin: 2.5rem 0.5rem 0 2.75rem;
    width: 21rem;
    float: left;
    font-family: var(--font3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  #section2>div>.section-wrapper {
    margin: 0 0 3rem 0;
  }

  #section2>div>.section-wrapper>h3 {
    color: var(--text-color);
    opacity: 0.6;
  }

  #section2>div>.section-wrapper>p {
    margin: 0.25rem 0 0 0.25rem;
    opacity: 0.6;
  }

  #section2>div>.section-wrapper>.p-bar {
    margin: 0.5rem 0 0 0.25rem;
  }

  #section3 {
    margin: 2.5rem 2.5rem 0 0.5rem;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  #section3>div {
    margin: 0 0 1rem 0;
  }

  #section3>div>ul {
    margin: 0 0 0.5rem 0;
    color: var(--text-color);
    opacity: 0.6;
  }

  #section3>div>ul>li>h3 {
    display: inline;
    padding: 0;
    margin-right: 1rem;
  }

  #section3>div>ul>li>p {
    display: inline-block;
    margin: 0;
  }


  #section3>div>ul>li>span {
    display: block;
    margin: 0.25rem 0 0 0.25rem;
    padding: 0 0 0.5rem 0;
  }

  #section3>div>ul>li>span>a {
    color: var(--text-color)
  }

  ::marker {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 865px) {
    h2 {
      font-size: calc(1rem + 1.5vw);
      margin: calc(0.05rem + 0.3vw) 0 0 0;
      letter-spacing: 0.125vw;
    }

    h3 {
      font-size: calc(0.75rem + 1vw);
      letter-spacing: 0.1vw;
    }

    .flex-wrapper {
      flex-direction: column-reverse;
    }

    .icon-wrapper {
      width: 5vw;
      height: 5vw;
      min-width: 1.85rem;
      min-height: 1.85rem;
    }

    .icon {
      width: 3.25vw;
      height: 3.25vw;
      min-width: 1.1rem;
      min-height: 1.1rem;
    }

    .bar {
      width: 45%;
      float: right;
      margin: -0.75rem 0 0 0;
      opacity: 0.9;
    }

    #resume {
      overflow: hidden;
      padding: 0 0 1rem 0;
    }

    #resume-pic {
      position: relative;
      margin: 5vw auto 0 auto;
      width: 27.5vw;
      height: 27.5vw;
      min-width: 7.5rem;
      min-height: 7.5rem;
      border: 2vw solid var(--a-color1);
    }

    #section1 {
      display: flex;
      flex-direction: column;
    }

    #section1>h2 {
      margin: 2.5vw auto 0 auto;
      padding: 0 5vw 0 5vw;
      font-size: calc(1.5rem + 2.5vw);
      text-align: center;
    }

    #section1>h3 {
      margin: 1vw 5vw 1vw 5vw;
      font-size: calc(0.75rem + 1.25vw);
      text-align: center;
    }

    #section1>.h-line {
      width: 40%;
      min-width: 200px;
      margin: 1rem auto 0.5rem auto;
    }

    #section1>p {
      margin: 1rem 5vw 0rem 5vw;
      font-size: calc(0.8rem + 0.5vw);
    }

    #section2 {
      float: inherit;
      margin: 0 5vw 0 5vw;
      flex-direction: column-reverse;
      width: auto;
    }

    #section2>div>.section-wrapper {
      margin: 0 0 5vw 0;
    }

    #section2>div>.section-wrapper>h3 {
      font-size: calc(0.9rem + 0.5vw);
    }

    #section2>div>.section-wrapper>p {
      font-size: calc(0.8rem + 0.5vw);
    }

    #section2>div>.section-wrapper>p-bar {
      margin: 0;
    }

    #section3 {
      margin: 4vw 5vw 0 5vw;
    }

    #section3>div {
      margin: 0 0 2.5vw 0;
    }

    #section3>div>ul>li>p {
      font-size: calc(0.8rem + 0.5vw);
    }

    #section3>div>ul>li>span {
      font-size: calc(0.8rem + 0.5vw);
    }

    ::marker {
      font-size: calc(1rem + 0.5vw);
    }
  }
</style>