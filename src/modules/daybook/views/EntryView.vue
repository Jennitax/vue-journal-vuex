import { defineAsyncComponent } from 'vue';
<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div>
        <span class="text-success fs-3 fw-bold">22</span>
        <span class="mx-1 fs-3">Febrero</span>
        <span class="mx-2 fs-4 fw-light">2024, jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-all"></i>
        </button>

        <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
 </div>

 <hr>
 <div class="d-flex-column px-3 h-75">
    <textarea
        placeholder="¿Qué sucedió hoy?"
    ></textarea>
 </div>

<MyFab 
    icon="fa-save"
/>

<img src="https://img.freepik.com/vector-gratis/fondo-plano-dia-internacional-gato_52683-86986.jpg" 
 alt="entry-picture"
 class="img-thumbnail">

</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components: {
        MyFab: defineAsyncComponent(() => import('../components/MyFab.vue'))
    }
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 10px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>