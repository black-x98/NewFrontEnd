<!--<template>-->
<!--  <v-row align="center">-->
<!--    <v-row justify="space-around">-->
<!--      <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>-->
<!--      <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>-->
<!--    </v-row>-->
<!--    <v-form-->
<!--        ref="form"-->
<!--        v-model="valid"-->
<!--        :lazy-validation="lazy"-->
<!--    >-->
<!--      <v-text-field-->
<!--          v-model="name"-->
<!--          :counter="10"-->
<!--          :rules="nameRules"-->
<!--          label="Name"-->
<!--          required-->
<!--      ></v-text-field>-->

<!--      <v-text-field-->
<!--          v-model="email"-->
<!--          :rules="emailRules"-->
<!--          label="E-mail"-->
<!--          required-->
<!--      ></v-text-field>-->

<!--      <v-select-->
<!--          v-model="select"-->
<!--          :items="items"-->
<!--          :rules="[v => !!v || 'Item is required']"-->
<!--          label="Item"-->
<!--          required-->
<!--      ></v-select>-->

<!--      <v-checkbox-->
<!--          v-model="checkbox"-->
<!--          :rules="[v => !!v || 'You must agree to continue!']"-->
<!--          label="Do you agree?"-->
<!--          required-->
<!--      ></v-checkbox>-->

<!--      <v-btn-->
<!--          :disabled="!valid"-->
<!--          color="success"-->
<!--          class="mr-4"-->
<!--          @click="validate"-->
<!--      >-->
<!--        Validate-->
<!--      </v-btn>-->

<!--      <v-btn-->
<!--          color="error"-->
<!--          class="mr-4"-->
<!--          @click="reset"-->
<!--      >-->
<!--        Reset Form-->
<!--      </v-btn>-->

<!--      <v-btn-->
<!--          color="warning"-->
<!--          @click="resetValidation"-->
<!--      >-->
<!--        Reset Validation-->
<!--      </v-btn>-->
<!--    </v-form>-->
<!--  </v-row>-->
<!--</template>-->
<template>
  <v-app id="inspire">
      <v-container class="v-picker--full-width">
        <v-row align="center" justify="center">
          <v-col cols="12" xl="10" lg="8" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark text>
                <v-toolbar-title>Create New User</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" label="FirstName" v-model="firstname" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" label="LastName" v-model="lastname" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" label="Email Address" v-model="email" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Password" v-model="password" type="password"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Confirm Password" v-model="cpassword" type="password"></v-text-field>
                  <v-text-field prepend-icon="person" label="username" v-model="username" type="text"></v-text-field>
                  <v-select prepend-icon="group"
                      :items="groups"
                      :rules="[v => !!v || 'Group is required']"
                      label="Group"
                            v-model="user_group"
                      required
                  ></v-select>
                  <v-text-field prepend-icon="phone" label="Phone Number" v-model="phone" type="varchar"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.native="createUser">Create User</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreateUser",
  data: function () {
    return {
      postData: {
        firstname: undefined,
        lastname: undefined,
        email: undefined,
      },
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      groups: [
        'general',
        'supervisor',
        'admin'
      ],
      checkbox: false,
      lazy: false,
    }
  },
  // data: () => ({
  //   valid: true,
  //   name: '',
  //   nameRules: [
  //     v => !!v || 'Name is required',
  //     v => (v && v.length <= 10) || 'Name must be less than 10 characters',
  //   ],
  //   email: '',
  //   emailRules: [
  //     v => !!v || 'E-mail is required',
  //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  //   ],
  //   select: null,
  //   groups: [
  //     'admin',
  //     'general',
  //     'supervisor'
  //   ],
  //   checkbox: false,
  //   lazy: false,
  // }),
  methods:{
    createUser(){
      axios({
        method: 'post',
        url: 'http://localhost/stock/api/users/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: {
          //foo: 'bar', // This is the body part
          username: this.username,
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          user_group: this.user_group,
          phone: this.phone,
        }
      }).then(response =>
        {
          console.log(response);
      }).catch(error => {
        console.log(error);
      });
      // axios.post('http://localhost/stock/api/users/', {} )
      //     .then()
      //     .catch(error => {
      //       console.log(error);
      //     });
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