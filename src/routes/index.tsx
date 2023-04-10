import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { Jurassic } from '~/components/dinosaur/Jurassic';

export default component$(() => {
  return (
    <>
      <div class="min-h-screen relative">
        <Jurassic></Jurassic>
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


