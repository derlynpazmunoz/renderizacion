<template>
<div>
  {{numero}}
  <br/>
  {{mensaje}}
  <br/>
  {{valor}}
  <br/>
  <label>nombre:</label>
  <input type="text" v-model="nombre">
  <br/>
  <label>apellido:</label>
  <input type="text" v-model="apellido">
  <br/>
  <label>direccion:</label>
  <input type="text" v-model="direccion">
  <br/>
  <label>telefono:</label>
 <input type="text" v-model="telefono">
 <br/>
<button v-on:click="datos">aceptar</button>
</div>
</template>
<script>
export default{
  name:"Ejemplos",
  props:{

  },
  data(){
    return{
      numero:2,
      mensaje:"hola",
      valor:null,
      nombre:"juanita perez",
      apellido:null,
      dirccion:null,
      telefono:null
    }
  },
methods:{
  datos(){
alert(this.nombre + '' + this.apellido + '' + this.direccion + '' + this.telefono)
  }
},
}
</script>