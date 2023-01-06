<template>
  <v-app dark>
    <!-- add a navbar with the logo and the link to github of the paxcounter project -->
    <v-app-bar app color="#4051b5" dark>
      <v-toolbar-title class="ml-0 pl-3">
        <v-img max-width="200"
          src="https://raw.githubusercontent.com/cyberman54/ESP32-Paxcounter/master/docs/assets/paxcounter_logo_white.svg"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://cyberman54.github.io/ESP32-Paxcounter" target="_blank" text>
        <v-icon dark> mdi-book </v-icon> Documentation
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <!-- add link to github and made with <3 -->
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <a href="https://github.com/t-huyeng/paxcounter-remote-commands-helper" target="_blank">
            <v-icon color="white"> mdi-github </v-icon>
          </a>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.theme--dark.v-application {
  background-color: #2e303e;
}

</style>
