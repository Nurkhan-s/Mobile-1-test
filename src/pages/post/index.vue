<template>
  <div>
    <div class="card mb-3 mt-3">
      <div class="card-body" v-for="(card, i) in cards" :key="i">
        <h4 class="card-title">{{ card.title }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">{{
            card.text
          }}</p>
        <a @click="edit(card)" class="card-link">Edit</a>
        <span @click="$store.commit('cards/deleteCards' ,i)" class="card-link delete">Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  computed: {
    cards() {
      return this.$store.getters["cards/getCards"]
    }
  },
  methods: {
    edit(card) {
      this.$router.push('./form')
      this.$store.commit('cards/editCards', card)
    }
  }
}
</script>

<style scoped>

.card-link {
  cursor: pointer;
}
.delete{
  color: red
}



</style>
