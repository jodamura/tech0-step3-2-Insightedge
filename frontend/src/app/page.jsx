"use client"
import Image from "next/image";
import React from 'react';
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api";
const map_size = {
  width: "100%",
  height: "500px"
};
export default function Subber_c() {
    const map_position = {
      lat: 35.6362,
      lng: 140.0910
    };
    return (
      <div className='map-main'>
        <header class="header">
          <Image 
            src="https://via.placeholder.com/100.png?text=オシミツ+" 
            alt="オシミツ"
            width={50}  // 画像の幅
            height={50} // 画像の高さ
          />
          <div>ログアウト</div>
        </header>
        <LoadScript googleMapsApiKey='AIzaSyCkEJymj5KlooR0rH25NiXi2Vj5gl8L29g'>
        <GoogleMap
            mapContainerStyle={map_size}
            center={map_position}
            zoom={13}>
            <MarkerF position={map_position} />
        </GoogleMap>
        </LoadScript>
        
        <div class="plans-container">
          <div className="plan">
            <div className="plan-title">ミッション①</div>
            <div className="plan-price">どんぐりを拾え！</div>
            <ul className="plan-features">
              <li>場所：〜〜公園</li>
              <li>難易度：☆☆☆</li>
              <li>ストーリー：〜〜〜</li>
              <li>〜〜〜</li>
              <li>〜〜〜</li>
            </ul>
            <a href="#" class="signup-btn">ミッションを変更</a>
          </div>

          <div className="plan">
            <div className="plan-title">ミッション②</div>
            <div className="plan-price">娘の最高の笑顔をGetせよ！</div>
            <ul className="plan-features">
              <li>場所：〜〜公園</li>
              <li>難易度：☆☆</li>
              <li>ストーリー：〜〜〜</li>
              <li>〜〜〜</li>
              <li>〜〜〜</li>
            </ul>
            <a href="#" class="signup-btn">ミッションを変更</a>
          </div>

          <div className="plan">
            <div className="plan-title">ミッション③</div>
            <div className="plan-price">ピカチュウを探せ！</div>
            <ul className="plan-features">
              <li>場所：〜〜イオン</li>
              <li>難易度：☆☆☆☆</li>
              <li>ストーリー：〜〜〜</li>
              <li>〜〜〜</li>
              <li>〜〜〜</li>
            </ul>
            <a href="#" class="signup-btn">ミッションを変更</a>
          </div>
        
        </div>
        <a href="#" class="bottom-btn">冒険に出発！</a>
      </div>
    
    );
    
  }
    
