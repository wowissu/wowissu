import { Slot, component$ } from '@builder.io/qwik';
import { Ground } from './ground';

export const Jurassic = component$(() => {
  return (
    <div class="relative">
      <Slot></Slot>
      <Ground></Ground>
    </div>
  )
})