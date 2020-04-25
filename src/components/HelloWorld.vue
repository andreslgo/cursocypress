<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Formulario</h3>
    <div class="form">
      <form @submit.prevent="validate">
        <div class="form-group">
          <label for="">Nombre</label>
          <input type="text" class="input-group" id="name" />
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
    error: false
  }),
  methods: {
    validate() {
      let flag = true;
      if (this.name == null || this.name.length < 3) {
        flag = false;
      }
      if (this.email == null || this.email.length < 3) {
        flag = false;
      }
      if (this.phone == null || this.phone.toString().length < 7) {
        flag = false;
      }
      this.error = !flag;
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
