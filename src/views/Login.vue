<template>
<div>
  <form>
    <input type="text" name="author" v-model="email"> <br> <br>
    <input type="text" name="title" v-model="password"> <br> <br>
    <button type="submit">Post</button>
  </form>
</div>
</template>
<script>

export default {
name: "Login",
  data(){
    return {
      posts:{
        email: null,
        password: null
      }
    }
  }
}
</script>

<style scoped>

</style>