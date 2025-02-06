'use client';

import { useState } from 'react';
import styles from './PerformanceTest.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceTestProps<T> {
title: string;
description: string;
jsFunction: (input: T) => unknown;
wasmFunction: (input: T) => unknown;
inputGenerator: (size: number) => T;
defaultInputSize?: number;
}

export default function PerformanceTest<T>({
title,
description,
jsFunction,
wasmFunction,
inputGenerator,
defaultInputSize = 10
}: PerformanceTestProps<T>) {
  const [inputSize, setInputSize] = useState(defaultInputSize);
  const [jsTime, setJsTime] = useState<number | null>(null);
  const [wasmTime, setWasmTime] = useState<number | null>(null);

  const runTest = () => {
    const input = inputGenerator(inputSize);
    
    // Test JS implementation
    const jsStart = performance.now();
    jsFunction(input);
    const jsEnd = performance.now();
    setJsTime(jsEnd - jsStart);

    // Test WASM implementation
    const wasmStart = performance.now();
    wasmFunction(input);
    const wasmEnd = performance.now();
    setWasmTime(wasmEnd - wasmStart);
  };

  const chartData = {
    labels: ['JavaScript', 'WebAssembly'],
    datasets: [
      {
        label: 'Execution Time (ms)',
        data: [jsTime, wasmTime],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
      
      <div className={styles.controls}>
        <label>
          Input Size:
          <input
            type="number"
            value={inputSize}
            onChange={(e) => setInputSize(Number(e.target.value))}
            min="1"
          />
        </label>
        <button onClick={runTest}>Run Test</button>
      </div>

      {(jsTime !== null && wasmTime !== null) && (
        <div className={styles.results}>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Performance Comparison',
                },
              },
            }}
          />
          <div className={styles.metrics}>
            <p>JavaScript Time: {jsTime.toFixed(2)}ms</p>
            <p>WebAssembly Time: {wasmTime.toFixed(2)}ms</p>
            <p>Performance Difference: {((jsTime - wasmTime) / jsTime * 100).toFixed(2)}%</p>
          </div>
        </div>
      )}
    </div>
  );
} 