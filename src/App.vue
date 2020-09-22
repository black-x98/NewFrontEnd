<template>
  <v-app >
    <v-main class="mx-12 mt-8">
     <Navbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
     Navbar,
  },
  data() {
	return{
		posts: []
	}
  },
  methods: {
    createProduct: function () {
      alert('createProduct');
    }
  }
}
</script>