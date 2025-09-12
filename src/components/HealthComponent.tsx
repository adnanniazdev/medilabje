import { Content } from '@/utils/constans'
import React, { FC } from 'react'
import CustomBulled from './CustomBulled';
type HealthProps = {
    HealthContent: Content[];
};
const HealthComponent: FC<HealthProps> = ({ HealthContent }) => {
    return (
        <div>
            {HealthContent?.map((item: Content, key: number) => {
                return <div key={key}>  <div id={item.key} className='mt-10 mb-10'>
                    <hr className="border-t-1 border-black w-80 mx-auto" />
                </div>
                    <section >
                        <div className="max-w-7xl mx-auto px-4 py-16">
                            <div className="flex flex-col md:flex-row items-start md:space-x-8">
                                {/* Left Column: Test Details */}
                                <div className="md:w-1/2 w-full text-secondary-light mb-6 md:mb-0 text-secondary">
                                    <div className='relative'>
                                        <h2 className="text-2xl md:text-2xl font-bold mb-4 text-secondary">
                                            {item?.title}
                                        </h2>
                                        <span className="absolute -top-10  md:-top-3 right-2 bg-black text-white md:text-md font-semibold p-3 rounded-4xl z-10">
                                            {item?.fees}
                                        </span>

                                    </div>
                                    <p className="mb-4 text-sm md:text-base">
                                        {item.detail}
                                    </p>
                                    {/* Points */}
                                    <h3 className="font-semibold mb-2">Points:</h3>
                                    <ul className="space-y-2 mb-16">
                                        {item.points.map((point, pid: number) => {
                                            return <li className="flex items-center" key={pid}>
                                                <CustomBulled />
                                                {point}
                                            </li>
                                        })}
                                    </ul>

                                    {/* Book Now Button */}
                                    <button className="bg-primary-dark text-white font-semibold p-4 px-10 rounded-xs hover:bg-primary-dark transition-colors duration-200 mb-6">
                                        Book Now
                                    </button>

                                    {/* How it works */}
                                    <h3 className="font-semibold mb-2">How it works:</h3>
                                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base mb-4">
                                        <li className="flex items-center">
                                            <CustomBulled />Book an appointment</li>
                                        <li className="flex items-center">
                                            <CustomBulled />Visit MediLab to have your blood sample taken</li>
                                        <li className="flex items-center">
                                            <CustomBulled />Receive a personalised report within 2 days</li>
                                    </ul>
                                </div>
                                {/* Right Column: Image */}
                                <div className="md:w-1/2 w-full  text-secondary-light">
                                    <div className="w-full  text-secondary-light">
                                        <div className='w-full flex justify-center'>
                                            <img
                                                src={item.image}
                                                alt="Man Test"
                                                className="w-80 max-w-md object-contain"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold mb-2 text-md">Why get tested?</h3>
                                            {item.Why_get_tested.map((i, testkey: number) => {
                                                return <p key={testkey} className="mb-4 text-sm md:text-base">
                                                    {i}
                                                </p>
                                            })}
                                            {item.results_mean && <><h3 className="font-semibold mb-2 text-md">What do the results mean?</h3>
                                                {item.results_mean.map((i, testkey: number) => {
                                                    return <p key={testkey} className="mb-4 text-sm md:text-base">
                                                        {i}
                                                    </p>
                                                })}</>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {item.packages ? <div className="flex flex-col md:flex-row items-start md:space-x-8">
                                <div className="md:w-1/2 w-full  text-secondary-light">   <h2 className='text-xl font-bold mb-4'>What tests are included?</h2>
                                    {item.packages.slice(0, item.slice).map((section) => (
                                        <div key={section?.title || section?.category} className='mb-3'>
                                            <h3 className='font-semibold'>{section?.title || section?.category}</h3>
                                            {section?.stages ? section.stages.map((stage: any, idx: number) => (
                                                <div key={idx} className="mb-4">
                                                    <h3 className="font-semibold italic">
                                                        {stage.stage}
                                                    </h3>
                                                    <ul className="text-sm md:text-base text-secondary-light">
                                                        {stage?.tests.map((test: any, testIdx: number) => (
                                                            <li key={testIdx}>
                                                                {test}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )) : <ul className='text-sm md:text-base'>
                                                {section.tests.map((test: any, idx: number) => (
                                                    <li key={idx}>{test}</li>
                                                ))}
                                            </ul>}

                                        </div>
                                    ))}</div>
                                <div className="md:w-1/2 w-full  text-secondary-light">
                                    {item.packages.slice(item.slice).map((section) => (
                                        <div key={section.title} className='mb-3'>
                                            <h3 className='font-semibold'>{section?.title || section?.category}</h3>
                                            {section?.stages ? section.stages.map((stage: any, idx: number) => (
                                                <div key={idx} className="mb-4">
                                                    <h3 className="font-semibold italic">
                                                        {stage.stage}
                                                    </h3>
                                                    <ul className="text-sm md:text-base text-secondary-light">
                                                        {stage?.tests.map((test: any, testIdx: number) => (
                                                            <li key={testIdx}>
                                                                {test}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )) : <ul className='text-sm md:text-base'>
                                                {section.tests.map((test: any, idx: number) => (
                                                    <li key={idx}>{test}</li>
                                                ))}
                                            </ul>}
                                        </div>
                                    ))}
                                </div>
                            </div> : ""}


                        </div>
                    </section></div>
            })}

        </div>
    )
}

export default HealthComponent