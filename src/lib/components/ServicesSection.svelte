<!-- src/lib/components/ServicesSection.svelte -->
<script lang="ts">
    import languageStore, { t } from '$lib/stores/language';

    const services = [
        {
            icon: '🌏',
            title: {
                ko: '한국 취업',
                en: 'Korea Recruitment'
            },
            description: {
                ko: '국내 기업 취업.',
                en: '.'
            }
        },
        {
            icon: '🎓',
            title: {
                ko: '구인',
                en: '구인'
            },
            description: {
                ko: '국내 구인.',
                en: '.'
            }
        },
        {
            icon: '💼',
            title: {
                ko: '투자 컨설팅',
                en: 'Invest Consulting'
            },
            description: {
                ko: '투자 컨설팅.',
                en: '.'
            }
        },
        {
            icon: '🤝',
            title: {
                ko: '기업 파트너십',
                en: 'Corporate Partnership'
            },
            description: {
                ko: '글로벌 기업들과의 파트너십을 통해 다양한 비즈니스 기회를 창출합니다.',
                en: 'We create diverse business opportunities through partnerships with global companies.'
            }
        }
    ];
</script>

<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {$languageStore === 'ko' ? '우리의 서비스' : 'Our Services'}
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                {$languageStore === 'ko'
                    ? '위더스글로벌은 글로벌 인재 채용과 교육을 위한 종합 솔루션을 제공합니다.'
                    : 'WithUs Global provides comprehensive solutions for global talent recruitment and education.'}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each services as service}
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div class="text-4xl mb-4">{service.icon}</div>
                    <h3 class="text-xl font-semibold mb-3">
                        {service.title[$languageStore]}
                    </h3>
                    <p class="text-gray-600">
                        {service.description[$languageStore]}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>