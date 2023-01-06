<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title> Paxcounter Remote Commands Helper </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-card color="paxcounter" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> ESP32-Paxcounter</v-card-title>

                <v-card-subtitle> Unofficial helper for the Paxcounter project to create remote
                  commands</v-card-subtitle>

                <v-card-actions>
                  <v-btn text href="https://github.com/cyberman54/ESP32-Paxcounter" target="_blank">
                    GitHub<v-icon right dark> mdi-github</v-icon>
                  </v-btn>
                  <v-btn text href="https://cyberman54.github.io/ESP32-Paxcounter/" target="_blank">
                    Documentation<v-icon right dark> mdi-book</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <!-- output window -->
          <v-card color="paxcounter" dark>
            <v-card-title class="text-h5"> Select a command </v-card-title>
            <v-card-text>
              <!-- dropdown to choose general command-->
              <v-autocomplete v-model="selectedCommand" :items="commands" label="Start typing here ..." item-text="name"
                outlined dense @change="updateCommand" return-object></v-autocomplete>
              <!-- dropdown to choose command parameter-->
              <template v-if="selectedCommand && selectedCommand.parameters">
                <template v-if="selectedCommand.parameters.type == 'list'">
                  <v-autocomplete v-model="selectedParameter" :items="selectedCommand.parameters.list"
                    label="Select Parameter" item-text="name" outlined dense @change="updateParameter"
                    return-object></v-autocomplete>
                </template>
                <template v-else-if="selectedCommand.parameters.type == 'number'">
                  <v-text-field v-model="selectedParameter" label="Select Parameter" outlined dense
                    @change="updateParameter" type="number" min="0" max="100"></v-text-field>
                </template>
              </template>

              <!-- panel to show help text -->
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header color="info"> Help </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="selectedCommand" color="info">
                    <v-card-text v-html="selectedCommand.help" class="text-pre-wrap"></v-card-text>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <!-- output window -->
          <v-card color="paxcounter" dark>
            <v-card-title class="text-h5"> Output </v-card-title>
            <v-card-text>
              <v-text-field v-model="output" :outlined="true" :hide-details="true"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="output = ''" color="error">Clear</v-btn>
              <v-btn @click="convert('HEX')" color="primary">HEX</v-btn>
              <v-btn @click="convert('BASE64')" color="primary">BASE64</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// include commands.json from assets folder
var commands = require("~/assets/commands.json");
export default {
  data: () => ({
    output: "",
    selectedCommand: null,
    selectedParameter: null,
    commands: commands,
    format: "HEX",
  }),

  methods: {
    updateCommand() {
      this.output = this.selectedCommand.value;
      // if selectedCommand.parameters is a list set first item as selectedParameter
      if (this.selectedCommand.parameters) {
        if (this.selectedCommand.parameters.type == "list") {
          this.selectedParameter = this.selectedCommand.parameters.list[0];
          var parameter =
            this.selectedParameter.value ?? this.selectedParameter;
          this.output = this.selectedCommand.value + parameter;
        }
      }
    },
    updateParameter() {
      var parameter = this.selectedParameter.value ?? this.selectedParameter;
      this.output = this.selectedCommand.value + parameter;
    },
    hexToBase64(hexstring) {
      // check if format is HEX and convert to BASE64
      // also set format to BASE64
      if (this.format == "HEX") {
        var bytes = new Uint8Array(
          hexstring.match(/[\da-f]{2}/gi).map(function (h) {
            return parseInt(h, 16);
          })
        );
        this.output = btoa(String.fromCharCode(...bytes));
        this.format = "BASE64";
      }
      // return btoa(
      //   hexstring
      //     .match(/\w{2}/g)
      //     .map(function (a) {
      //       return String.fromCharCode(parseInt(a, 16));
      //     })
      //     .join("")
      // );
    },

    convert(type) {
      // convert output to HEX or BASE64
      if (type == "HEX") {
        this.output = this.hexToBase64(this.output);
      } else if (type == "BASE64") {
        this.output = btoa(this.output);
      }
    },
    copyToClipboard(text) {
      // copy text to clipboard
      navigator.clipboard.writeText(text);
    },
  },
};
</script>

<style>

</style>