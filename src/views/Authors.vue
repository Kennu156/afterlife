<script setup>
import Navigation from '../components/navigation.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAuthorPost = () => router.push('/author-post');


</script>

<template>
    <Navigation/>
    <section class="mt-10">
        <h1 class="text-9xl text-center items-center size"><strong>AUTHORS</strong></h1>
    </section>
    <section class="mb-60">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/jack-finnigan-rriAI0nhcbc-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Jakob Grønberg</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[70%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/bekah-allmark-Qt0ogPnhGWY-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Louise Jensen</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[70%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/olena-sergienko-0TSd6uCKTKc-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Anne Henry</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[70%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/metin-ozer-iSmTwuKTNDo-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Anna Nielsen</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[70%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/jeffery-erhunse-vp9mRauo68c-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Jane Cooper</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[70%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <img class="rounded-full" src="./img/emiliano-vittoriosi-fIM5oAdHAxE-unsplash 1.png" alt="">
                <h1 class="text-2xl"><strong>Cristofer Vaccaro</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> Artist</p>
                <p><strong>City</strong> Berlin</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToAuthorPost" class="hover:cursor-pointer"><strong>ABOUT</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
    </section>

    <Footer/>
</template>

<style scoped>


.size {
    font-size: 230px;
}
</style>