// // src/routes/seekers/+page.server.ts
// import { prisma } from '$lib/server/prisma';
// import { fail } from '@sveltejs/kit';
// import type { Actions } from './$types';
//
// export const actions: Actions = {
//     default: async ({ request }) => {
//         const formData = await request.formData();
//
//         try {
//             const jobSeeker = await prisma.jobSeeker.create({
//                 data: {
//                     name: formData.get('name') as string,
//                     phone: formData.get('phone') as string,
//                     email: formData.get('email') as string,
//                     birth: formData.get('birth') as string,
//                     education: formData.get('education') as string,
//                     careerYears: parseInt(formData.get('careerYears') as string),
//                     desiredJob: formData.get('desiredJob') as string,
//                     skills: formData.get('skills') as string,
//                     details: formData.get('details') as string,
//                 }
//             });
//
//             return { success: true, jobSeeker };
//         } catch (error) {
//             console.error('Failed to create job application:', error);
//             return fail(500, {
//                 message: 'Failed to create job application',
//                 error: true
//             });
//         }
//     }
// };