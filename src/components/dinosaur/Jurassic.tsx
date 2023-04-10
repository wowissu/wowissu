import { component$ } from '@builder.io/qwik';
import { Ground } from './ground';
import { Dinosaur } from './dinosaur';


export const Jurassic = component$(() => {
  return (
    <div class="absolute bottom-0 h-[50vh]">
      <div class="absolute bottom-full left-1/2">
        <Dinosaur></Dinosaur>
      </div>
      <Ground></Ground>
    </div>
  )
})