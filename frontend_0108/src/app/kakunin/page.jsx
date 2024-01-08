"use client"
import Image from "next/image";
import React from 'react';
import { GoogleMap, LoadScript,MarkerF } from "@react-google-maps/api"; 
//import styles from "../styles/Kakunin.module.css";
const map_size = {
  width: "100%",
  height: "500px"
};
export default function Kakunin() {
    const map_position = {
      lat: 35.6362,
      lng: 140.0910
    };
    return (
      <div className='body'>
      <div className='mapMain'>
        <header class='header'>
        <div className='missionPlan'>
            <div className='missionTitle'>ミッション確認</div>
          </div>
        </header>
        <LoadScript googleMapsApiKey='AIzaSyCkEJymj5KlooR0rH25NiXi2Vj5gl8L29g'>
        <GoogleMap
            mapContainerStyle={map_size}
            center={map_position}
            zoom={15}>
            <MarkerF position={map_position} />
        </GoogleMap>
        </LoadScript>
        
        <div class='plansContainer'>
          <div className='plan'>
            <div className='planTitle'>ミッション1</div>
            <div className='planPrice'>どんぐりを拾え！</div>
            <ul className='planFeatures'>
              <li>場所：〜〜公園</li>
              <li>難易度：☆☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>

          <div className='plan'>
          <div className='planTitle'>ミッション2</div>
            <div className='planPrice'>娘の最高の笑顔をGetせよ！</div>
            <ul className='planFeatures'>
              <li>場所：〜〜公園</li>
              <li>難易度：☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>

          <div className='plan'>
          <div className='planTitle'>ミッション3</div>
            <div className='planPrice'>ピカチュウを探せ！</div>
            <ul className='planFeatures'>
              <li>場所：〜〜イオン</li>
              <li>難易度：☆☆☆☆</li>
            </ul>
            <a href="#" className='signupBtn'>ミッションを変更</a>
          </div>
        
        </div>
        <a href="#" className='bottomBtn'>冒険に出発！</a>
        
      </div>
      </div>
    );
    
  }
    
