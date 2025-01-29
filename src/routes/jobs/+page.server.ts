// // src/routes/jobs/+page.server.ts
// import { prisma } from '$lib/server/prisma';
// import { fail } from '@sveltejs/kit';
// import type { Actions } from './$types';
//
// export const actions: Actions = {
//     default: async ({ request }) => {
//         const formData = await request.formData();
//
//         try {
//             const job = await prisma.job.create({
//                 data: {
//                     companyName: formData.get('companyName') as string,
//                     phone: formData.get('phone') as string,
//                     jobType: formData.get('jobType') as string,
//                     headcount: parseInt(formData.get('headcount') as string),
//                     details: formData.get('details') as string,
//                 }
//             });
//
//             return { success: true, job };
//         } catch (error) {
//             console.error('Failed to create job posting:', error);
//             return fail(500, {
//                 message: 'Failed to create job posting',
//                 error: true
//             });
//         }
//     }
// };