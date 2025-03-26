<script setup>
import Navigation from '../components/navigation.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToBack = () => router.back();


</script>

<template>
    <Navigation/>
    <div class="flex justify-around items-center mb-32">
        <div class="flex items-center gap-2">
            <img src="./img/Vector (1).png" alt="">
            <h1 @click="goToBack" class="hover:cursor-pointer">GO BACK</h1>   
        </div>
        <h1 class="text-2xl"><strong>AUTHOR</strong></h1>
    </div>
    <section>
        <div class="grid grid-cols-2">
            <div class="flex flex-col gap-5 mx-auto">
                <img class="rounded-full" src="./img/bekah-allmark-Qt0ogPnhGWY-unsplash 1.png" alt="">
                <img class="h-1 w-72 mx-auto" src="./img/line (1).png" alt="">
                <div class="flex gap-28">
                    <h1><strong>FOLLOW</strong></h1>
                    <img src="./img/social (1).png" alt="">
                </div>
            </div>
            <div class="flex flex-col gap-10">
                <h1 class="text-9xl"><strong>LOUISE <br>JENSEN</strong></h1>
                <p class="text-xl"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare <br> arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</strong></p>
                <p class="text-xl">Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. 
                    Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus 
                    nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. 
                    Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus 
                    egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque 
                    eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum 
                    iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam 
                    pellentesque nec nam.</p>
            </div> 
        </div>
    </section>

    <img class="mb-28 mt-44 mx-auto w-[90%]" src="./img/line (3).png" alt="">

    <section class="mb-32">
        <h1 class="text-7xl mx-10 mb-20"><strong>Articles by Louise  Jensen</strong></h1>

        <div class="flex flex-col items-center">
            <div class="flex justify-center w-5/6">
                <div class="outline p-7 flex gap-9 flex-1">
                    <img class="size-img" src="./img/fabian-bachli-A2Zf3fGbdFQ-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>The best art museums</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Date</strong> 16. March 2022</p>
                            <p><strong>Read</strong> 10 Min</p>
                        </div>
                    </div>
                </div>
                <div class="outline p-7 flex gap-9 flex-1">
                    <img class="size-img" src="./img/amelia-brown-yWNiCZw5yps-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>An indestructible hope</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Date</strong> 16. March 2022</p>
                            <p><strong>Read</strong> 10 Min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-5/6">
                <div class="outline p-7 flex gap-9 flex-1">
                    <img class="size-img" src="./img/serhii-tyaglovsky-lCdhTOCNrt4-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>The chains of our lives</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Date</strong> 16. March 2022</p>
                            <p><strong>Read</strong> 10 Min</p>
                        </div>
                    </div>
                </div>
                <div class="outline p-7 flex gap-9 flex-1">
                    <img class="size-img" src="./mag-img/marjan-blan-marjanblan-wUGWd28H-3E-unsplash 1.png" alt="">
                    <div class="flex flex-col gap-10">
                        <h1 class="text-3xl mt-5"><strong>Keep on smiling</strong></h1>
                        <div class="flex gap-9">
                            <p><strong>Date</strong> 16. March 2022</p>
                            <p><strong>Read</strong> 10 Min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
</template>

<style scoped>
    .size-img {
        width: 15rem;
    }

</style>