<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMagazine = () => router.push('/magazine');
const goToHome = () => router.push('/');
const goToAuthors = () => router.push('/authors');
const goToPodcast = () => router.push('/podcast');


</script>

<template>
    <footer class="bg-black text-white">
        <div class="flex gap-7 pb-44">
            <h1 class="pt-4 text-3xl ml-4">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
            <h1 class="pt-4 text-3xl">NEWSLETTER+++</h1>
        </div>
        <div class="flex justify-around items-center">
            <h1 class="text-8xl"><strong>DESIGN NEWS TO <br> YOUR INBOX</strong></h1>
            <div class="flex items-center gap-4">
                <input type="text" placeholder="Email" class="border p-3 w-64 rounded">
                <button class="bg-white text-black py-3 px-6 rounded">SIGN UP</button>
            </div>
        </div>
        <div class="pt-44 flex justify-around pb-24">
            <h1 @click="goToHome" class="text-3xl hover:cursor-pointer"><strong>FYRRE MAGAZINE</strong></h1>
            <div class="flex flex-col gap-4">
                <p>Art</p>
                <p>Design</p>
                <p>Architecture</p>
            </div>
            <div class="flex flex-col gap-4">
                <p @click="goToMagazine" class="hover:cursor-pointer">Magazine</p>
                <p @click="goToPodcast" class="hover:cursor-pointer">Podcast</p>
                <p @click="goToAuthors" class="hover:cursor-pointer">Authors</p>
            </div>
            <div class="flex flex-col gap-4">
                <p>Styleguide</p>
                <p>Licensing</p>
                <p>Changelog</p>
            </div>
        </div>
        <div class="flex justify-between w-4/5 items-center mx-auto pb-9">
            <p>© Made by Pawel Gola - Powered by Webflow</p>
            <div>
                <img src="/src/views/img/social.png" alt="">
            </div>
        </div>
    </footer>
</template>