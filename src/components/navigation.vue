<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMagazine = () => router.push('/magazine');   window.scrollTo(0, 0);
const goToHome = () => router.push('/');   window.scrollTo(0, 0);
const goToAuthors = () => router.push('/authors');   window.scrollTo(0, 0);
const goToPodcast = () => router.push('/podcast');   window.scrollTo(0, 0);



</script>

<template>
        <div class="m-6 flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <h1 @click="goToHome" class="text-2xl hover:cursor-pointer">FYRRE MAGAZINE</h1>
                <div class="flex gap-4 items-center">
                    <p @click="goToMagazine" class="hover:cursor-pointer">Magazine</p>
                    <p @click="goToAuthors" class="hover:cursor-pointer">Authors</p>
                    <p @click="goToPodcast" class="hover:cursor-pointer">Podcast</p>
                    <img src="/src/views/img/line (4).png" alt="" class="h-1 w-5 inline-block">
                    <img src="/src/views/img/social (1).png" alt="">
                </div>
            </div>

        <img src="/src/views/img/line.png" alt=""> 
    </div>
</template>