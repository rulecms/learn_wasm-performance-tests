'use client';

import { useEffect, useState } from 'react';
import PerformanceTest from '@/components/PerformanceTest';
import { sortArrayJS } from '@/lib/js-implementations';
import init, { sort_array } from '../../../wasm/pkg/wasm_perf';

function generateRandomArray(size: number): Int32Array {
  const arr = new Int32Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 1000000);
  }
  return arr;
}

export default function SortPage() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => setWasmLoaded(true));
  }, []);

  if (!wasmLoaded) {
    return <div>Loading WASM...</div>;
  }

  return (
    <PerformanceTest
      title="Array Sorting"
      description="Sort an array of random integers using native sort implementations"
      jsFunction={(arr: Int32Array) => {
        const clonedArr = new Int32Array(arr);
        sortArrayJS(Array.from(clonedArr));
        return clonedArr;
      }}
      wasmFunction={(arr: Int32Array) => {
        const clonedArr = new Int32Array(arr);
        sort_array(clonedArr);
        return clonedArr;
      }}
      inputGenerator={generateRandomArray}
      defaultInputSize={10000}
    />
  );
} 