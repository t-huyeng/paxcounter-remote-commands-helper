<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title> Paxcounter Remote Commands Helper </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> ESP32-Paxcounter</v-card-title>

                <v-card-subtitle>Helper for Remote Commands</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    text
                    href="https://github.com/cyberman54/ESP32-Paxcounter"
                    target="_blank"
                  >
                    GitHub<v-icon right dark> mdi-github</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="100" tile>
                <v-img
                  max-width="100"
                  src="https://github.com/cyberman54/ESP32-Paxcounter/blob/master/img/Paxcounter-title.jpg?raw=true"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <!-- output window -->
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Command helper </v-card-title>
            <v-card-text>
              <!-- dropdown to choose general command-->
              <v-select
                v-model="selectedCommand"
                :items="commands"
                label="Select Command"
                item-text="name"
                outlined
                dense
                @change="updateCommand"
                return-object
              ></v-select>
              <!-- dropdown to choose command parameter-->
              <template v-if="selectedCommand">
                <template v-if="selectedCommand.parameters.type == 'list'">
                  <v-select
                    v-model="selectedParameter"
                    :items="selectedCommand.parameters.list"
                    label="Select Parameter"
                    item-text="name"
                    outlined
                    dense
                    @change="updateParameter"
                    return-object
                  ></v-select>
                </template>
                <template
                  v-else-if="selectedCommand.parameters.type == 'number'"
                >
                  <v-text-field
                    v-model="selectedParameter"
                    label="Select Parameter"
                    outlined
                    dense
                    @change="updateParameter"
                    type="number"
                    min="0"
                    max="100"
                  ></v-text-field>
                </template>
              </template>

              <!-- panel to show help text -->
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header> Help </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="selectedCommand">
                    <v-card-text
                      v-html="selectedCommand.help"
                      class="text-pre-wrap"
                    ></v-card-text>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <!-- output window -->
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Output </v-card-title>
            <v-card-text>
              <v-textarea
                v-model="output"
                :rows="10"
                :auto-grow="true"
                :counter="false"
                :outlined="true"
                :readonly="true"
                :no-resize="true"
                :hide-details="true"
                :color="color"
              ></v-textarea>
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
    color: "white",
    selectedCommand: null,
    selectedParameter: null,
    commands: commands,
  }),

  methods: {
    updateCommand() {
      this.output = this.selectedCommand.value;
    },
    updateParameter() {
      var parameter = this.selectedParameter.value ?? this.selectedParameter;
      this.output = this.selectedCommand.value + parameter;
    },
    hexToBase64(hexstring) {
      return btoa(
        hexstring
          .match(/\w{2}/g)
          .map(function (a) {
            return String.fromCharCode(parseInt(a, 16));
          })
          .join("")
      );
    },

    convert(type) {
      // convert output to HEX or BASE64
      if (type == "HEX") {
        this.output = this.hexToBase64(this.output);
        this.color = "red";
      } else if (type == "BASE64") {
        this.output = btoa(this.output);
      }
    },
  },
};
</script>

<style>
</style>