"use client"
import Image from "next/image";
import React from 'react';
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api";
//import styles from "../styles/Home.module.css";
const map_size = {
  width: "100%",
  height: "500px"
};
export default function About() {

    return (
      <div className='body'>
      <div className='mapMain'>
        <header className='header'>
          <div className='missionPlan'>
            <div className='missionTitle'>ゆうきくんの自然探検隊</div>
          </div>
        </header>

        
        <div className='plansContainer'>
          <div className='plan'>
          <div className='planTitle'>ミッション1</div>
            <div className='planPrice'>不思議な葉っぱを探せ！</div>
            <ul className='planFeatures'>
              <li>場所：しながわ中央公園</li>
              <li>難易度：☆☆☆</li>
              <li>所要時間：20分</li>
            </ul>
          </div>

          <div className='plan'>
            <Image 
              src="/images/pika.png" 
              width={240}  // 画像の幅
              height={240} // 画像の高さ
            />
          </div>
        </div>

        <div className='storyContainer'>
          <div className='story'>
            <div className='planTitle'>「葉っぱ発見隊長ゆうき！」</div>
            <div className='planTitle'>公園の中でいろんな形や色の葉っぱを探そう！</div>
            <ul className='missionFeatures'>
              <li>①公園に行って、大きな木や低い草の近くを探検しよう。</li>
              <li>②いろいろな形や色の葉っぱを見つけたら、その特徴を覚えよう。</li>
            </ul>
          </div>

        
        </div>
        <div className='buttonContainer'>
          <a href="#" className='bottomBtn'>次のミッションへ</a>
          <a href="#" className='bottomBtn'>冒険終了</a>
        </div>
      </div>
      </div>
    );
    
  }
    
