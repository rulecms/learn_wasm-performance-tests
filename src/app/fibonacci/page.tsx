'use client';

import { useEffect, useState } from 'react';
import PerformanceTest from '@/components/PerformanceTest';
import { fibonacciJS } from '@/lib/js-implementations';
import init, { fibonacci } from '@/public/wasm/wasm_perf';

export default function FibonacciPage() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => setWasmLoaded(true));
  }, []);

  if (!wasmLoaded) {
    return <div>Loading WASM...</div>;
  }

  return (
    <PerformanceTest
      title="Fibonacci Sequence Calculator"
      description="Calculate the nth number in the Fibonacci sequence"
      jsFunction={fibonacciJS}
      wasmFunction={fibonacci}
      inputGenerator={(n) => n}
      defaultInputSize={30}
    />
  );
} 