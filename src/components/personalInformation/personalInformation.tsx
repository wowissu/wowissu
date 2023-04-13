import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import "./personalInformation.css"
import { githubUrl, npmUrl, resumeUrl } from '~/const/url.const'

export default component$(() => {
  return (
    <div class="py-12 px-12 w-max-[1920px] mx-auto space-y-10 relative">
      <div class="absolute right-[10vw] top-[30vh]">
        <WaterRipple></WaterRipple>
      </div>
      <div class="font-retroComputer text-6xl text-right text-hint py-12">
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
});


const WaterRipple = component$(() => {
  const el = useSignal<Element>();

  // follow mouse.
  useVisibleTask$(({ cleanup }) => {
    if (!el.value) return;

    let delayReset: number;

    const mousemoveHandle = (e: MouseEvent) => {
      if (!el.value) return;

      window.clearTimeout(delayReset);

      if (e.movementX > 0) {
        el.value.classList.add("swing-to-right");
        el.value.classList.remove("swing-to-left");
      } else if (e.movementX < 0) {
        el.value.classList.add("swing-to-left");
        el.value.classList.remove("swing-to-right");
      } 

      if (e.movementY > 0) {
        el.value.classList.add("swing-to-bottom");
        el.value.classList.remove("swing-to-top");
      } else if (e.movementY < 0) {
        el.value.classList.add("swing-to-top");
        el.value.classList.remove("swing-to-bottom");
      }

      delayReset = window.setTimeout(() => {
        el.value?.classList.remove("swing-to-left", "swing-to-right", "swing-to-top", "swing-to-bottom");
      }, 800);
    };

    window.addEventListener('mousemove', mousemoveHandle);

    cleanup(() => {
      window.removeEventListener('mousemove', mousemoveHandle);
    });
  });

  // on click
  useVisibleTask$(({ cleanup }) => {
    function onCenterClick(e: Event) {
      const target = e.target as Element;

      if (!target.className.includes("water-ripple-center")) return;

      console.log('center click')

      el.value?.classList.add("water-ripple-popple");      

      setTimeout(() => {
        el.value?.classList.remove("water-ripple-popple");      
      }, 300)
    }

    el.value?.addEventListener('click', onCenterClick);

    cleanup(() => {
      el.value?.removeEventListener("click", onCenterClick);
    })
  })

  return (
    <div ref={el} class="water-ripple">
      <div class="water-ripple-element water-ripple-ring ring-5"></div>
      <div class="water-ripple-element water-ripple-ring ring-4"></div>
      <div class="water-ripple-element water-ripple-ring ring-3"></div>
      <div class="water-ripple-element water-ripple-ring ring-2"></div>
      <div class="water-ripple-element water-ripple-ring ring-1"></div>
      <div class="water-ripple-element water-ripple-center"></div>
    </div>
  )
});