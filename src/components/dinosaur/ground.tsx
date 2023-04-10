import { component$, useComputed$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';

interface RectPosition {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const Ground = component$(() => {
  const svgWidth = useSignal(0);
  const svgHeight = useSignal(0);
  const v = useComputed$(() => `0 0 ${svgWidth.value} ${svgHeight.value}`);
  const rects = useStore<RectPosition[]>([]);

  useVisibleTask$(() => {
    svgHeight.value = window.innerHeight / 2;
    svgWidth.value = window.innerWidth;
  });

  useVisibleTask$(() => {
    function refill(i: number, startX: number = svgWidth.value) {
      const w = randomInt(10) % 4 === 0 ? 90 : 50;
      const h = 20;
      const x = startX;
      const y = svgHeight.value / 5 * randomInt(5, 1);
      
      rects[i] = { w, h, x, y };
    }

    for (let i = 0; i <= 9; i++) {
      refill(i, svgWidth.value / 32 * randomInt(32));
    }

    // let count = 0;

    window.setInterval(() => {
      // count++;

      rects.forEach((p, i) => {
        const x = p.x - 5;

        if ((x + p.w) < 0) {
          refill(i, svgWidth.value + randomInt(50));
        } else {
          rects[i] = {...p, x};
        }
      })
    }, 100);
  })

  return (
    <svg width={svgWidth} height={svgHeight} viewBox={v} fill="none" class="bg-[#151515] w-full" xmlns="http://www.w3.org/2000/svg">
      {rects.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} class="fill-[#242424] strostroke-0">
          {`${i}`}
        </rect>    
      ))}
    </svg>
  )
})

function randomInt(max: number): number;
function randomInt(max: number, min: number): number;
function randomInt(max: number, min: number = 0) { // min and max included 
  
  return Math.floor(Math.random() * (max - min + 1) + min)
}