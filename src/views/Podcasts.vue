<script setup>
import Navigation from '../components/navigation.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPodcastPost = () => router.push('/podcast-post');  window.scrollTo(0, 0);




</script>

<template>
    <Navigation/>
    <section class="mt-10">
        <h1 class="text-9xl text-center items-center size"><strong>PODCAST</strong></h1>
    </section>
    <section class="mb-60">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <h1 class="text-2xl"><strong>05</strong></h1>
                <img class="h-72" src="./img/podcast-cover.png" alt="">
                <h1 class="text-2xl"><strong>The Problem of today's cultural <br> development</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Date</strong> 16. March 2022</p>
                <p><strong>Duration</strong> 1hr 20min</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToPodcastPost" class="hover:cursor-pointer"><strong>LISTEN</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[90%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <h1 class="text-2xl"><strong>04</strong></h1>
                <img class="h-72" src="./img/podcast-cover (1).png" alt="">
                <h1 class="text-2xl"><strong>The hidden messages of <br> Jack Nielson</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Date</strong> 16. March 2022</p>
                <p><strong>Duration</strong> 1hr 20min</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToPodcastPost" class="hover:cursor-pointer"><strong>LISTEN</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[90%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <h1 class="text-2xl"><strong>03</strong></h1>
                <img class="h-72" src="./img/podcast-cover (2).png" alt="">
                <h1 class="text-2xl"><strong>Behind the scenes of the street <br> art culture </strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Date</strong> 16. March 2022</p>
                <p><strong>Duration</strong> 1hr 20min</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToPodcastPost" class="hover:cursor-pointer"><strong>LISTEN</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[90%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <h1 class="text-2xl"><strong>02</strong></h1>
                <img class="h-72" src="./img/podcast-cover (3).png" alt="">
                <h1 class="text-2xl"><strong>The art of movement</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Job</strong> 16. March 2022</p>
                <p><strong>Duration</strong> 1hr 20min</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToPodcastPost" class="hover:cursor-pointer"><strong>LISTEN</strong></p>
                  <img src="./img/Vector.png" alt="">  
                </div>
            </div>
        </div>
        <img class="mx-auto mt-16 w-[90%]" src="./img/line.png" alt="">
        <div class="flex items-center justify-around mt-32">
            <div class="flex items-center gap-20">
                <h1 class="text-2xl"><strong>01</strong></h1>
                <img class="h-72" src="./img/podcast-cover (4).png" alt="">
                <h1 class="text-2xl"><strong>10 artists your should <br> definitely know</strong></h1> 
            </div>

            <div class="flex gap-20">
                <p><strong>Date</strong> 16. March 2022</p>
                <p><strong>Duration</strong> 1hr 20min</p>
                <div class="flex gap-1 items-center">
                  <p @click="goToPodcastPost" class="hover:cursor-pointer"><strong>LISTEN</strong></p>
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