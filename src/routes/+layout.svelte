<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // 언어 상태 관리는 나중에 스토어로 분리할 수 있습니다
    let currentLang: 'ko' | 'en' = 'ko';
</script>

<Header />

<main>
    <slot />
</main>

<Footer lang={currentLang} />