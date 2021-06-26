<template>
  <div>
    <form>
      <fieldset>
        <div class="form-group">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <input v-model="compTitle" type="text" class="form-control" id="title"
                 aria-describedby="title"
                 placeholder="Enter post title">
        </div>
        <div class="form-group">
          <label for="body" class="form-label mt-4">Body</label>
          <textarea v-model="compText" class="form-control" id="body" rows="3"></textarea>
        </div>
        <button @click="submit" type="submit" class="btn btn-primary mt-2">{{ edited ? "Edit" : "Submit" }}</button>
      </fieldset>
    </form>
  </div>
</template>

<script>

export default {
  name: "form.vue",
  data() {
    return {
      title: "",
      text: "",
    }
  },
  computed: {
    edited() {
      return this.$store.getters["cards/getEditedCard"]
    },
    compTitle: {
      get() {
        if(this.edited){
          return this.edited.title
        }else{
          return  this.title
        }
      },
      set(val) {
        if(this.edited){
          this.edited.title = val
        }else{
          this.title = val
        }
      }
    },
    compText: {
      get() {
        if(this.edited){
          return this.edited.text
        }else{
          return  this.text
        }
      },
      set(val) {
        if(this.edited){
          this.edited.text = val
        }else{
          this.text = val
        }
      }
    }
  },
  methods: {
    submit() {
      if ( !this.edited &&this.title.length > 0 && this.text.length > 0) {
        this.$store.commit('cards/setCards', {title: this.title, text: this.text})
        this.text = ""
        this.title = ""
      }else{
        this.$router.push('./')
        this.$store.commit('cards/resetTheStore')
      }
    }
  }
}
</script>

<style scoped>

</style>
