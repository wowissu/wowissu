import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="min-h-screen">
        index here
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
