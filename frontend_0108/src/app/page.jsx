"use client"
import Image from "next/image";
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api";
import React, { useState, useEffect } from 'react';
import { getPost, getPosts } from '../lib/getAPI';

const map_size = {
  width: "100%",
  height: "500px"
};

export default function Home() {
    const map_position = {
      lat: 35.6362,
      lng: 140.0910
    };

    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
      // コンポーネントがマウントされた時に投稿を取得
      getPosts().then(data => {
        setPosts(data);
      });
    }, []);

    return (
    <div className='body'>
      <div className='mapMain'>
        <header className='header'>
          <div className='missionPlan'>
            <div className='missionTitle'>ミッション１</div>
          </div>
        </header>
        <LoadScript googleMapsApiKey='キー'>
        <GoogleMap
            mapContainerStyle={map_size}
            center={map_position}
            zoom={15}>
            <MarkerF position={map_position} />
        </GoogleMap>
        </LoadScript>
        
        <div className='plansContainer'>
          <div className='plan'>
            <div className='planPrice'>どんぐりを拾え！</div>
            <ul className='planFeatures'>
              <li>場所：〜〜公園</li>
              <li>難易度：☆☆</li>
              <li>想定所要時間：１時間</li>
            </ul>
          </div>

          <div className='plan'>
            <Image 
              src="/images/pokemon03.png" 
              width={200}  // 画像の幅
              height={200} // 画像の高さ
            />
          </div>
        </div>

        <div className='storyContainer'>
          <div className='story'>
            <div className='planTitle'>ストーリー</div>
            <div>
              <pre>{JSON.stringify(posts, null, 2)}</pre>
            </div>
          </div>
        </div>
        <a href="#" className='bottomBtn'>到着</a>
        
      </div>
    </div>
    );
    
  }