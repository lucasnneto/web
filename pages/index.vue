<template>
  <biometry />
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
  },

  methods: {
    ...mapActions("screen", ["CHANGE"]),
  },
});
</script>
