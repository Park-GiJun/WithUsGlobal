<!-- src/routes/jobs/+page.svelte -->
<script lang="ts">
    import { enhance } from '$app/forms';
    import languageStore, { t } from '$lib/stores/language';

    let formData = {
        companyName: '',
        phone: '',
        jobType: '',
        headcount: 1,
        details: ''
    };

    // 분류 목록
    const jobTypes = {
        ko: [
            '사무직',
            '영업/마케팅',
            'IT/개발',
            '제조/생산',
            '서비스',
            '교육',
            '기타'
        ],
        en: [
            'Office Work',
            'Sales/Marketing',
            'IT/Development',
            'Manufacturing',
            'Service',
            'Education',
            'Others'
        ]
    };
</script>

<div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">
            {$languageStore === 'ko' ? '구인 등록' : 'Post a Job'}
        </h1>

        <form
                method="POST"
                class="space-y-6 bg-white shadow-lg rounded-lg p-6"
                use:enhance
        >
            <!-- 기업명 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="companyName">
                    {$languageStore === 'ko' ? '기업명' : 'Company Name'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        bind:value={formData.companyName}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 전화번호 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="phone">
                    {$languageStore === 'ko' ? '전화번호' : 'Phone Number'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        bind:value={formData.phone}
                        placeholder={$languageStore === 'ko' ? '010-0000-0000' : '123-456-7890'}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 직종 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="jobType">
                    {$languageStore === 'ko' ? '직종' : 'Job Type'}
                    <span class="text-red-500">*</span>
                </label>
                <select
                        id="jobType"
                        name="jobType"
                        required
                        bind:value={formData.jobType}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                >
                    <option value="">{$languageStore === 'ko' ? '선택해주세요' : 'Please select'}</option>
                    {#each jobTypes[$languageStore] as type}
                        <option value={type}>{type}</option>
                    {/each}
                </select>
            </div>

            <!-- 인원수 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="headcount">
                    {$languageStore === 'ko' ? '인원수' : 'Number of Positions'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="number"
                        id="headcount"
                        name="headcount"
                        min="1"
                        required
                        bind:value={formData.headcount}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 세부내용 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="details">
                    {$languageStore === 'ko' ? '세부내용' : 'Details'}
                    <span class="text-red-500">*</span>
                </label>
                <textarea
                        id="details"
                        name="details"
                        required
                        rows="6"
                        bind:value={formData.details}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                ></textarea>
            </div>

            <!-- 제출 버튼 -->
            <div class="text-center">
                <button
                        type="submit"
                        class="bg-lime-500 text-white px-8 py-3 rounded-full hover:bg-lime-600 transition-colors font-medium"
                >
                    {$languageStore === 'ko' ? '등록하기' : 'Submit'}
                </button>
            </div>
        </form>
    </div>
</div>