import type { MetaFunction } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-sans mt-4 mb-2">Hello</h1>
      <div className="flex flex-row gap-4">
        <ComponentWithFetcher label="First" />
        <ComponentWithFetcher label="Second" />
      </div>
    </div>
  );
}

function ComponentWithFetcher({ label }: { label: string }) {
  const fetcher = useFetcher();

  return (
    <div className="w-[200px] h-[200px] flex flex-col gap-4 items-center justify-center border border-silver border-solid rounded p-2">
      <p>{label}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded shadow active:translate-y-0.5"
        onClick={() => {
          fetcher.load('/api');
        }}
      >
        Load
      </button>
    </div>
  );
}
