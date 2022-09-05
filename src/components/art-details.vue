<template>
    <div class="artDetails">
<h1>{{art}}</h1>
    </div>
</template>

<script>
    import { artService } from '../services/art-service';
    export default {
        data(){
            return{
                art: undefined,
            }
        },
        methods:{
            findArt(){
                this.art = artService.findArt(this.$route.params.id)
            }
        },
        created(){
            console.log('dkfgjdfkgj')
            this.findArt()
        }
    }
</script>