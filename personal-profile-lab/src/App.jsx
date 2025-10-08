import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์
    const myProfile = {
    name: "Nathaphab Saila",
    studentId: "67543210054-2", 
    major: "วศ.บ.วิศวกรรมซอฟต์แวร์",
    year: "2",
    age: "23",
    gpa: "2.50",
    email: "nathaphab_sa67@rmutl.ac.th",
    hobbies: [
        // เพิ่มงานอดิเรกของคุณ 5 อย่าง
        "play game",
        "sleep",
        "Watch cartoons",
        "listen to music",
        "read a book"
    ],
    skills: [
        // เพิ่มทักษะของคุณ 4-6 อย่าง
        "Fast typing",
        "Detailed work",
        "Solve immediate problems",
        "Be responsible"
    ],
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/Nathaphab" },
        { platform: "Instagram", url: "https://www.instagram.com/_nonei_/" },
        // เพิ่มเติมตามต้องการ
    ]
};
    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={sampleProfile} />
        </div>
    );
}

export default App;