const DownloadsPage = () => {
    return `
               <div class=" py-14 px-6 md:px-20 text-white">

        <div class="max-w-4xl mx-auto">

            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
                دانلود اپ اشتراک فایل دونیتو
            </h2>

            <div class="bg-[#0f2237] p-6 rounded-2xl border border-white/10 shadow-lg mb-8">

    <div class="flex items-center gap-2 mb-4">
        
        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-5 h-5 text-yellow-400"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <path d="M9 9h.01"/>
            <path d="M15 9h.01"/>
        </svg>

        <h3 class="text-xl font-bold text-white">
            سلام استریمرها
        </h3>

    </div>

    <p class="text-lg leading-8 text-gray-300">
        با اپ اشتراک فایل دونیتو، دیگه لازم نیست نگران آپلود فایل‌ها یا محدودیت‌های حجم باشی! 
        با این اپ، می‌تونی گیف دونیت‌ها و فایل‌های مورد نیاز برای دونیت‌ها رو خیلی راحت و بدون درگیر کردن اینترنت،
        مستقیماً توی OBS پخش کنی.
    </p>

</div>  

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div class="bg-[#0f2237] p-6 rounded-2xl border border-white/10">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-3">

                        <span
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-[#2196f3] text-sm font-bold shadow">
                            1
                        </span>

                        فایل‌ها رو آماده کن
                    </h3>
                    <ul class="space-y-3 text-gray-300 text-sm leading-7 ">
                        <li>- اپ رو باز کن و فایل‌هایی که می‌خوای استفاده کنی رو داخل پوشه <span
                                class="text-white font-semibold">Files</span> بریز.</li>
                        <li>- در تنظیمات ابزارهای دونیتو، گزینه اشتراک فایل رو انتخاب کن.</li>
                        <li>- بعدش فایل دلخواهت رو از لیست انتخاب کن.</li>
                    </ul>
                </div>

                <div class="bg-[#0f2237] p-6 rounded-2xl border border-white/10">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-3">

                        <span
                            class="w-8 h-8 flex items-center justify-center rounded-full bg-[#2196f3] text-sm font-bold shadow">
                            2
                        </span>

                        لینک ابزار رو تنظیم کن
                    </h3>
                    <p class="text-gray-300 text-sm leading-7">
                       - توی OBS، لینک ابزار مورد نظرت رو اضافه کن و تمام!
                        <br><br>
                       - حالا اپ آماده استفاده هست.
                    </p>
                </div>

            </div>

            <div class="mt-8 bg-yellow-500/10 border border-yellow-400/30 p-5 rounded-xl">
<h3 class="font-bold mb-2 flex items-center gap-2">

    <svg xmlns="http://www.w3.org/2000/svg"
         class="w-5 h-5 text-yellow-400 animate-pulse"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round">

        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>

    نکته مهم
</h3>                <p class="text-gray-300 text-sm leading-6">
                    در طول استریم حتماً اپ اشتراک فایل دونیتو باز باشه تا همه‌چی بدون مشکل کار کنه.
                </p>
            </div>
          <div class="text-center mt-10">

    <a href="#"
       class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-gray-200 font-bold px-8 py-4 rounded-xl transition shadow-lg">

        <svg xmlns="http://www.w3.org/2000/svg" 
             class="w-5 h-5"
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             stroke-width="2" 
             stroke-linecap="round" 
             stroke-linejoin="round">

            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>

        دانلود اپ اشتراک فایل
    </a>

 <div class="mt-6 flex items-center justify-center gap-2 text-center">

   
    <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

    <p class="text-gray-300 text-sm md:text-base font-medium tracking-wide">
        یه استریم حرفه‌ای و بی‌دردسر رو با
        <span class="text-white font-bold">دونیتو</span>
        تجربه کن
    </p>

  

</div>

</div>

        </div>

    </div>
    `;
};

export default DownloadsPage;