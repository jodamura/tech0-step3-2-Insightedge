"use client"
import Link from 'next/link';
import React from 'react';
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api"; 
const map_size = {
  width: "100%",
  height: "500px"
};
export default function Kakunin() {
    const map_position = {
      lat: 35.6096563,
      lng: 139.72860641
    };
    return (
      <div className='body'>
      <div className='mapMain'>
        <header class='header'>
        <div className='missionPlan'>
            <div className='missionTitle'>ゆうきくんの自然探検隊</div>
          </div>
        </header>
        <LoadScript googleMapsApiKey='キー'>
        <GoogleMap
            mapContainerStyle={map_size}
            center={map_position}
            zoom={17}>
            <MarkerF position={map_position} />
        </GoogleMap>
        </LoadScript>
        
        <div class='plansContainer'>
          <div className='plan'>
            <div className='planTitle'>ミッション1</div>
            <div className='planPrice'>不思議な葉っぱを探せ！</div>
            <ul className='planFeatures'>
              <li>場所：しながわ中央公園</li>
              <li>難易度：☆☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>

          <div className='plan'>
          <div className='planTitle'>ミッション2</div>
            <div className='planPrice'>色とりどりの自然を集めよう！</div>
            <ul className='planFeatures'>
              <li>場所：しながわ中央公園</li>
              <li>難易度：☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>

          <div className='plan'>
          <div className='planTitle'>ミッション3</div>
            <div className='planPrice'>自然のアートを描こう！</div>
            <ul className='planFeatures'>
              <li>場所：しながわ中央公園</li>
              <li>難易度：☆☆☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>
        
        </div>
        <Link href="/seisei">
          <div className='bottomBtn'>冒険に出発！</div>
        </Link>
        
      </div>
      </div>
    );
    
  }
    
