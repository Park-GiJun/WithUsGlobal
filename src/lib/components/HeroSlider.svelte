<!-- src/lib/components/HeroSlider.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import languageStore, { t } from '$lib/stores/language';

    const slides = [
        {
            image: '/images/hero-1.jpg',
            title: {
                ko: '글로벌 채용 솔루션',
                en: 'Global Recruitment Solutions'
            },
            subtitle: {
                ko: '당신의 꿈을 위한 최고의 파트너',
                en: 'Your Best Partner for Global Success'
            }
        },
        {
            image: '/images/hero-2.jpg',
            title: {
                ko: '해외 취업의 기회',
                en: 'International Career Opportunities'
            },
            subtitle: {
                ko: '새로운 도전을 시작하세요',
                en: 'Start Your New Journey'
            }
        },
        {
            image: '/images/hero-3.jpg',
            title: {
                ko: '유학 및 교육 프로그램',
                en: 'Study Abroad Programs'
            },
            subtitle: {
                ko: '글로벌 인재로 성장하세요',
                en: 'Grow as a Global Talent'
            }
        }
    ];

    let currentIndex = 0;
    let timer: NodeJS.Timer;

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    };

    const startAutoplay = () => {
        timer = setInterval(nextSlide, 10000);
    };

    onMount(() => {
        startAutoplay();
        return () => clearInterval(timer);
    });
</script>

<div class="relative h-[600px] overflow-hidden">
    <!-- 슬라이드 -->
    {#each slides as slide, i}
        {#if i === currentIndex}
            <div
                    transition:fade={{ duration: 800 }}
                    class="absolute inset-0 flex items-center justify-center"
                    style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({slide.image}) center/cover;"
            >
                <div class="text-center text-white space-y-4">
                    <h1 class="text-4xl md:text-6xl font-bold">
                        {slide.title[$languageStore]}
                    </h1>
                    <p class="text-xl md:text-2xl">
                        {slide.subtitle[$languageStore]}
                    </p>
                    <button class="mt-8 px-8 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-colors">
                        {$languageStore === 'ko' ? '더 알아보기' : 'Learn More'}
                    </button>
                </div>
            </div>
        {/if}
    {/each}

    <!-- 네비게이션 버튼 -->
    <button
            class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            on:click={prevSlide}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    <button
            class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            on:click={nextSlide}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>

    <!-- 인디케이터 -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {#each slides as _, i}
            <button
                    class="w-3 h-3 rounded-full transition-colors {i === currentIndex ? 'bg-white' : 'bg-white opacity-50'}"
                    on:click={() => currentIndex = i}
            ></button>
        {/each}
    </div>
</div>