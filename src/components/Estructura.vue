<template>

  <section class="src-components-estructura">
       <div class="jumbotron mt-3">

        <h2>Componente Estructura</h2>
        <hr />

        <h4><u>v-if</u></h4>
            <br>
            <button class = "btn btn-warning my-3" @click="mostrar=!mostrar">
                {{ mostrar? 'Ocultar':'Mostrar' }}
            </button>
            <p v-if="mostrar" class = "alert alert-warning">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nesciunt autem natus rerum 
                eius? Esse ea atque dolor tenetur sapiente quam hic suscipit odit, itaque recusandae sint eum 
                vitae incidunt.
            </p>
            <p v-else class = "alert alert-danger">
                ELEMENTO REMOVIDO
            </p>
            <hr>

            <!--------------------------------------------->
            <!--------------------------------------------->
        <h4><u>v-show</u></h4>
            <br>
            <button class = "btn btn-info my-3" @click="cambiarVisibilidad()">
                {{ obtenerTituloVisibilidad() }}
            </button>
            <p v-show="visibilidad()" class = "alert alert-info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nesciunt autem natus rerum 
                eius? Esse ea atque dolor tenetur sapiente quam hic suscipit odit, itaque recusandae sint eum 
                vitae incidunt.
            </p>

            <hr>
            <!--------------------------------------------->
            <!--------------------------------------------->
        <h4><u>v-for</u></h4>
        <br>

            <ul>
                <li v-for="(dato, index) in formData" :key="index">
                    {{dato}}
                </li>
            </ul>

            <ul>
                <li v-for ="(usuario, index) in usuarios" :key="index">
                    {{ index + 1 }} - {{ usuario }}
                </li>
            </ul>
            <hr>
            <ul>
                <li v-for ="(alumno, index) in alumnos" :key="index">
                  <!-- <pre>{{ index + 1 }} - {{ alumno }}</pre> -->
                  <!-- {{ alumno.nombre }} {{ alumno.apellido}} -->
                  {{ alumno.nombre + ' ' + alumno.apellido }}
                </li>
            </ul>
            <hr>

        <button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar alumno</button>
            <div v-if="alumnos.length">
                <table class="table">
                    <tr class="bg-success text-white"> 
                        <td>ID</td>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Curso</th>
                        <th>Foto</th>
                    </tr>
                    <tr class="bg-info text-white" v-for="(alumno, index) in alumnos" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ alumno.nombre }}</td>
                        <td>{{ alumno.apellido }}</td>
                        <td>{{ alumno.edad }}</td>
                        <td>{{ alumno.curso? 'Si':'No' }}</td>
                        <td>
                            <img :src="alumno.foto" width="50" :alt="alumno.nombre">
                        </td>
                    </tr>
                </table>
          <div class="alert alert-info">
                    <!--Mensaje ninguno hizo el curso-->
                    <div v-if="calcularAlumnosEnCurso.cantidad == 0">
                        Ningún alumno hizo el curso
                    </div>
                    <!--Mensaje todos hicieron el curso-->
                    <div v-else-if="calcularAlumnosEnCurso.cantidad == calcularAlumnosEnCurso.total">
                        Todos los alumnos hicieron el curso
                    </div>
                    <!--Mensaje de cuantos hicieron el curso-->
                    <div v-else>
                        {{ calcularAlumnosEnCurso.cantidad }} {{ calcularAlumnosEnCurso.cantidad==1? 
                        'alumno hizo' : 'alumnos hicieron' }} el curso,de un total de un total de 
                        {{ calcularAlumnosEnCurso.total }}
                    </div>
                </div>
            </div>
            <div v-else class="alert alert-danger">
                No se encontraron alumnos
            </div>
           
            <br>

          <div class="media alert alert-danger" v-for="(alumno, index) in alumnos" :key ="index">
                <img :src="alumno.foto" width="150" :alt="alumno.nombre">
                <div class="media-body ml-3">
                    <h6><u>ID: {{index + 1}}</u></h6>
                    <p>Nombre: <a :href="alumno.foto">{{alumno.nombre}} {{alumno.apellido}}</a></p>
                    <p>Edad: <i>{{alumno.edad}}</i></p>
                    Hizo el curso <input type="checkbox" v-model="alumno.curso">
                    <button class="btn btn-danger mx-3" @click="borrar(index)">X</button>
                </div>
            </div>

            <hr>
            <!--------------------------------------------->
            <!--------------------------------------------->
          <h4><u>v-if / v-else-if / v-else</u></h4>
            <br>
            <input type="text" v-model="nombre">><br>
            <div class="btn btn-success mt-3">
                <div v-if="nombre == 'Juan'">
                    Bienvenido {{ nombre }}
                </div>
                <div v-else-if="nombre == 'Juana'">
                    Bienvenido {{ nombre }}
                </div>
                <div v-else>
                    Bienvenido!
                </div>
            </div>

    </div>
  </section>

</template>

<script lang="js">

    import { urlPosts } from '../urls'

    export default  {
    name: 'src-components-estructura',
    props: [],

    mounted () {
        /* -------------------------------------------- */
        /* OBTENGO LOS DATOS SUBIDOS POR EL FORMULARIO */
        /* -------------------------------------------- */
        this.axios.get(urlPosts)
        .then(res => {
            console.log(res.data)
            this.formData = res.data
        })
        .catch(error =>{
            console.log ('ERROR GET', error)
        })
    },

    data () {
      return {
      formData:[],
      mostrar: true,
      mostrar2: true,
      nombre: '',
      usuarios: [
          'Juan',
          'Pedro',
          'Ana',
          'Laura'
      ],
      alumnos: [
          {nombre: 'Juana', apellido: 'Azurduy', edad: 32, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png'},
          {nombre: 'Mercedes', apellido: 'Sosa', edad: 33, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'},
          {nombre: 'Manuel', apellido: 'Belgrano', edad: 34, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'},
          {nombre: 'Mariano', apellido: 'Moreno', edad: 35, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-128.png'}
      ]

      }
    },
    methods: {

        cambiarVisibilidad(){
            this.mostrar2 = !this.mostrar2

        },
        obtenerTituloVisibilidad(){
            return this.mostrar2? 'Ocultar' : 'Mostrar'
        },
        visibilidad(){
            return this.mostrar2
        },
        borrar(index){
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
            var alumno = {nombre: 'Marina', apellido: 'Moreno', edad: 40, curso: false, 
            foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png'}

            this.alumnos.push(alumno)
        }

    },
    computed: {

        calcularAlumnosEnCurso(){
            let cant = 0
            this.alumnos.forEach(function(alumno){
                if(alumno.curso) cant++
            })
            return{
                cantidad: cant,
                total: this.alumnos.length
            }
        }

    }
}


</script>

<style scoped lang="css">
  .src-components-estructura {

  }

  .jumbotron {
  background-color: pink;
  color: brown;
}

hr {
  background-color: #444;
}
</style>
