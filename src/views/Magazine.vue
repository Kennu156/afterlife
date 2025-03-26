<script setup>
import Navigation from '../components/navigation.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();



const goToMagazinePost = () => router.push('/magazine-post');  window.scrollTo(0, 0);
const goToAuthors = () => router.push('/authors');  window.scrollTo(0, 0);


</script>

<template>
    <Navigation/>
    <section class="mt-10">
        <h1 class="text-9xl text-center items-center size"><strong>MAGAZINE</strong></h1>
    </section>
    <div class="flex items-center justify-around mt-32">
        <h1 class="text-2xl"><strong>CATEGORIES</strong></h1>
        <div class="flex items-center gap-4">
            <button class="outline rounded-full py-2 px-5">ALL</button>
            <button @click="goToMagazinePost" class="outline rounded-full py-2 px-5">ART</button>
            <button @click="goToMagazinePost" class="outline rounded-full py-2 px-5">STREET ART</button>
            <button @click="goToMagazinePost" class="outline rounded-full py-2 px-5">SCULPTURES</button>
        </div>
    </div>
    <section>
        <div class="flex justify-center mt-24">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/diogo-nunes-Wa9ilX9XYOI-unsplash 2.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Hope dies last</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Don't close your eyes</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                 <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/fabian-bachli-A2Zf3fGbdFQ-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The best art museums</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/serhii-tyaglovsky-lCdhTOCNrt4-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The chains of our lives</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/mika-AZXye0EF9hE-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Through the eyes of street <br> artists</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size" src="./mag-img/eli-sivakova-ulCq_b0rfx0-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Artist who want to rise <br> above</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                 <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/pexels-eberhard-grossgasteiger-2086361 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Secret garden</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/pexels-steve-johnson-1572386 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Getting real</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/allyson-beaucourt-HaD6zYONkg0-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Most colorful places</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div> 
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/marjan-blan-marjanblan-wUGWd28H-3E-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Keep on Smiling</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/jazmin-quaynor-CXjp1ycr5Vw-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>History of Paper</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/massimo-virgilio-h9143TsQjHQ-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>How are your, really?</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img  class="mx-auto img-size" src="./mag-img/enzo-tommasi-wlxJ4idMTUk-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Beauty of Colors</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                     <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/maria-orlova-bU8TeXhsPcY-unsplash (1) 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Colorful Future</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-4 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/karen-khafagy-7S80NSEEVqU-unsplash (1) 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Only in Your Heart</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="flex mt-32 mr-60 gap-2 mb-32 items-center justify-end">
        <h1 @click="goToAuthors" class="text-xl hover:cursor-pointer"><strong>NEXT</strong></h1><img class="w-5" src="./img/Vector.png" alt="">  
    </div>

    <section class="mb-32">
        <div class="flex justify-center">
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full"></button>
                </div>
                <img  class="mx-auto img-size" src="./mag-img/birmingham-museums-trust-TWavMkqC_cc-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The devil is the details</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                     <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full"></button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/amelia-brown-yWNiCZw5yps-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>An indestructible hope</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div @click="goToMagazinePost" class="outline p-7 hover:cursor-pointer">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full"></button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/simon-sun-PLai_SojR78-unsplash 1@2x.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>Street art festival</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

</template>

<style scoped>
.img-size {
    width: 18rem;
}


.size {
    font-size: 230px;
}
</style>