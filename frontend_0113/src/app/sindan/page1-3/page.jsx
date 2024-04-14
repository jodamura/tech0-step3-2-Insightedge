"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="container">
    <div className="flex flex-col items-center justify-center bg-[white] p-4 text-black">
      <div className="w-full max-w-xs">
        <h3 className="mb-6 text-xl text-center">好みの設定をお選びください</h3>
      </div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">時代設定</h1>
        <h2 className="text-2xl">3 / 4</h2>
      </div>
      <div className="w-full max-w-xs space-y-12">

      <Link href="/sindan/page1-4">
        <div className="space-y-8">
          <button className="w-full rounded-full border-2 border-black py-2 px-4 text-center text-lg">過去</button>
          <button className="w-full rounded-full border-2 border-black py-2 px-4 text-center text-lg">現在</button>
          <button className="w-full rounded-full border-2 border-black py-2 px-4 text-center text-lg">未来</button>
        </div>
      </Link>
        <p className="mt-6 text-left text-1xl">頂いたご回答は、パーソナライズしたミッション・ストーリーを提供するために使用されます。</p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-black" />
    </div>
    </div>
  )
}