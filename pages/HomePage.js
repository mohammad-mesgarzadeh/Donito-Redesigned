const HomePage = () => {
    return `
    <div class="container py-9 px-6 md:px-20 mx-auto">
        <!-- section 1 -->
        <section
            class="relative rounded-2xl overflow-hidden p-6 md:p-[80px] bg-gradient-to-t from-[#0b1a2f] to-[#0f2437]">

            <div
                class="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full">
            </div>

            <div class="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-12 items-start">

                <article class="flex flex-col gap-6">

                    <header>
                        <h2 class="text-[32px] sm:text-[40px] font-bold text-light mb-6 text-center xl:text-right text-white">
                            راحت‌تر و سریع‌تر از همیشه
                            <strong class="text-[#2196f3] font-bold">حمایت مالی</strong> دریافت کنید!
                        </h2>
                    </header>

                    <p class="text-gray-200 leading-relaxed text-sm font-Vazir max-w-xl">
                        پلتفرم دونیتو صدها قابلیت جدید برای استریمرها و تولیدکنندگان محتوا فراهم کرده است. دونیتو با
                        استفاده
                        از زیرساخت قدرتمند زرین‌پال، یک پلتفرم سریع و مطمئن را برای کسب و افزایش درآمد در اختیار
                        تولیدکنندگان محتوا قرار داده است.
                    </p>

                    <button
                        class="mt-10 relative inline-flex items-center justify-center px-8 py-4 bg-[#2196f3] text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#1976d2] hover:scale-105 cursor-pointer">

                        <a href="#" class="z-10">ورود یا ثبت‌نام</a>

                        <span
                            class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl"></span>

                    </button>

                </article>

                <figure class="relative mt-10 xl:mt-0 flex justify-center">

                    <div
                        class="relative w-[280px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">

                       

                        <img src="images/hero.webp" alt="Hero"
                            class="w-full h-full object-contain relative z-0 transition-transform duration-500 hover:scale-105">

                    </div>

                </figure>

            </div>

        </section>

        <!-- section 2 -->

        <section  class="relative mb-28">

            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full">
            </div>

            <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <article
                    class="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#10263b] to-[#091520] p-6 text-white transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.12)]">

                    <div
                        class="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500">
                    </div>

                    <figure class="relative overflow-hidden rounded-2xl mb-6">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent z-10">
                        </div>

                        <img src="images/container.webp"
                            class="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="">

                    </figure>

                    <div class="relative z-10">

                        <span
                            class="inline-flex px-4 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs mb-5">
                            رایگان
                        </span>

                        <h2 class="font-bold text-2xl leading-10 mb-4">
                            شروع به کسب درآمد،
                            <span class="text-cyan-400">
                                کاملاً رایگان!
                            </span>
                        </h2>

                        <p class="text-[#c9d7e3] leading-8 font-Vazir text-sm">
                            در دونیتو نیازی به خرید اشتراک برای شروع کسب درآمد و دریافت حمایت ندارید. کافی است ثبت‌نام
                            کنید و لینک صفحه خود را در اختیار جامعه هدف‌تان قرار دهید. هرچه حمایت بیشتری دریافت کنید، ما
                            در دونیتو امکانات هیجان‌انگیز بیشتری در اختیار شما می‌گذاریم.


                        </p>

                    </div>

                </article>

                <article
                    class="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#10263b] to-[#091520] p-6 text-white transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.12)]">

                    <div
                        class="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500">
                    </div>

                    <figure class="relative overflow-hidden rounded-2xl mb-6">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent z-10">
                        </div>

                        <img src="images/container1.webp"
                            class="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="">

                    </figure>

                    <div class="relative z-10">

                        <span
                            class="inline-flex px-4 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs mb-5">
                            تسویه سریع
                        </span>

                        <h2 class="font-bold text-2xl leading-10 mb-4">
                            تسویه حساب
                            <span class="text-cyan-400">
                                خودکار و آنی!
                            </span>
                        </h2>

                        <p class="text-[#c9d7e3] leading-8 text-sm font-Vazir">
                            دونیتو با استفاده از ابزارهای قدرتمند زرین‌پال، حمایت دریافت شده شما را هر سه‌شنبه کاری هفته
                            بدون نیاز به ثبت درخواست تسویه، به صورت خودکار تسویه می‌کند. اگر نیاز به تسویه فوری و آنی
                            داشته باشید، دونیتو ظرف کم‌تر از دو ساعت، با دریافت کارمزد درخواست تسویه آنی شما را انجام
                            می‌دهد.


                        </p>

                    </div>

                </article>

                <article
                    class="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-[#10263b] to-[#091520] p-6 text-white transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.12)]">

                    <div
                        class="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500">
                    </div>

                    <figure class="relative overflow-hidden rounded-2xl mb-6">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent z-10">
                        </div>

                        <img src="images/container2.webp"
                            class="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="">

                    </figure>

                    <div class="relative z-10">

                        <span
                            class="inline-flex px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-5">
                            بدون محدودیت
                        </span>

                        <h2 class="font-bold text-2xl leading-10 mb-4">
                            دریافت
                            <span class="text-green-400">
                                حمایت مالی
                            </span>
                            بدون محدودیت
                        </h2>

                        <p class="text-[#c9d7e3] leading-8 text-sm font-Vazir">
                            در دونیتو محدودیتی برای دریافت حمایت مالی ندارید. به هر میزان می‌توانید در روز حمایت دریافت
                            کنید و کسب درآمد کنید. ما برای کسب درآمد بیشتر در کنار شما هستیم.


                        </p>

                    </div>

                </article>

            </div>

        </section>

        <!-- section 3 -->
        <section
            class="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-[#0f2437] to-[#07111f] py-16 px-6 md:px-12">

            <div
                class="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full">
            </div>

            <div
                class="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full">
            </div>

            <div class="relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <div class="relative w-full lg:w-1/2 flex justify-center">

                    <div class="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full">
                    </div>

                    <div
                        class="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#07111f]/60 via-transparent to-transparent z-10 pointer-events-none">
                        </div>

                        <iframe class="relative z-0 w-[330px] sm:w-[560px] h-[190px] sm:h-[315px]"
                            src="https://www.aparat.com/video/video/embed/videohash/kklgfk3/vt/frame" allowfullscreen>
                        </iframe>

                    </div>

                </div>

                <div class="w-full lg:w-1/2 text-white text-center lg:text-right">

                    <span
                        class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">

                        جشنواره ویژه دونیتو

                    </span>

                    <h2 class="text-4xl md:text-5xl font-bold leading-[1.5] mb-8">

                        به دونیتو،
                        <span
                            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                            سوییچ کن!
                        </span>

                    </h2>

                    <p class="text-gray-300 leading-9 mb-5 text-lg">
                        با ثبت نام در دونیتو و فعال سازی حساب کاربری و دریافت حداقل یک دونیت به مبلغ 40 هزار تومان در
                        جشنواره قرعه کشی یک دستگاه پلی استیشن 5 شرکت کنید.


                    </p>

                    <p class="text-gray-400 leading-9 mb-10">
                   همچنین حامیان مالی ( دونیت کنندگان ) نیز با دونیت کردن شما شانس برنده شدن یک دستگاه پلی استیشن 5 دیگر را خواهند داشت.


                    </p>

                    <button
                        class="group transition-all duration-300 hover:scale-105 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_40px_rgba(34,211,238,0.35)] inline-flex items-center gap-3 cursor-pointer">

                        <span>شروع جشنواره</span>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">

                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />

                        </svg>

                    </button>

                </div>

            </div>

        </section>

        <!-- section 4 -->

        <section  class="relative py-24 overflow-hidden">

            <div
                class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2196f3]/10 blur-3xl rounded-full">
            </div>

            <div class="relative max-w-7xl mx-auto px-6">

                <div id="features" class="text-center mb-16">
                    <span class="inline-block px-4 py-2 rounded-full bg-[#0f2237] text-[#2196f3] text-sm mb-5">
                        چرا دونیتو؟
                    </span>

                    <h2 class="text-white text-4xl lg:text-5xl font-black mb-6">
                        ویژگی‌های دونیتو
                    </h2>

                    <p class="text-gray-400 max-w-2xl mx-auto leading-8">
                       سرویس‌های متنوع و درگاه دریافت حمایت مالی دونیتو، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.

                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div
                        class="group bg-[#081520] border border-[#1a334a] rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-[#2196f3] hover:shadow-[0_0_40px_rgba(33,150,243,0.15)]">

                        <div
                            class="w-16 h-16 rounded-2xl bg-[#0f2237] flex items-center justify-center mb-6 group-hover:bg-[#2196f3] transition">

                            <svg class="w-7 h-7 text-[#2196f3] group-hover:text-white transition" fill="currentColor"
                                viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                        </div>

                        <h3 class="text-white text-2xl font-bold mb-4">
                            ضمانت پرداخت
                        </h3>

                        <p class="text-gray-400 leading-8">
                           درگاه حمایت مالی دونیتو، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را در اختیار حامیان و مشتریان شما قرار می‌دهد.


                        </p>
                    </div>

                    <div
                        class="group bg-[#081520] border border-[#1a334a] rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-[#2196f3] hover:shadow-[0_0_40px_rgba(33,150,243,0.15)]">

                        <div
                            class="w-16 h-16 rounded-2xl bg-[#0f2237] flex items-center justify-center mb-6 group-hover:bg-[#2196f3] transition">

                            <svg class="w-7 h-7 text-[#2196f3] group-hover:text-white transition" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="headset" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path class="" fill="currentColor"
                                    d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z">
                                </path>
                            </svg>
                        </div>

                        <h3 class="text-white text-2xl font-bold mb-4">
                            پشتیبانی ۲۴/۷
                        </h3>

                        <p class="text-gray-400 leading-8">
                           هفت روز هفته، با پشتیبانی ۲۴ ساعته‌ی دونیتو، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.
                        </p>
                    </div>

                    <div
                        class="group bg-[#081520] border border-[#1a334a] rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-[#2196f3] hover:shadow-[0_0_40px_rgba(33,150,243,0.15)]">

                        <div
                            class="w-16 h-16 rounded-2xl bg-[#0f2237] flex items-center justify-center mb-6 group-hover:bg-[#2196f3] transition">

                            <svg class="w-7 h-7 text-[#2196f3] group-hover:text-white transition" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="sack-dollar" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path class="" fill="currentColor"
                                    d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z">
                                </path>
                            </svg>
                        </div>

                        <h3 class="text-white text-2xl font-bold mb-4">
                            سرعت تسویه
                        </h3>

                        <p class="text-gray-400 leading-8">
دونیتو با استفاده از ابزارهای قدرتمند زرین‌پال، بهترین خدمات درگاه پرداخت با بالاترین میزان تراکنش‌های موفق را ارائه می‌دهد.

                        </p>
                    </div>
                    <div
                        class="group bg-[#081520] border border-[#1a334a] rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-[#2196f3] hover:shadow-[0_0_40px_rgba(33,150,243,0.15)]">

                        <div
                            class="w-16 h-16 rounded-2xl bg-[#0f2237] flex items-center justify-center mb-6 group-hover:bg-[#2196f3] transition">

                            <svg class="w-7 h-7 text-[#2196f3] group-hover:text-white transition" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="shield-halved" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path class="" fill="currentColor"
                                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z">
                                </path>
                            </svg>
                        </div>

                        <h3 class="text-white text-2xl font-bold mb-4">
                            امنیت پرداخت
                        </h3>

                        <p class="text-gray-400 leading-8">
                          درگاه امن دونیتو، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.


                        </p>
                    </div>

                </div>

            </div>

        </section>
        <!-- section 5 -->

        <section class="text-white py-16 px-5 ">

            <div class="max-w-4xl mx-auto">

                <div class="text-center mb-12">
                    <span class="text-cyan-400 font-semibold tracking-widest text-sm">
                        سوالات متداول
                    </span>

                    <h2 class="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        هر سوالی که درباره
                        <span class="text-cyan-400">دونیتو</span>
                        داشته باشید...
                    </h2>

                    <p class="text-[#9fb3c8] mt-5 text-lg">
                        پاسخ تمام سوالات شما درباره امکانات، اتصال و استفاده از دونیتو
                    </p>
                </div>

                <div class="flex flex-col gap-5">
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                دونیتو برای کدام پلتفرم‌های استریم فعال است؟
                            </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو در فاز اول خود هشدار رویدادهای پلتفرم‌های توییچ و آپارات را پشتیبانی کرده است و بزودی
                            پلتفرم های دیگری نیز به آن اضافه خواهد شد.
                        </div>

                    </div>

                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <div>
                                <h3 class="font-bold text-lg md:text-xl">
                                    چقدر بعد از دونیت شدن پول به حساب من واریز می‌شود؟

                                </h3>
                            </div>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            در دونیتو شما نیاز به ثبت درخواست تسویه ندارید. دونیتو به صورت خودکار مانده قابل تسویه شما
                            را در هر سه‌شنبه کاری هفته به حساب شما واریز خواهد کرد. همچنین دونیتو امکان تسویه آنی حداکثر
                            تا دو ساعت را نیز در اختیار کاربران خود قرار داده است.
                        </div>

                    </div>

                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <div>
                                <h3 class="font-bold text-lg md:text-xl">
                                    حداکثر مبلغ پرداخت برای دونیت چقدر است؟

                                </h3>
                            </div>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو محدودیتی برای مبلغ پرداخت برای کاربران خود قرار نداده است. محدودیت دونیتو همان
                            محدودیت‌های بانکی کشور است.

                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                چرا از دونیتو به جای سرویس‌های دیگر حمایت مالی استفاده کنم؟
                            </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو روی پلتفرم قدرتمند زرین‌پال پیاده‌سازی شده است. به همین دلیل، سرعت و امنیت بالای خود
                            را ضمانت می‌کند.

                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                دونیتو غیر از سرویس دونیت و حمایت مالی، سرویس‌های دیگری نیز در اختیار تولید کنندگان
                                محتوا برای درآمدزایی قرار می‌دهد؟
                            </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو در حال توسعه سرویس‌های متنوعی برای درآمدزایی تولید کنندگان محتوا است که به زودی ارائه
                            خواهد شد.
                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                برای استفاده از دونیتو باید احراز هویت شویم؟
                            </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            برای استفاده از دونیتو ابتدا باید در زرین‌پال ثبت‌نام کنید و فرآیندهای پایه آن را طی کنید.
                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                آیا دونیتو امکان پرداخت غیر ریالی هم دارد؟ مثلا کریپتو؟ </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            بله. این سرویس به زودی به کاربرانی که سطح VIP دارند ارائه خواهد شد. سطوح کاربران در دونیتو
                            بر اساس فعالیت‌ها تعریف می‌شود و هیچ هزینه‌ای برای آن دریافت نمی‌شود.
                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                اگر در ایران نباشیم هم امکان استفاده از دونیتو وجود دارد؟ </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            بله سرویس‌های دونیتو محدودیت جغرافیایی برای استفاده ندارد.
                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                دونیتو با زرین‌پال چه ارتباطی دارد؟ </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو یکی از پروژه‌های پلتفرم زرین‌پال است و بر بستر قدرمند این سرویس پیاده‌سازی شده است.


                        </div>

                    </div>
                    <div
                        class="faq-item group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] ">

                        <button class="w-full flex items-center justify-between p-6 text-right cursor-pointer">

                            <h3 class="font-bold text-lg md:text-xl">
                                دونیتو برای کدام پلتفرم‌های استریم فعال است؟
                            </h3>

                            <div
                                class="faq-icon min-w-[48px] h-12 w-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:rotate-180">

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">

                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>

                            </div>

                        </button>

                        <div class="faq-answer px-6 pb-6 text-[#c9d7e3] leading-8 hidden">
                            دونیتو ۱۰٪ تا سقف ۲۰۰ هزار تومان از هر تراکنش را به عنوان کارمزد کسر می‌کند. این کارمزد شامل
                            همه هزینه‌های عملیات بانکی و مالیاتی می‌شود.
                        </div>

                    </div>


                </div>

            </div>

        </section>

        <!-- section 6 -->
        <section class="relative overflow-hidden py-28 px-5 text-white">

            <div
                class="absolute top-5 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full">
            </div>

            <div class="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <div class="flex flex-col items-start text-right">

                    <span
                        class="mb-6 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-md">
                        پلتفرم حمایت مالی استریمرها
                    </span>

                    <h2 class="text-4xl md:text-4xl font-bold leading-[1.4] mb-6">
                        شروع استریم و دریافت
                        <span
                            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                            حمایت مالی
                        </span>

                        در کمتر از ۱ دقیقه
                    </h2>

                    <p class="text-gray-300 text-lg leading-9 max-w-xl mb-10">
                        با دونیتو خیلی سریع صفحه حمایت مالی خودت رو بساز،
                        به OBS متصل شو و درآمدت رو هنگام استریم دریافت کن.
                    </p>

                    <div class="flex flex-wrap gap-4">

                        <button
                            class="group transition-all duration-300 hover:scale-105 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_40px_rgba(34,211,238,0.35)] flex items-center gap-3 cursor-pointer">

                            <span>شروع کن</span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">

                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />

                            </svg>

                        </button>

                        <button
                            class="transition-all duration-300 hover:bg-white/10 border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-white cursor-pointer">
                            مشاهده امکانات
                        </button>

                    </div>

                    <div class="flex gap-10 mt-14 flex-wrap">

                        <div>
                            <h3 class="text-3xl font-bold text-cyan-400">+10K</h3>
                            <p class="text-gray-400 mt-2">استریمر فعال</p>
                        </div>

                        <div>
                            <h3 class="text-3xl font-bold text-cyan-400">24/7</h3>
                            <p class="text-gray-400 mt-2">پشتیبانی</p>
                        </div>

                        <div>
                            <h3 class="text-3xl font-bold text-cyan-400">100%</h3>
                            <p class="text-gray-400 mt-2">اتصال سریع</p>
                        </div>

                    </div>

                </div>

                <div class="relative flex justify-center">

                    <div class="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full">
                    </div>

                    <div
                        class="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent z-10">
                        </div>

                        <div
                            class="absolute top-5 right-5 z-20 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-300/20 backdrop-blur-md text-sm text-cyan-200">
                            اتصال سریع به OBS
                        </div>

                        <img src="images/mock.webp" alt="Donito Mockup"
                            class="relative z-0 w-full max-w-[650px] object-contain transition-transform duration-500 hover:scale-105">

                    </div>

                </div>

            </div>

        </section>
    
       
    </div>
    `;
};

export default HomePage;