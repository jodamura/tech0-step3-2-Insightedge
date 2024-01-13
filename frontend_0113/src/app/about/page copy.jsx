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
    const map_position = {
      lat: 35.6362,
      lng: 140.0910
    };
    return (
      <div className='body'>
      <div className='mapMain'>
        <header className='header'>
          <div className='missionPlan'>
            <div className='missionTitle'>ミッション1</div>
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
          <div className='planTitle'>ミッション1</div>
            <div className='planPrice'>新幹線を探せ！</div>
            <ul className='planFeatures'>
              <li>場所：品川駅周辺</li>
              <li>難易度：☆☆</li>
              <li>所要時間：10分</li>
            </ul>
          </div>

          <div className='plan'>
            <Image 
              src="/images/pika.png" 
              width={200}  // 画像の幅
              height={200} // 画像の高さ
            />
          </div>
        </div>

        <div className='storyContainer'>
          <div className='story'>
            <div className='planTitle'>ミッション詳細</div>
            <ul className='missionFeatures'>
              <li>品川駅から新幹線が見える場所を探そう。新幹線がどこから来て、どこへ行くのか観察しよう。</li>
            </ul>
          </div>

        
        </div>
        <a href="#" className='bottomBtn'>完了！</a>
        
      </div>
      </div>
    );
    
  }
    
