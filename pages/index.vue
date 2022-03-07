<template>
  <v-card
    :height="height"
    :width="width"
    :class="{ 'rounded-0': $vuetify.breakpoint.xs }"
    class="px-6 py-10"
  >
    <biometry />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "IndexBase",
  data: () => ({
    metodo: "questionario",
  }),
  head() {
    return {
      title: "SCR - Metodo",
    };
  },

  computed: {
    ...mapState("client", ["clientTaxId"]),
    isLegalPerson() {
      return this.clientTaxId?.length !== 11;
    },
    width() {
      return this.$vuetify.breakpoint.smAndUp ? 360 : "100%";
    },
    height() {
      return this.$vuetify.breakpoint.xs ? "100%" : 640;
    },
  },

  methods: {
    ...mapActions("screen", ["CHANGE"]),
  },
});
</script>
