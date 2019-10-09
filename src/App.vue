<template>
<v-app>
  <div class="header" v-bind:class="{ active: stepActive }">
    <v-stepper v-model="step" non-linear>
      <v-stepper-header>
        <v-stepper-step editable step="1" @click="changeStep(1)">
          Index
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2" @click="changeStep(2)">
          About me
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable @click="changeStep(3)">
          History
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" editable @click="changeStep(4)">
          Skill
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="5" editable @click="changeStep(5)">
          Contact
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>

  <v-content id="content1">
    <Index />
  </v-content>

  <v-content id="content2">
    <About />
  </v-content>

  <v-content id="content3">
    <History />
  </v-content>

  <v-content id="content4">
    <Skill />
  </v-content>

  <v-content id="content5">
    <Contact />
  </v-content>

  <v-btn v-scroll="onScroll" v-show="fab" fab fixed bottom right text @click="toTop">
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</v-app>
</template>

<script>
import Index from './components/Index';
import About from './components/About';
import History from './components/History';
import Skill from './components/Skill';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Index,
    About,
    History,
    Skill,
    Contact
  },
  data: () => ({
    step: 1,
    fab: false,
    stepActive: true
  }),
  methods: {
    changeStep(selectStep) {
      this.step = selectStep;
      this.$SmoothScroll(document.getElementById('content' + selectStep), 750);
    },
    onScroll(e) {
      if (typeof window === 'undefined') {
        return;
      }
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
      this.stepActive = !this.fab;
      setTimeout(() => {
        this.step = this.stepActive ? 1 : this.step;
      }, 100);
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style
  lang="sass"
  src="./assets/style/App.sass"
/>
