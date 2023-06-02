

export default function Banner(){

    return(
        <div class="w-full">
        <div class="flex justify-between items-center max-w-[1080px] h-full mx-auto relative">
            <img src="/hero.png" alt="" class="block sm:hidden"/>
            <img src="/hero-desktop.png" alt="" class="hidden sm:block brightness-40"/>
            <div class="absolute w-full flex flex-col items-center">
                <p class="text-white text-[48px] font-semibold flex flex-col items-center">Feliz dia do <span class="text-[#FFCC00] text-[56px] font-bold mt-[-20px]">CLIENTE</span></p>
                <p class="text-white text-center px-4">Hoje é o dia de quem nos motiva a ser melhor, sem você nada se constrói, obrigado por fazer parte da nossa história.</p>
                <button class="bg-[#FFCC00] text-[#63038C] rounded-[10px] py-2 px-5 mx-auto font-bold mt-4">
                    VEJA NOSSOS DESCONTOS
                </button>
            </div>
        
        </div>
        
    </div>
    )
}