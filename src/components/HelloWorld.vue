<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Formulario</h3>
    <div class="form">
      <form @submit.prevent="validateAll">
        <div class="form-group">
          <label for="">Nombre</label>
          <input
            type="text"
            class="input-group"
            id="name"
            @blur="validateName"
            v-model="name"
          />
          <span class="msg-error" v-show="errors.name">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input type="email" class="input-group" id="email" />
        </div>
        <div class="form-group">
          <label for="">Teléfono</label>
          <input type="tel" class="input-group" id="phone" />
        </div>
        <div>
          <button class="btn btn-primary btn-lg" type="submit">Enviar</button>
          <button class="btn btn-default btn-lg" type="reset">Reset</button>
        </div>
        <div class="alert alert-danger" v-show="error">
          El formulario tiene errores
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    name: null,
    email: null,
    phone: null,
    error: false,
    errors: {
      name: null,
      email: null,
      phone: null
    }
  }),
  methods: {
    validateAll() {
      this.error = false;
      let flag = true;
      if (this.name == null || this.name.length < 3) {
        flag = false;
      }
      if (this.email == null || this.email.length < 3) {
        flag = false;
      }
      /*if (this.phone == null || this.phone.toString().length < 7) {
        flag = false;
      }*/
      this.error = !flag;
    },
    // eslint-disable-next-line no-unused-vars
    validateName() {
      if (this.name == null || this.name.length < 3) {
        this.errors.name = "El valor es incorrecto!";
      } else {
        this.errors.name = null;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
}
.msg-error {
  font-size: 10px;
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
