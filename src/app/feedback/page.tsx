import FeedbackForm from '@/components/FeedbackForm'
import React from 'react'
import { generateMetadata } from '@/utils/seo'

export const metadata = generateMetadata({
    title: 'Feedback - MediLab Jersey',
    description: 'Share your feedback with MediLab Jersey. We value your input to improve our medical laboratory services.',
    keywords: 'feedback, contact, MediLab Jersey, reviews, suggestions, laboratory feedback',
    path: '/feedback'
})

const Feedback = () => {
    return (
        <div className="min-h-screen mt-3 mb-3">  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeedbackForm />
        </div></div>
    )
}

export default Feedback