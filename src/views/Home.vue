<script setup>
import Footer from '../components/footer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMagazine = () => router.push('/magazine');   window.scrollTo(0, 0);
const goToHome = () => router.push('/');   window.scrollTo(0, 0);
const goToAuthors = () => router.push('/authors');   window.scrollTo(0, 0);
const goToPodcast = () => router.push('/podcast');   window.scrollTo(0, 0);
const goToMagazinePost = () => router.push('/magazine-post');   window.scrollTo(0, 0);
const goToPodcastPost = () => router.push('/podcast-post');   window.scrollTo(0, 0);
const goToAuthorPost = () => router.push('/author-post');   window.scrollTo(0, 0);




</script>

<template>
    <div class="m-6 flex flex-col gap-4">
        <h1 @click="goToHome" class="text-2xl hover:cursor-pointer">FYRRE MAGAZINE</h1>
        <img src="./img/line.png" alt="">
         <strong><h1 class="text-9xl size text-center mx-auto">ART & LIFE</h1></strong>  
    </div>

    <div class="bg-black text-white p-6 flex gap-9 w-[80%] mx-auto mt-20">
        <strong><h1>NEWS TICKER+++</h1></strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</p>
    </div>

    <div class="mt-32 grid grid-cols-2 gap-9 mx-60">
        <strong><h1 class="text-7xl">DON'T CLOSE <br> YOUR EYES</h1></strong>
        <div class="flex flex-col gap-16">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="flex items-center gap-9 justify-between">
                <div class="flex items-center gap-9">
                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                    <p><strong>DATE</strong> 16. March 2022</p>  
                    <p><strong>Duration</strong> 1 Min</p> 
                </div>
                <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer">LABEL</button>
            </div>
        </div>
    </div>

    <img class="block mx-auto w-[95%] mt-36" src="./img/image1.png" alt="">
    <section class="flex">
        <div class="flex-1">
            <div class="mt-32 flex gap-9 mx-32">
            <img src="./img/diogo-nunes-Wa9ilX9XYOI-unsplash 2.png" alt="">
                <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>Hope dies last</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer">ART</button>
                        </div>        
                    </div>
                </div>
            </div>

            <img src="./img/line (2).png" alt="" class="mt-10 mx-auto w-[75%]">

            <div class="mt-10 flex gap-9 mx-32">
            <img src="./img/fabian-bachli-A2Zf3fGbdFQ-unsplash 1.png" alt="">
                 <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>The best art museums</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer">SCULPTURES</button>
                        </div>        
                    </div>
                </div>
            </div>

            <img src="./img/line (2).png" alt="" class="mt-10 mx-auto w-[75%]">

            <div class=" mt-10 flex gap-9 mx-32">
            <img src="./img/birmingham-museums-trust-TWavMkqC_cc-unsplash 1.png" alt="">
                <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>The devil is the details</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer flex">ART</button>
                        </div>        
                    </div>
                </div>
            </div>

            <img src="./img/line (2).png" alt="" class="mt-10 mx-auto w-[75%]">

            <div class="mt-10 flex gap-9 mx-32">
            <img src="./img/amelia-brown-yWNiCZw5yps-unsplash 1.png" alt="">
                <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>An indestructible hope</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer">ART</button>
                        </div>        
                    </div>
                </div>
            </div>

            <img src="./img/line (2).png" alt="" class="mt-10 mx-auto w-[75%]">

            <div class="mt-10 flex gap-9 mx-32">
            <img class="h-60" src="./img/simon-sun-PLai_SojR78-unsplash 1@2x.png" alt="">
                <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>Street art festival</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer flex">STREET ART</button>
                        </div>        
                    </div>
                </div>
            </div>

            <img src="./img/line (2).png" alt="" class="mt-10 mx-auto w-[75%]">

            <div class="mt-10 flex gap-9 mx-32">
            <img src="./img/serhii-tyaglovsky-lCdhTOCNrt4-unsplash 1.png" alt="">
                <div class="flex flex-col">
                    <h1 class="mb-3 text-2xl"><strong>Through the eyes of street artists</strong></h1>
                    <div class="flex flex-col gap-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex items-center gap-9 justify-between">
                                <div class="flex items-center gap-9">
                                    <p><strong>TEXT</strong> Jakob Gronberg</p>
                                    <p><strong>DATE</strong> 16. March 2022</p>  
                                    <p><strong>Duration</strong> 1 Min</p> 
                                </div>
                            <button @click="goToMagazinePost" class="outline rounded-3xl py-2 px-3 hover:cursor-pointer">STREET ART</button>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-1/4 p-6 mt-32">
            <h1><strong>PRINTMAGAZINE</strong></h1>
            <h1 class="text-5xl my-4"><strong>03/2022</strong></h1>
            <img src="./img/magazin-cover.png" alt="">
            <button @click="goToMagazinePost" class="bg-black text-white py-2 px-4 mt-4">BUTTON</button>
            <h1 class="mt-14 mb-5">MOST POPULAR</h1>
            <div class="flex flex-col gap-4">
                <div class="flex items-start gap-2">
                    <h1><strong>01</strong></h1>
                    <div class="flex flex-col">
                        <h1><strong>STREET ART FESTIVAL</strong></h1>
                        <p><strong>Text</strong> Christofer Vaccaro</p>
                    </div>
                </div>
                <img src="./img/line (1).png" alt="">
                <div class="flex items-start gap-2">
                    <h1><strong>02</strong></h1>
                    <div class="flex flex-col">
                        <h1><strong>STREET ART FESTIVAL</strong></h1>
                        <p><strong>Text</strong> Christofer Vaccaro</p>
                    </div>
                </div>
                <img src="./img/line (1).png" alt="">
                <div class="flex items-start gap-2 mb-7">
                    <h1><strong>03</strong></h1>
                    <div class="flex flex-col">
                        <h1><strong>STREET ART FESTIVAL</strong></h1>
                        <p><strong>Text</strong> Christofer Vaccaro</p>
                    </div>
                </div>
            </div>

            <div class="mt-6 bg-gray-100 p-6">
                <p><strong>NEWSLETTER</strong></p>
                <h1 class="text-2xl"><strong>Design News to <br> your inbox</strong></h1>
                <input type="text" placeholder="Email" class="border p-2 w-full mt-2">
                <div class="flex justify-end">
                    <button class="bg-black text-white py-2 px-4 mt-2">SIGN UP</button>
                </div>
            </div>
        </div>

    </section>
    <div class="flex mt-32 ml-60 gap-2 mb-32 items-center">
        <h1 @click="goToMagazine" class="text-xl hover:cursor-pointer"><strong>ALL ARTICLES</strong></h1><img class="w-5" src="./img/Vector.png" alt="">  
    </div>

    <section>
        <img class="mb-20 mx-auto w-[80%]" src="./img/line (3).png" alt="">

        <div class="flex justify-between items-center mx-60">
                <h1 class="text-9xl"><strong>PODCAST</strong></h1>
            <div class="flex items-center">
                <h1 @click="goToPodcast" class="text-xl hover:cursor-pointer"><strong>ALL EPISODES</strong></h1>
                <img class="w-5 ml-2" src="./img/Vector.png" alt="">   
            </div>
        </div>

        <div class="flex justify-center mt-24">
            <div @click="goToPodcastPost" class="outline p-7 hover:cursor-pointer">
                <img src="./img/podcast-cover.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The Problem of today's <br> cultural development</strong></h1>
                    <div class="flex gap-9 ">
                        <p><strong>Date</strong> 16-06.2022</p>
                        <p><strong>Duration</strong> 1h 20 Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToPodcastPost" class="outline p-7 hover:cursor-pointer">
                <img src="./img/podcast-cover (1).png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The Hidden messages of <br> Jack Nielson</strong></h1>
                    <div class="flex gap-9 ">
                        <p><strong>Date</strong> 16-06.2022</p>
                        <p><strong>Duration</strong>60 Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToPodcastPost" class="outline p-7 hover:cursor-pointer">
                <img src="./img/podcast-cover (2).png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Behind the scenes of the <br> street art culture</strong></h1>
                    <div class="flex gap-9 ">
                        <p><strong>Date</strong> 16-06.2022</p>
                        <p><strong>Duration</strong> 45 Min</p>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <section class="mb-60">
        <img class="mb-28 mt-44 mx-auto w-[80%]" src="./img/line (3).png" alt="">

        <div class="flex justify-between items-center mx-60 mb-36">
                <h1 class="text-9xl"><strong>AUTHORS</strong></h1>
            <div class="flex items-center">
                <h1 @click="goToAuthors" class="text-xl hover:cursor-pointer"><strong>ALL AUTHORS</strong></h1>
                <img class="w-5 ml-2" src="./img/Vector.png" alt="">   
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div class="flex justify-center w-2/3">
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/jack-finnigan-rriAI0nhcbc-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Jakob Grønberg</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Artist</p>
                            <p><strong>City</strong> Berlin</p>
                        </div>
                    </div>
                </div>
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/bekah-allmark-Qt0ogPnhGWY-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Louise Jensen</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Artist</p>
                            <p><strong>City</strong> Stockholm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-2/3">
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/olena-sergienko-0TSd6uCKTKc-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Anne Henry</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Photograph</p>
                            <p><strong>City</strong> New York</p>
                        </div>
                    </div>
                </div>
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/metin-ozer-iSmTwuKTNDo-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Anna Nielsen</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Columnists</p>
                            <p><strong>City</strong> Copenhagen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-2/3">
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/jeffery-erhunse-vp9mRauo68c-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Jane Cooper</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Artist</p>
                            <p><strong>City</strong> Berlin</p>
                        </div>
                    </div>
                </div>
                <div @click="goToAuthorPost" class="outline p-7 flex gap-9 flex-1 hover:cursor-pointer">
                    <img class="rounded-full" src="./img/emiliano-vittoriosi-fIM5oAdHAxE-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Cristofer Vaccaro</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Job</strong> Artist</p>
                            <p><strong>City</strong> Lisbon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <Footer/>
    </section>

</template>

<style scoped>
body {
    width: 100%;
}


.size {
    font-size: 230px;
}
</style>

