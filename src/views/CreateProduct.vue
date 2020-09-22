
<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="v-picker--full-width" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark text>
                <v-toolbar-title>Create Product</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Product name" name="product_name" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field label="QR Code" name="sku" prepend-icon="mdi-lock" type="text"></v-text-field>
                  <v-text-field label="Price" name="price" prepend-icon="mdi-lock" type="number"></v-text-field>
                  <v-text-field label="Quantity" name="qty" prepend-icon="mdi-lock" type="number"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.native="submitData">Create Product</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreateProduct",
  data(){
    return {
      post:{
        product_name: '',
        sku: '',
        price: '',
        qty: '',
      }
    }
  },
  methods:{
    createProduct(){
      axios.post('http://localhost/stock/api/assets/')
          .then()
          .catch(error => {
        console.log(error);
      });
    },
    submitData(e){
      console.warn(this.post)
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>