"use client"
import Image from "next/image";
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api";
import React, { useState, useEffect } from 'react';
import { getPost, getPosts } from '../../lib/getAPI';
import Link from 'next/link';

const map_size = {
  width: "100%",
  height: "500px"
};

export default function Home() {
    const map_position = {
      lat: 35.6096563,
      lng: 139.72860641
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
            <div className='missionTitle'>ゆうきくんの自然探検隊</div>
          </div>
        </header>
        <LoadScript googleMapsApiKey='AIzaSyCkEJymj5KlooR0rH25NiXi2Vj5gl8L29g'>
        <GoogleMap
            mapContainerStyle={map_size}
            center={map_position}
            zoom={17}>
            <MarkerF position={map_position} />
        </GoogleMap>
        </LoadScript>
        
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

          <div className='gazo'>
            <Image 
              src="/images/pokemon03.png" 
              width={220}  // 画像の幅
              height={220} // 画像の高さ
            />
          </div>
        </div>

        <div className='storyContainer'>
          <div className='story'>
            <div className='planTitle'>ストーリー</div>
            {posts.map(({ genstory }) => (
              <div className='missionStory'>{genstory}</div>
            ))}

          </div>
        </div>
        <Link href="/about">
          <div className='bottomBtn'>ミッション地点到着</div>
        </Link>
      </div>
    </div>
    );
    
  }