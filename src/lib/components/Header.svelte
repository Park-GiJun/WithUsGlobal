<!-- src/lib/components/Header.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import languageStore, { t } from '$lib/stores/language';
    import { goto } from '$app/navigation';

    let logoClickCount = 0;
    let lastClickTime = 0;

    let isMenuOpen = false;
    const toggleMenu = () => isMenuOpen = !isMenuOpen;

    // 메뉴 아이템 구조
    $: menuItems = [
        { href: '/', label: t('header.home', $languageStore) },
        { href: '/about', label: t('header.about', $languageStore) },
        { href: '/jobs', label: t('header.jobs', $languageStore) },
        { href: '/seekers', label: t('header.seekers', $languageStore) },
        { href: '/study', label: t('header.study', $languageStore) },
        { href: '/invest', label: t('header.investment', $languageStore) },
    ];

    const handleLogoClick = (e: MouseEvent) => {
        e.preventDefault();
        const currentTime = new Date().getTime();

        // 3초 이내의 클릭만 카운트
        if (currentTime - lastClickTime > 3000) {
            logoClickCount = 1;
        } else {
            logoClickCount++;
        }

        lastClickTime = currentTime;

        if (logoClickCount >= 5) {
            logoClickCount = 0;
            goto('/admin');
        } else {
            goto('/');
        }
    };
</script>

<!-- 최상단 정보 바 -->
<div class="bg-lime-600 text-white text-sm py-1">
    <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="hidden md:flex space-x-4">
            <span>{t('header.contact.tel', $languageStore)}</span>
            <span>{t('header.contact.email', $languageStore)}</span>
        </div>
        <button
                on:click={() => languageStore.toggle()}
                class="px-2 py-0.5 hover:bg-lime-500 rounded transition-colors"
        >
            {$languageStore.toUpperCase()}
        </button>
    </div>
</div>

<!-- 메인 헤더 -->
<header class="bg-white shadow-md">
    <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <!-- 로고 -->
            <a
                    href="/"
                    on:click={handleLogoClick}
                    class="flex items-center space-x-2"
            >
                <img src="/logo.svg" alt="WithUs Global Logo" class="h-8 w-auto" />
                <span class="font-bold text-xl text-lime-600">{t('footer.company', $languageStore)}</span>
            </a>

            <!-- 데스크톱 메뉴 -->
            <div class="hidden md:flex items-center space-x-8">
                {#each menuItems as item}
                    <a
                            href={item.href}
                            class="text-gray-700 hover:text-lime-600 transition-colors relative py-6 group"
                            class:text-lime-600={$page.url.pathname === item.href}
                    >
                        {item.label}
                        <span class="absolute bottom-4 left-0 w-full h-0.5 bg-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </a>
                {/each}
            </div>

            <!-- 모바일 메뉴 버튼 -->
            <button
                    class="md:hidden p-2 text-gray-600 hover:text-lime-600 transition-colors"
                    on:click={toggleMenu}
                    aria-label="Toggle menu"
            >
                <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                >
                    {#if isMenuOpen}
                        <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                        />
                    {:else}
                        <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                        />
                    {/if}
                </svg>
            </button>
        </div>

        <!-- 모바일 메뉴 -->
        {#if isMenuOpen}
            <div
                    transition:slide={{ duration: 200 }}
                    class="md:hidden py-4"
            >
                {#each menuItems as item}
                    <a
                            href={item.href}
                            class="block py-2 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                            class:text-lime-600={$page.url.pathname === item.href}
                            on:click={() => (isMenuOpen = false)}
                    >
                        {item.label}
                    </a>
                {/each}
            </div>
        {/if}
    </nav>
</header>