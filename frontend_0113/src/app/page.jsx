"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function MissionForm() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [missionExecutor, setMissionExecutor] = useState('');
  const [missionSupervisor, setMissionSupervisor] = useState('');
  const [missionDuration, setMissionDuration] = useState('');
  const [location, setLocation] = useState('');
  const [target, setTarget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ミッションデータを処理する
    console.log({ username, age, missionExecutor, missionSupervisor, missionDuration, location, target });
  };

  return (
    <div className="container">
      <h1 className='title'>ミッション条件を選択</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>実施者の名前</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>実施者の年齢</label>
          <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>ミッション実施者</label>
          <input type="text" className="form-control" value={missionExecutor} onChange={(e) => setMissionExecutor(e.target.value)} />
        </div>
        <div className="form-group">
          <label>ミッション監督者</label>
          <input type="email" className="form-control" value={missionSupervisor} onChange={(e) => setMissionSupervisor(e.target.value)} />
        </div>
        <div className="form-group">
          <label>ミッション所要時間</label>
          <input type="text" className="form-control" value={missionDuration} onChange={(e) => setMissionDuration(e.target.value)} />
        </div>
        <div className="form-group">
          <label>場所</label>
          <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>対象</label>
          <input type="text" className="form-control" value={target} onChange={(e) => setTarget(e.target.value)} />
        </div>

        <Link href="/kakunin">
          <div className='bottomBtn'>ミッション作成</div>
        </Link>
      </form>
    </div>
  );
}

export default MissionForm;