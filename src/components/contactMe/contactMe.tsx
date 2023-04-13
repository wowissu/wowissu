import { component$ } from '@builder.io/qwik';
import "./contactMe.css"
import { githubUrl, myGmail, npmUrl, resumeUrl } from '~/const/url.const'

export default component$(() => {
  return (
    <div class="contact-me-bg flex justify-center items-center">
      <div class="flex flex-col items-center py-20 space-y-8">
        <div class="flex space-x-10">
          <div class="w-16">
            <img src="/img/emoji_02.svg" alt="" />
          </div>
          <div class="w-16">
            <img src="/img/emoji_03.svg" alt="" />
          </div>
          <div class="w-16">
            <img src="/img/emoji_01.svg" alt="" />
          </div>
        </div>
        <div class="contact-me">
          CONTACT ME
        </div>
        <div class="flex gap-x-6">
          <a href={githubUrl} target="_blank">
            <div class="github-logo w-8 h-8"></div>
          </a>
          <a href={`mailto:${myGmail}`}>
            <div class="mail-logo w-8 h-8"></div>
          </a>
          <a href={npmUrl} target="_blank">
            <div class="npm-logo w-8 h-8"></div>
          </a>
          <a href={resumeUrl} target="_blank">
            <div class="cv-logo w-8 h-8"></div>
          </a>
        </div>
        <div class="pt-20">
          <a class="btn" href={`mailto:${myGmail}`} target="_blank">
            Let's go
          </a>
        </div>
      </div>
    </div>
  )
})