const StreamerPage = () => {

    const categories = [
        {
            title: "All",
            image: "images/all.png",
            live: "84"
        },

        {
            title: "Game Talk",
            image: "images/Game Talk.webp",
            live: "14"
        },

        {
            title: "Other Games",
            image: "images/Other Games.webp",
            live: "23"
        },

        {
            title: "VMP",
            image: "images/VMP.webp",
            live: "7"
        },

        {
            title: "Minecraft",
            image: "images/Minecraft.webp",
            live: "19"
        },

        {
            title: "PUBG MOBILE",
            image: "images/PUBG MOBILE.webp",
            live: "31"
        },

        {
            title: "Call of Duty: Mobile",
            image: "images/Call of Duty Mobile.webp",
            live: "16"
        },

        {
            title: "Valorant",
            image: "images/Valorant.jfif",
            live: "12"
        },

        {
            title: "Fortnite",
            image: "images/Fortnite.webp",
            live: "10"
        },

        {
            title: "League of Legends",
            image: "images/League of Legends.webp",
            live: "9"
        }
    ];

    const allStreams = [

        {
            name: "ArmanLive",
            title: "Rank Push With Squad",
            category: "PUBG MOBILE",
            viewers: "12.4K",
            image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "NimaCraft",
            title: "Building Mega City Survival",
            category: "Minecraft",
            viewers: "5.8K",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "GhostCOD",
            title: "Legendary Ranked Matches",
            category: "Call of Duty: Mobile",
            viewers: "8.2K",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "VampireTalk",
            title: "Night Stream & Chill",
            category: "Game Talk",
            viewers: "2.3K",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "VMP Persia",
            title: "Convoy Event Tonight",
            category: "VMP",
            viewers: "4.1K",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "DarkZone",
            title: "Road To Radiant",
            category: "Valorant",
            viewers: "14K",
            image: "https://images.unsplash.com/photo-1548686304-89d188a80029?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "AliGamer",
            title: "Ultimate Team Packs Opening",
            category: "EA Sports FC 25",
            viewers: "6.2K",
            image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "StormLive",
            title: "Custom Games With Viewers",
            category: "Fortnite",
            viewers: "7.7K",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop"
        },

        {
            name: "NoobMaster",
            title: "Funny Moments Compilation",
            category: "Other Games",
            viewers: "3.1K",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    let currentCategory = "All";

    const renderStreams = () => {

        const container = document.getElementById("streamers-grid");

        const filteredStreams =
            currentCategory === "All"
                ? allStreams
                : allStreams.filter(
                    (stream) => stream.category === currentCategory
                );

        container.innerHTML = filteredStreams.map((stream) => `
        
            <div class="bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-green-400/40 transition-all duration-300 group hover:-translate-y-1">

                <div class="relative overflow-hidden">

            <div class="flex items-center justify-center h-50 bg-black">
  <div class="relative w-20 h-20">
    
    <div class="absolute inset-0 rounded-full border-4 border-gray-700"></div>
    <div class="absolute inset-0 rounded-full border-4 border-t-red-500 animate-spin"></div>

    
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-0 h-0 
                  border-l-[12px] border-l-white 
                  border-t-[8px] border-t-transparent 
                  border-b-[8px] border-b-transparent 
                  ml-1">
      </div>
    </div>

  </div>
</div>

                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                    <div class="absolute top-4 right-4">

                        <span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">

                            <span class="w-2 h-2 bg-white rounded-full animate-ping"></span>

                            LIVE

                        </span>

                    </div>

                    <div class="absolute bottom-4 left-4">

                        <div class="bg-black/60 backdrop-blur-md text-white text-sm px-3 py-1 rounded-full">
                            👁 ${stream.viewers}
                        </div>

                    </div>

                </div>

                <div class="p-5">

                    <div class="flex items-center justify-between mb-3">

                        <span class="text-green-400 text-xs font-bold uppercase tracking-wider">
                            ${stream.category}
                        </span>

                        <span class="text-gray-500 text-xs">
                            LIVE NOW
                        </span>

                    </div>

                    <h3 class="text-white font-black text-lg mb-3 line-clamp-1 leading-8">
                        ${stream.title}
                    </h3>

                    <div class="flex items-center justify-between">

                        <div class="flex items-center gap-3">

                            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold">
                                ${stream.name.charAt(0)}
                            </div>

                            <p class="text-gray-300 text-sm font-semibold">
                                ${stream.name}
                            </p>

                        </div>

                        <button class="bg-green-500 hover:bg-green-400 text-black text-sm font-black px-5 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/30">
                            مشاهده
                        </button>

                    </div>

                </div>

            </div>

        `).join("");
    };

    const changeCategory = (category) => {

        currentCategory = category;

        document.querySelectorAll(".category-card").forEach((card) => {

            card.classList.remove(
                "border-green-400",
                "scale-[1.03]"
            );

            card.classList.add(
                "border-white/10"
            );

        });

        const activeCard = document.getElementById(`cat-${category}`);

        activeCard.classList.remove("border-white/10");

        activeCard.classList.add(
            "border-green-400",
            "scale-[1.03]"
        );

        renderStreams();
    };

    setTimeout(() => {
        renderStreams();
    }, 100);

    return `
    
        <div class="min-h-screen px-6 md:px-10 py-10">

          

            <div class="mb-10">

                <div class="flex items-center justify-between mb-5">

                    <h2 class="text-white text-2xl font-black">
                        دسته‌بندی زنده
                    </h2>

                </div>

                <div class="relative">

                    <div class="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0b1120] to-transparent z-10 pointer-events-none"></div>

                    <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0b1120] to-transparent z-10 pointer-events-none"></div>

                    <div class="flex gap-5 overflow-x-auto pb-5 category-scroll snap-x snap-mandatory">

                        ${categories.map((category, index) => `
                        
                            <button
                                id="cat-${category.title}"
                                onclick='(${changeCategory.toString()})("${category.title}")'
                                class="category-card snap-start min-w-50 relative overflow-hidden rounded-3xl border transition-all duration-300
                                ${index === 0
            ? "border-green-400 scale-[1.03]"
            : "border-white/10"}">

                                <img
                                    src="${category.image}"
                                    class="w-full h-full object-cover"
                                />

                                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                <div class="absolute bottom-5 right-5 left-5 text-right">

                                    <h3 class="text-white font-black text-xl mb-2">
                                        ${category.title}
                                    </h3>

                                    <div class="flex items-center justify-between">

                                        <div class=" flex justify-center items-center text-gray-300">
                                         <div class="pl-2">   ${category.live} </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     class="w-5 h-5 text-gray-300">
    
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>
</svg>
                                        </div>

                                        <div class="flex items-center gap-2 text-red-400 text-xs font-bold">

                                            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>

                                            LIVE

                                        </div>

                                    </div>

                                </div>

                            </button>

                        `).join("")}

                    </div>

                </div>

            </div>

            <div 
                id="streamers-grid"
                class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7"
            ></div>

        </div>

        <style>

            .category-scroll::-webkit-scrollbar{
                height:8px;
            }

            .category-scroll::-webkit-scrollbar-thumb{
                background:#2b2b2b;
                border-radius:999px;
            }

            .category-scroll::-webkit-scrollbar-thumb:hover{
                background:#22c55e;
            }

            .category-scroll::-webkit-scrollbar-track{
                background:transparent;
            }

        </style>
    
    `;
};

export default StreamerPage;
