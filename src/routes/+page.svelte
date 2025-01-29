<!-- src/routes/+page.svelte -->
<script lang="ts">
    import HeroSlider from '$lib/components/HeroSlider.svelte';
    import ServicesSection from '$lib/components/ServicesSection.svelte';
    import languageStore, { t } from '$lib/stores/language';
</script>

<!-- Hero 섹션 -->
<HeroSlider />

<!-- 서비스 섹션 -->
<ServicesSection />

<!-- 회사 소개 섹션 -->
<section class="py-20">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                    {$languageStore === 'ko'
                        ? '글로벌 인재 채용의 새로운 기준'
                        : 'New Standard in Global Recruitment'}
                </h2>
                <p class="text-gray-600 leading-relaxed">
                    {$languageStore === 'ko'
                        ? '국내 기업들의 해외 구인 지원.'
                        : 'With over 20 years of experience, WithUs Global provides the best services in global talent recruitment and education. We support global success by providing optimal solutions for both companies and talents.'}
                </p>
                <div class="grid grid-cols-2 gap-6 py-6">
                    <div>
                        <div class="text-3xl font-bold text-lime-600">1+</div>
                        <div class="text-gray-600">
                            {$languageStore === 'ko' ? '글로벌 파트너' : 'Global Partners'}
                        </div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-lime-600">00000+</div>
                        <div class="text-gray-600">
                            {$languageStore === 'ko' ? '성공적인 채용' : 'Successful Placements'}
                        </div>
                    </div>
                </div>
                <button class="px-8 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-colors">
                    {$languageStore === 'ko' ? '더 알아보기' : 'Learn More'}
                </button>
            </div>
            <div class="relative">
                <img
                        src="/images/about.jpg"
                        alt="About WithUs Global"
                        class="rounded-lg shadow-xl"
                />
                <div class="absolute -bottom-6 -right-6 bg-lime-500 text-white p-8 rounded-lg hidden md:block">
                    <div class="text-4xl font-bold">98%</div>
                    <div>
                        {$languageStore === 'ko' ? '고객 만족도' : 'Client Satisfaction'}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA 섹션 -->
<section class="py-20 bg-lime-500 text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
            {$languageStore === 'ko'
                ? '글로벌 성공의 첫걸음을 위더스글로벌과 함께하세요'
                : 'Take Your First Step to Global Success with WithUs Global'}
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
            {$languageStore === 'ko'
                ? '전문가와 상담하여 맞춤형 솔루션을 받아보세요'
                : 'Consult with our experts to receive tailored solutions'}
        </p>
        <div class="flex justify-center space-x-4">
            <button class="px-8 py-3 bg-white text-lime-500 rounded-full hover:bg-gray-100 transition-colors">
                {$languageStore === 'ko' ? '상담 신청' : 'Request Consultation'}
            </button>
            <button class="px-8 py-3 border-2 border-white rounded-full hover:bg-lime-600 transition-colors">
                {$languageStore === 'ko' ? '서비스 둘러보기' : 'Explore Services'}
            </button>
        </div>
    </div>
</section>