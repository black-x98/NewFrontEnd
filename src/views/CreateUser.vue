
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
                  <v-text-field prepend-icon="person" label="FirstName" v-model="postData.firstname" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" label="LastName" v-model="postData.lastname" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" label="Email Address" v-model="postData.email" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Password" v-model="postData.password" type="password"></v-text-field>
<!--                  <v-text-field prepend-icon="lock" label="Confirm Password" v-model="cpassword" type="password"></v-text-field>-->
                  <v-text-field prepend-icon="person" label="username" v-model="postData.username" type="text"></v-text-field>
                  <v-select prepend-icon="group"
                      :items="groups"
                      :rules="[v => !!v || 'User group is required']"
                      label="Group"
                            v-model="postData.user_group"
                      required
                  ></v-select>
                  <v-text-field prepend-icon="phone" label="Phone Number" v-model="postData.phone" type="varchar"></v-text-field>
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
        password: undefined,
        username: undefined,
        user_group: undefined,
        phone: undefined,
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

  methods:{
    createUser(){
      const myData = new FormData();
      myData.append('firstname', this.postData.firstname)
      myData.append('lastname', this.postData.lastname)
      myData.append('email', this.postData.email)
      myData.append('password', this.postData.password)
      myData.append('username', this.postData.username)
      myData.append('user_group', this.postData.user_group)
      myData.append('phone', this.postData.phone)
      axios({
        method: 'post',
        url: 'http://localhost/stock/api/users/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: myData
      }).then(response =>
        {
          console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>