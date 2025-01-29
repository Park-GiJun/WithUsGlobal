<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
    import languageStore, { t } from '$lib/stores/language';

    // 푸터 섹션 구조
    $: sections = [
        {
            title: t('footer.sections.company', $languageStore),
            links: [
                { href: '/about', label: t('header.about', $languageStore) },
                { href: '/privacy', label: t('footer.links.privacy', $languageStore) },
                { href: '/terms', label: t('footer.links.terms', $languageStore) },
            ]
        },
        {
            title: t('footer.sections.services', $languageStore),
            links: [
                { href: '/jobs', label: t('header.jobs', $languageStore) },
                { href: '/seekers', label: t('header.seekers', $languageStore) },
                { href: '/study', label: t('header.study', $languageStore) },
                { href: '/invest', label: t('header.investment', $languageStore) },
            ]
        },
        {
            title: t('footer.sections.contact', $languageStore),
            info: [
                t('header.contact.tel', $languageStore),
                t('header.contact.email', $languageStore)
            ]
        }
    ];
</script>

<footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4">
        <!-- 상단 섹션 -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
            <!-- 회사 정보 -->
            <div>
                <img src="/logo-white.svg" alt={t('footer.company', $languageStore)} class="h-8 w-auto mb-4" />
                <p class="text-sm mb-4">{t('footer.address', $languageStore)}</p>
            </div>

            <!-- 푸터 섹션들 -->
            {#each sections as section}
                <div>
                    <h3 class="text-white font-semibold mb-4">{section.title}</h3>
                    {#if section.links}
                        <ul class="space-y-2">
                            {#each section.links as link}
                                <li>
                                    <a
                                            href={link.href}
                                            class="text-sm hover:text-lime-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {:else if section.info}
                        <ul class="space-y-2">
                            {#each section.info as item}
                                <li class="text-sm">{item}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </div>

        <!-- 하단 저작권 -->
        <div class="pt-8 mt-8 border-t border-gray-800 text-sm text-center">
            {t('footer.copyright', $languageStore)}
        </div>
    </div>
</footer>