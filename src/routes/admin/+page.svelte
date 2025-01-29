<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let password = '';
    let error = false;
    let isAuthenticated = false;

    onMount(() => {
        // 세션 스토리지에서 인증 상태 확인
        isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
    });

    const handleSubmit = async () => {
        if (password === '1234') {
            error = false;
            isAuthenticated = true;
            sessionStorage.setItem('adminAuth', 'true');
            await goto('/admin/inquiries');
        } else {
            error = true;
            password = '';
        }
    };
</script>

{#if !isAuthenticated}
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900">관리자 인증</h2>
            </div>
            <form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
                <div>
                    <label for="password" class="sr-only">비밀번호</label>
                    <input
                            id="password"
                            type="password"
                            required
                            bind:value={password}
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
                            placeholder="비밀번호를 입력하세요"
                    />
                </div>
                {#if error}
                    <p class="text-red-500 text-sm">비밀번호가 올바르지 않습니다.</p>
                {/if}
                <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                    확인
                </button>
            </form>
        </div>
    </div>
{:else}
    <div>
        {#key isAuthenticated}
            {goto('/admin/inquiries')}
        {/key}
    </div>
{/if}