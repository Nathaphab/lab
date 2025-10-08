import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    const handleContactClick = () => {
        alert(`สวัสดี! ติดต่อ ${profile.name} ที่อีเมล ${profile.email}`);
    };

    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    // =========================
    // Challenge state & functions
    // =========================
    const [challengeScore, setChallengeScore] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(false);

    const completeChallenge = () => {
        setChallengeScore(challengeScore + 10);
        setChallengeCompleted(true);
    };

    const resetChallenge = () => {
        setChallengeScore(0);
        setChallengeCompleted(false);
    };

    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-avatar">{getInitials(profile.name)}</div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li key={index} className="hobby-item">{hobby}</li>
                    ))}
                </ul>
            </div>

            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="skill-tag"
                            onClick={() => handleSkillClick(skill)}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* =========================
                Challenge Section
                ========================= */}
            <div className="profile-section challenge">
                <h3>🏆 Challenge</h3>
                <p>คะแนนปัจจุบัน: {challengeScore}</p>
                <p>สถานะ: {challengeCompleted ? "เสร็จแล้ว ✅" : "ยังไม่เสร็จ ⏳"}</p>
                <button onClick={completeChallenge}>ทำ Challenge สำเร็จ +10 คะแนน</button>
                <button onClick={resetChallenge}>รีเซ็ต Challenge</button>
            </div>

            <button className="contact-button" onClick={handleContactClick}>
                📧 ติดต่อ {profile.name}
            </button>
        </div>
    );
}

export default ProfileCard;