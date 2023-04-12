import { component$ } from '@builder.io/qwik';
import "./personalInformation.css"
import { githubUrl, myGmail, npmUrl, resumeUrl } from '~/const/url.const'


export default component$(() => {
  return (
    <div class="py-12 px-12 w-max-[1920px] mx-auto space-y-10">
      <div class="font-retroComputer text-6xl text-right text-gray-h2 py-12">
        PERSONAL INFORMATION
      </div>      
      <div class="personal-summary-block px-10 space-y-10">
        {/* summary */}
        <div class="text-3xl font-medium">
          Hi I'm Su, I have full stack developing experience since 2015. Care about the Design pattern, Clean code and Optimize dev process. 
          <br />
          Familiar with major Frontend & Backend tech or services.nice to meet you
        </div>
        {/* list */}
        <ul class="text-xl font-light personal-list space-y-8 text-[#F5F5F7] font-poppins ">
          <li>
            <div>8+ years of experience in website development, 4 years of experience as a full stack and 4 years as frontend developer, including 2 years as team leader.</div>
          </li>
          <li>
            Experiences of Automated testing for more reliable and stable codes.
          </li>
          <li>
            Focus on writing high-quality code, incorporating best practices such as solid design patterns, clean coding principles, and maintaining a consistent coding style.
          </li>
        </ul>
        {/* icons */}
        <div class="flex gap-x-6 items-center">
          <a href={githubUrl} target="_blank">
            <img src="/icons/github.svg" alt={githubUrl} />
          </a>
          <a href={`mailto:${myGmail}`}>
            <img src="/icons/mail.svg" alt={myGmail} />
          </a>
          <a href={npmUrl} target="_blank">
            <img src="/icons/npm.svg" alt={npmUrl} />
          </a>
          <a href={resumeUrl} target="_blank">
            <img src="/icons/user_cv.svg" alt={resumeUrl} />
          </a>
        </div>
      </div>
    </div>
  )
})