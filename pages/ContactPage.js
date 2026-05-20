const ContactPage = () => {
    return `
              <div class="py-12 px-6 md:px-20 ">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            <div class="text-white bg-[#0f2237] p-6 rounded-2xl shadow-lg border border-white/5">

                <h2 class="text-2xl font-bold mb-6 text-white">
                    اطلاعات تماس
                </h2>

                <div class="space-y-4 text-gray-300 text-sm leading-7">

                    <p>
                        <span class="text-white font-semibold">نشانی:</span>
                        تهران، یوسف‌آباد، کوچه بیستم، پلاک ۶۱، واحد ۲
                    </p>

                    <p>
                        <span class="text-white font-semibold">تلفن پشتیبانی:</span>
                        ۴۱۲۳۹-۰۲۱
                    </p>

                    <div class="flex flex-col sm:flex-row sm:gap-6">
                        <p>
                            <span class="text-white font-semibold">کد پستی:</span>
                            ۱۴۳۱۹۶۵۳۷۱
                        </p>

                        <p>
                            <span class="text-white font-semibold">فکس:</span>
                            ۴۵۶۲۸۸۸۸-۰۲۱
                        </p>
                    </div>

                    <p>
                        <span class="text-white font-semibold">ساعات کاری:</span>
                        شنبه تا چهارشنبه از ۹ صبح تا ۵ عصر
                    </p>

                </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <iframe title="map-iframe"
                    src="https://neshan.org/maps/iframe/places/aae7f5f52e76154330379a120362db90#c35.728-51.409-15z-0p/35.72848598835353/51.403616650836625"
                    class="w-full h-[420px] md:h-full min-h-[420px]" loading="lazy" allowfullscreen>
                </iframe>
            </div>

        </div>

    </div>
    `;
};

export default ContactPage;