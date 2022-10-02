import React from 'react'

interface CardProps {
    data: any
}

const Card: React.FC<CardProps> = ({ data }) => {
    const handleRedirectRepo = () => data?.html_url && 
        window.open(data?.html_url, '_blank', 'noopener,noreferrer');

    return (
        <div className='Card__wrapper' onClick={handleRedirectRepo}>
            <div className='Card__title'>{data?.name}</div>
            <div className='Card__descWrapper'>
                <div>
                    <span>Language:</span> {data?.language || '-'}
                </div>
                <div>
                    <span>Forks:</span> {data?.forks || '-'}
                </div>
                <div>
                    <span>Visibility:</span> {data?.visibility || '-'}
                </div>
                <div>
                    <span>Open Issue:</span> {data?.open_issues_count || '-'}
                </div>
            </div>
        </div>
    )
}

export default Card