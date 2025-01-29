<!-- src/routes/admin/inquiries/[type]/[id]/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let isAuthenticated = false;
    let data: any = null;
    let type = $page.params.type;
    let id = parseInt($page.params.id);

    // 더미 데이터
    const jobDetails = {
        id: 1,
        companyName: '테크 솔루션즈',
        phone: '010-1234-5678',
        jobType: 'IT/개발',
        headcount: 2,
        details: '웹 개발자 구인\n\n- React, Node.js 경험자\n- 3년 이상 경력\n- 연봉: 협의\n- 근무지: 서울 강남',
        date: '2025-01-29',
        status: '신규'
    };

    const seekerDetails = {
        id: 1,
        name: '김지원',
        phone: '010-1234-5678',
        email: 'kim@example.com',
        birth: '1995-01-01',
        education: '대학교 졸업',
        careerYears: 3,
        desiredJob: 'IT/개발',
        skills: 'React, Node.js, TypeScript',
        details: '3년차 웹 개발자입니다.\n\n주요 프로젝트:\n- 대규모 이커머스 플랫폼 개발\n- 실시간 채팅 시스템 구축\n- 관리자 대시보드 개발',
        date: '2025-01-29',
        status: '신규'
    };

    onMount(() => {
        isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
        if (!isAuthenticated) {
            goto('/admin');
            return;
        }

        // 더미 데이터 로드
        if (type === 'jobs') {
            data = jobDetails;
        } else {
            data = seekerDetails;
        }
    });

    const goBack = () => {
        goto('/admin/inquiries');
    };

    const updateStatus = (newStatus: string) => {
        data.status = newStatus;
    };
</script>

{#if isAuthenticated && data}
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 max-w-3xl">
            <!-- 헤더 -->
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-2xl font-bold text-gray-900">
                    {type === 'jobs' ? '구인 문의 상세' : '구직 문의 상세'}
                </h1>
                <div class="space-x-4">
                    <button
                            on:click={goBack}
                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                        목록으로
                    </button>
                </div>
            </div>

            <!-- 상세 내용 -->
            <div class="bg-white rounded-lg shadow p-6 space-y-6">
                <!-- 상태 표시 -->
                <div class="flex justify-between items-center">
          <span class="px-3 py-1 text-sm font-semibold rounded-full
            {data.status === '신규' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
            {data.status}
          </span>
                    <div class="space-x-2">
                        <button
                                on:click={() => updateStatus('검토중')}
                                class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            검토중으로 변경
                        </button>
                        <button
                                on:click={() => updateStatus('완료')}
                                class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            완료로 변경
                        </button>
                    </div>
                </div>

                <!-- 구인 문의 상세 -->
                {#if type === 'jobs'}
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">기업명</label>
                            <p class="mt-1 text-gray-900">{data.companyName}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">전화번호</label>
                            <p class="mt-1 text-gray-900">{data.phone}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">직종</label>
                            <p class="mt-1 text-gray-900">{data.jobType}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">채용 인원</label>
                            <p class="mt-1 text-gray-900">{data.headcount}명</p>
                        </div>
                        <div class="col-span-2">
                            <label class="block text-sm font-medium text-gray-700">세부내용</label>
                            <div class="mt-1 p-4 bg-gray-50 rounded whitespace-pre-line">
                                {data.details}
                            </div>
                        </div>
                    </div>

                    <!-- 구직 문의 상세 -->
                {:else}
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">이름</label>
                            <p class="mt-1 text-gray-900">{data.name}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">전화번호</label>
                            <p class="mt-1 text-gray-900">{data.phone}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">이메일</label>
                            <p class="mt-1 text-gray-900">{data.email}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">생년월일</label>
                            <p class="mt-1 text-gray-900">{data.birth}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">최종학력</label>
                            <p class="mt-1 text-gray-900">{data.education}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">경력</label>
                            <p class="mt-1 text-gray-900">{data.careerYears}년</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">희망직종</label>
                            <p class="mt-1 text-gray-900">{data.desiredJob}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">보유기술</label>
                            <p class="mt-1 text-gray-900">{data.skills}</p>
                        </div>
                        <div class="col-span-2">
                            <label class="block text-sm font-medium text-gray-700">자기소개 및 상세내용</label>
                            <div class="mt-1 p-4 bg-gray-50 rounded whitespace-pre-line">
                                {data.details}
                            </div>
                        </div>
                    </div>
                {/if}

                <!-- 하단 버튼 -->
                <div class="flex justify-end space-x-4 pt-6 border-t">
                    <button
                            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            on:click={() => {
              if (confirm('정말 삭제하시겠습니까?')) {
                alert('삭제되었습니다.');
                goBack();
              }
            }}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}