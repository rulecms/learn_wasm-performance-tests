'use client';

import { useEffect, useState } from 'react';
import PerformanceTest from '@/components/PerformanceTest';
import { isPrimeJS } from '@/lib/js-implementations';
import init, { is_prime } from '@/public/wasm/pkg/wasm_perf';

export default function PrimePage() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => setWasmLoaded(true));
  }, []);

  if (!wasmLoaded) {
    return <div>Loading WASM...</div>;
  }

  return (
    <PerformanceTest
      title="Prime Number Checker"
      description="Check if a number is prime using trial division algorithm"
      jsFunction={isPrimeJS}
      wasmFunction={is_prime}
      inputGenerator={(n) => n * 100000 + 1} // Generate large numbers to test
      defaultInputSize={100}
    />
  );
} 