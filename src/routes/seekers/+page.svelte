<!-- src/routes/seekers/+page.svelte -->
<script lang="ts">
    import { enhance } from '$app/forms';
    import languageStore, { t } from '$lib/stores/language';

    let formData = {
        name: '',
        phone: '',
        email: '',
        birth: '',
        education: '',
        careerYears: 0,
        desiredJob: '',
        skills: '',
        details: ''
    };

    // 학력 목록
    const educationTypes = {
        ko: [
            '고등학교 졸업',
            '전문대학 졸업',
            '대학교 졸업',
            '대학원 졸업',
            '기타'
        ],
        en: [
            'High School',
            'Associate Degree',
            'Bachelor Degree',
            'Master/PhD',
            'Others'
        ]
    };

    // 희망 직종
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
            {$languageStore === 'ko' ? '구직 신청' : 'Job Application'}
        </h1>

        <form
                method="POST"
                class="space-y-6 bg-white shadow-lg rounded-lg p-6"
                use:enhance
        >
            <!-- 이름 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="name">
                    {$languageStore === 'ko' ? '이름' : 'Name'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        bind:value={formData.name}
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

            <!-- 이메일 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="email">
                    {$languageStore === 'ko' ? '이메일' : 'Email'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        bind:value={formData.email}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 생년월일 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="birth">
                    {$languageStore === 'ko' ? '생년월일' : 'Date of Birth'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="date"
                        id="birth"
                        name="birth"
                        required
                        bind:value={formData.birth}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 학력 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="education">
                    {$languageStore === 'ko' ? '최종학력' : 'Education'}
                    <span class="text-red-500">*</span>
                </label>
                <select
                        id="education"
                        name="education"
                        required
                        bind:value={formData.education}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                >
                    <option value="">{$languageStore === 'ko' ? '선택해주세요' : 'Please select'}</option>
                    {#each educationTypes[$languageStore] as type}
                        <option value={type}>{type}</option>
                    {/each}
                </select>
            </div>

            <!-- 경력 연차 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="careerYears">
                    {$languageStore === 'ko' ? '경력 연차' : 'Years of Experience'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="number"
                        id="careerYears"
                        name="careerYears"
                        min="0"
                        required
                        bind:value={formData.careerYears}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 희망 직종 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="desiredJob">
                    {$languageStore === 'ko' ? '희망 직종' : 'Desired Position'}
                    <span class="text-red-500">*</span>
                </label>
                <select
                        id="desiredJob"
                        name="desiredJob"
                        required
                        bind:value={formData.desiredJob}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                >
                    <option value="">{$languageStore === 'ko' ? '선택해주세요' : 'Please select'}</option>
                    {#each jobTypes[$languageStore] as type}
                        <option value={type}>{type}</option>
                    {/each}
                </select>
            </div>

            <!-- 보유 기술 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="skills">
                    {$languageStore === 'ko' ? '보유 기술' : 'Skills'}
                    <span class="text-red-500">*</span>
                </label>
                <input
                        type="text"
                        id="skills"
                        name="skills"
                        required
                        bind:value={formData.skills}
                        placeholder={$languageStore === 'ko' ? '예: Excel, PowerPoint, 영어회화' : 'e.g., Excel, PowerPoint, English'}
                        class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
            </div>

            <!-- 자기소개 및 상세내용 -->
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="details">
                    {$languageStore === 'ko' ? '자기소개 및 상세내용' : 'Introduction and Details'}
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
                    {$languageStore === 'ko' ? '신청하기' : 'Submit'}
                </button>
            </div>
        </form>
    </div>
</div>