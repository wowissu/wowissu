import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import ArrowDown from '~/components/arrowDown/arrowDown';
import ContactMe from '~/components/contactMe/contactMe';
import { Jurassic } from '~/components/dinosaur/Jurassic';
import { Dinosaur } from '~/components/dinosaur/dinosaur';
import HiIamSu from '~/components/hiIamSu/hiIamSu';
import PersonalInformation from '~/components/personalInformation/personalInformation';
import WorkExperience from '~/components/workExperience/workExperience';

export default component$(() => {
  return (
    <>
      <div class="min-h-screen relative">
        {/* first section */}
        <div class="h-screen relative">  
          <div class="absolute bottom-0 h-1/2 w-full z-0">
            <Jurassic></Jurassic>
          </div>
          {/* title */}
          <div class="absolute h-full w-full flex justify-center items-center">
            <div class="relative">
              <div class="dinosaur-position">
                <Dinosaur></Dinosaur>
              </div>
              <div class="relative z-[1] font-retroComputer text-center space-y-6">
                <div class="flex justify-center">
                  <HiIamSu></HiIamSu>
                </div>

                <h1 class="text-d-xxxl">PERSONAL<br/>PORTFOLIO</h1>
                
                <div class="flex justify-evenly items-center text-d-xl">
                  <div>
                    FRONTEND
                  </div>
                  <div>
                    |
                  </div>
                  <div>
                    BACKEND
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* more */}
          <div class="absolute bottom-0 w-full left-0 flex justify-center py-6">  
            <div class="cursor-pointer">
              <ArrowDown></ArrowDown>
            </div>
          </div>
        </div>
        {/* Personal information */}
        <div>
          <PersonalInformation></PersonalInformation>
        </div>
        {/* work experience */}
        <div>
          <WorkExperience></WorkExperience>
        </div>
        {/* Contact Me */}
        <div>
          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Hi! I\'m Su.',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};


