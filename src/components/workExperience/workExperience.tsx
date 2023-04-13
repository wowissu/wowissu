import { Slot, component$ } from '@builder.io/qwik';
import "./workExperience.css";

interface WorkExpItemProps {
  years: string;
  title: string;
  company?: string;
  companyUrl?: string;
  tags?: string[];
}

const WorkExpItem = component$<WorkExpItemProps>((props) => {
  return (
    <li class="work-exp-item">
      <div class="space-y-2">
        <div class="flex items-center">  
          <div class="item-decorate-dot"></div>
          <h3 class="text-1.5xl font-medium tracking-[0.05em]">
            <span class="text-highlight-green mr-4">{props.years}</span>
            <span>{props.title}</span>
            <span>{props.company && (<span>, <a class="underline" href={props.companyUrl} target="_blank">{props.company}</a></span>)}</span>
          </h3>
        </div>
        <div class="work-exp-content space-y-4 pb-8">  
          {/* hash tags */}
          <Slot name="tags"></Slot>
          {props.tags && props.tags.length && (
            <div class="flex items-center text-sm text-hint font-normal tracking-[0.05em] py-2">
              {props.tags.map((s, i) => (<div key={i}>{`#${s}`}</div>))}
            </div>
          )}
          <Slot></Slot>
        </div>
      </div>
    </li>
  )
})


export default component$(() => {

  return (
    <div class="py-12 px-12 w-max-[1628px] mx-auto space-y-10">
      <div class="font-retroComputer text-6xl text-right text-hint mb-4">
        WORK EXPERIENCE
      </div>
      <div class="bg-[#151515] rounded-5xl px-10 py-10">
        <ul class="work-experience-list">
          <WorkExpItem years="2022-2023" title="Frontend Leader & Consultant" company="Homway 宏唯" tags={["Vue3", "Typesciprt", "Tailwindcss", "Cypress", "GCP", "Golang", "Scrum"]}>
            <ul class="dutie-list">
              <li>Led the team to running the Scrum working mode and increase the development efficiency.</li>
              <li>Define and Design infrastructure for project.</li>
              <li>Remote team management experience. Running a team cross countries.</li>
              <li>Analyzing the technical requirements for the business model.</li>
              <li>Include a QA step to develop automated tests for the stability and security of the system.</li>
            </ul>
          </WorkExpItem>
          <WorkExpItem years="2021-2022" title="Sr. Frontend Developer" company="微進科技" companyUrl="https://progressing.teamdoor.io/" tags={["React", "Vue", "NodeJs","Typesciprt","Tailwindcss", "Web3", "Defi", "AWS", "CI/CD"]}>
            <ul class="dutie-list">
              <li>We are developing Web3 DeFi and NFT lending-related services, and integrating various blockchain technologies such as Flow and Web3 into our platform.</li>
              <li>Remake the official website from JQuery to Vue3(TS) within one week.</li>
              <li>Building a CI/CD workflow for every project can eliminate potential errors that may occur during manual deployment.</li>
            </ul>
          </WorkExpItem>
          <WorkExpItem years="2019-2021" title="Sr. Frontend Developer / Frontend Leader" company="Yaudian 耀點科技" companyUrl="https://www.104.com.tw/company/1a2x6bkkiv" tags={["NodeJs","Typesciprt", "SSR", "Quasar", "Webpack"]}>
            <ul class="dutie-list">
              <li>Led team to build the structure for a big project.</li>
              <li>Hold a technology sharing meeting every two weeks.</li>
              <li>Discussed with Backend developer to defined the more useful and modern API.</li>
              <li>Built a multiple templates system for customers platform. they could switch the template just for one click.</li>
              <li>Led team to learned and built SSR site.</li>
              <li>Handled the i18n or image static data in the frontend for reducing the workload for the backend team</li>
              <li>Rewrote webpack config to cut compilation time in half.</li>
            </ul>
          </WorkExpItem>
          <WorkExpItem years="2017-2019" title="Freelancer">
            <div q:slot="tags">
              While on a Working Holiday in New Zealand, I also worked on some cases remotely, allowing me keeping to gain experience in my field and earn some extra income while exploring the country.
            </div>
            <ul class="dutie-list">
              <li>Giant Custom Bike (捷安特活動網站) </li>
              <li>Warehouse Management System (倉庫管理系統)</li>
            </ul>
          </WorkExpItem>
          <WorkExpItem years="2015-2017" title="Full Stack Integrated Developer" company="QArt digital 框體數位" companyUrl="https://www.qartech.com/zh-Hant/" tags={["PHP","AngularJS","Laravel","MySQL","PostgreSQL"]}>
            <ul class="dutie-list">
              <li>Wrote the API from exist database which in design for service multiple website.</li>
              <li>Work with UI designer to implement the whole website use AngularJS.</li>
              <li>Technical support for customer onsite.</li>
              <li>Built a component store for speed up development.</li>
            </ul>
          </WorkExpItem>
          <WorkExpItem years="2013-2015" title="Full stack Developer" company="CFD Ltd. 全富數位" companyUrl="http://cfd.com.tw/" tags={["PHP","JQuery","Memcached","MySQL"]}>
            <ul class="dutie-list">
              <li>Wrote the website focus on SEO by PHP & JQuery</li>
              <li>Wrote the web crawler to collect data from specific contents.</li>
              <li>Design the automated control system for social media.</li>
            </ul>
          </WorkExpItem>
        </ul>
      </div>
    </div>
  )
})