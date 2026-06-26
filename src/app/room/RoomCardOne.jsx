import Link from 'next/link';
import React from 'react'

function RoomCardOne(props) {
    const {
        Slug,
        Img,
        Title,
        Price
    } = props;
    return (
        <div className="room__slide__box radius-6" style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', height: '380px' }}>
            <img
                height={380}
                width={420}
                src={Img || "/assets/images/pages/room/1.webp"}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            {/* Gradient overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                borderRadius: '6px',
            }} />
            {/* Text content */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#fff',
            }}>
                <Link href={`/room/${Slug || "details"}`} className="room__title">
                    <h5 style={{ color: '#fff', marginBottom: '8px' }}>{Title || "The Ritz-Carlton"}</h5>
                </Link>
                <div className="room__content__meta">
                    <span style={{ color: 'rgba(255,255,255,0.85)' }}>
                        <i className="flaticon-construction" /> 35 sqm
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.85)' }}>
                        <i className="flaticon-user" /> 2 Person
                    </span>
                </div>
                <span className="h4 rent mb-0 mt-15 d-block" style={{ color: '#fff' }}>{Price || '120$'}</span>
            </div>
        </div>
    )
}

export default RoomCardOne