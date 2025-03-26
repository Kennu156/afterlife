<script setup>
import Navigation from '../components/navigation.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToBack = () => router.back();
const goToMagazine = () => router.push('/magazine');

</script>

<template>
    <Navigation/>
    <div class="flex justify-around items-center mb-32">
        <div class="flex items-center gap-2">
            <img src="./img/Vector (1).png" alt="">
            <h1 @click="goToBack" class="hover:cursor-pointer">GO BACK</h1>   
        </div>
        <h1 class="text-2xl"><strong>MAGAZINE</strong></h1>
    </div>
    <section class="mb-32">
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
                <button class="outline rounded-3xl py-2 px-3">LABEL</button>
            </div>
        </div>
    </div>

    <img class="block mx-auto w-[95%]  mt-36" src="./img/diogo-nunes-Wa9ilX9XYOI-unsplash 1.png" alt="">
    </section>
    <section class="flex">
        <div class="grid grid-cols-2">
            <div class="flex flex-col gap-5 mx-auto">
                <div class="flex items-center gap-9">
                    <img class="w-1/4 rounded-full" src="./img/jack-finnigan-rriAI0nhcbc-unsplash 1.png" alt="">
                    <h1 class="text-6xl"><strong>Jakob<br> Gronberg</strong></h1> 
                </div>

                <img class="h-1 mx-auto" src="./img/line (1).png" alt="">
                <div class="flex gap-10 flex-col mt-10">
                    <div class="flex justify-between">
                        <h1><strong>Date</strong></h1>
                        <p>16. March 2022</p>
                    </div>
                    <div class="flex justify-between">
                        <h1><strong>Read</strong></h1>
                        <p>2 Min</p>                        
                    </div>
                    <div class="flex justify-between">
                        <h1><strong>Share</strong></h1>
                        <img src="./img/social (1).png" alt="">
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-10">
                <p class="text-2xl mb-10"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>  tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare <br> arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</strong></p>
                <p class="text-xl">Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius.<br> 
                    Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus<br>
                    nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et.<br>
                    Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus<br>
                    egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque<br>
                    eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum<br>
                    iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam<br>
                    pellentesque nec nam.</p>
                <p class="text-xl">
                    Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque<br> 
                    elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus<br> 
                    id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo<br> 
                    laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis<br> 
                    donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis<br> 
                    bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar<br> 
                    etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                </p>
            <img class="w-[90%]" src="./img/line (3).png" alt="">                
            </div>
            <div>

            </div>
            <div class="flex flex-col gap-10 mt-16">
                <h1 class="text-6xl"><strong>" The greatest glory in living <br>lies not in never falling, but in <br> rising every time we fall</strong></h1>
                <p>Nelson Mandela</p>
                <img class="w-[90%]" src="./img/line (3).png" alt="">
                <p class="text-2xl mb-10"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>  tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare <br> arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</strong></p>
                <p class="text-xl">Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius.<br> 
                    Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus<br>
                    nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et.<br>
                    Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus<br>
                    egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque<br>
                    eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum<br>
                    iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam<br>
                    pellentesque nec nam.</p>
                <p class="text-xl">
                    Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque<br> 
                    elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus<br> 
                    id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo<br> 
                    laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis<br> 
                    donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis<br> 
                    bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar<br> 
                    etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                </p>
            </div>  
        </div>
    </section>

    <img class="mb-28 mt-44 mx-auto w-[90%]" src="./img/line (3).png" alt="">

    <section class="mb-60">
        <div class="flex justify-between items-center mx-60 mb-32">
                <h1 class="text-9xl"><strong>Latest Posts</strong></h1>
            <div class="flex items-center">
                <h1 @click="goToMagazine" class="text-xl hover:cursor-pointer"><strong>SEE ALL</strong></h1>
                <img class="w-5 ml-2" src="./img/Vector.png" alt="">   
            </div>
        </div>

        <div class="flex justify-center">
            <div class="outline p-7">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full">ART</button>
                </div>
                <img  class="mx-auto img-size" src="./mag-img/diogo-nunes-Wa9ilX9XYOI-unsplash 2.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>The devil is the details</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div class="outline p-7">
                     <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full">ART</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png" alt="">
                <div class="flex flex-col gap-10">
                    <h1 class="text-3xl mt-5"><strong>An indestructible hope</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Egestas dui id ornare arcu odio ut sem. <br> Cras ornare arcu dui vivamus arcu felis bibendum ut. <br> Porttitor leo a diam.</p>                    
                    <div class="flex gap-3">
                        <p><strong>Text</strong> Jakob Gronberg</p>
                        <p><strong>Duration</strong> 1Min</p>
                    </div>
                </div>
            </div>
            <div class="outline p-7">
                    <div class="flex justify-between mb-10">
                    <h1>16. March 2022</h1>
                    <button class="outline py-1 px-6 rounded-full">SCULPTURES</button>
                </div>
                <img class="mx-auto img-size"  src="./mag-img/fabian-bachli-A2Zf3fGbdFQ-unsplash 1.png" alt="">
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