import { FC } from 'react';
import Image from 'next/image';
import AppointmentCalendar from './AppointmentCalendar';

const ConsultantsCustomersSection: FC = () => {
    return (
        <>
            <div id='OurConsultants' className='mt-10 mb-20'>
            </div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                    {/* Top Images */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">


                    </div>

                    {/* Three Column Layout */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Our Consultants */}
                        <div className="lg:col-span-1 space-y-6">
                            <div>
                                <div className="relative h-64 overflow-hidden mb-5">
                                    <Image
                                        src="/images/lab1.avif"
                                        alt="Laboratory technician working with test tubes"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-secondary-light mb-6">Our Consultants</h2>
                                <p className="text-secondary-light mb-6">
                                    At MediLab we offer a full health check service, including Consultant advice if required.
                                    This ensures our results are backed up by Consultant advice.
                                </p>

                                <div className="mb-8">
                                    <p className="text-secondary-light font-semibold mb-4">At MediLab we have:</p>
                                    <ul className="space-y-2 text-secondary-light">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Consultant Haematologist for any haematological advice required.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Clinical BioChemist for any clinical chemistry advice required.
                                        </li>
                                    </ul>
                                </div>

                                {/* Consultant Haematologist */}
                                <div className=" mb-6">

                                    <h3 className="text-2xl text-secondary-light font-bold  mb-4">Consultant Haematologist</h3>
                                    <div className=" md:flex-row gap-4">
                                        <div className="relative flex-shrink-0 w-[189px] h-[228px] mb-5">
                                            <Image
                                                src="/images/dr-russel.jpg"
                                                alt="Dr. Russell Keenan"
                                                fill
                                                className="object-cover "
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-secondary-light mb-2">Dr. Russell Keenan, MB ChB, PhD, MRCP, MRCPath.</h4>
                                            <p className="text-secondary-light text-sm">
                                                Dr. Keenan is an excellent addition to the MediLab team, with over twenty years experience
                                                across all aspects of haematology, both paediatric and adult, including malignant haematology,
                                                leukaemia, stem cell transplantation, haemophilia, thrombophilia, haemoglobinopathies,
                                                thalassaemia, transfusion medicine, and benign haematological disease.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            {/* Consultant Clinical Biochemist */}
                            <div className=" ">
                                <h3 className="text-2xl font-bold  mb-4">Consultant Clinical Biochemist</h3>
                                {/* <div className=" md:flex-row gap-4"> */}
                                <div className="relative flex-shrink-0 w-[250px] h-[250px] mb-5">
                                    <Image
                                        src="/images/dr-daren.jpg"
                                        alt="Dr. Darren Powell"
                                        fill
                                        className="object-cover "
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-secondary-light mb-2">Dr. Darren Powell FRCPath Clinical Biochemistry, PhD, MSc, BSc Hons.</h4>
                                    <p className="text-secondary-light text-sm">
                                        Dr. Powell brings many years of experience across all aspects of clinical biochemistry,
                                        both paediatric and adult, ensuring comprehensive and accurate analysis of biochemical parameters.
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>

                        {/* Middle Column - Our Customers and Core Values */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Our Customers */}
                            <div id="OurCustomers">
                                <div className="relative h-64 overflow-hidden mb-5">
                                    <Image
                                        src="/images/patients-reception.avif"
                                        alt="Medical professional at desk with laptop"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-secondary-light mb-6">Our Customers</h2>
                                <p className="text-secondary-light mb-6">
                                    Our customers cover the following areas:
                                </p>

                                <div className="grid md:grid-cols-1 gap-4 mb-6">
                                    <ul className="space-y-2 text-secondary-light text-sm">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Healthcare Providers
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Clinics
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            General practitioners (GPs)
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Medical specialists
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Occupational health departments
                                        </li>
                                    </ul>

                                    <ul className="space-y-2 text-secondary-light text-sm">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Pathology laboratories
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Private sector hospitals
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Insurance companies
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Clinical research organisations/Pharmaceutical companies
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Private self testing clients
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative h-48 overflow-hidden mb-6">
                                    <Image
                                        src="/images/lab4.jpg"
                                        alt="Laboratory professional working with microscope"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Core Values */}
                            <div id="CoreValues">
                                <h2 className="text-3xl font-bold text-secondary-light mb-6">Core Values</h2>
                                <div className="space-y-4 text-secondary-light">
                                    <p>
                                        At MediLab, we are committed to providing confidential, efficient health checks that empower
                                        individuals to take control of their health. Our comprehensive testing services are designed
                                        to deliver accurate results with professional support.
                                    </p>
                                    <p>
                                        Our core values center around professionalism, mutual support, and empowering people to make
                                        informed decisions about their health. We believe in providing accessible, reliable medical
                                        testing services that meet the highest standards of quality and care.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Widget */}
                        <div className="lg:col-span-1">
                            <div className='w-full flex justify-center'>
                                <div className="bg-white rounded-lg shadow-lg max-w-[400px]">
                                    <div className="bg-primary p-4 w-full rounded-t-md">
                                        <h3 className="text-2xl font-bold text-center md:text-left text-white">Book your Appointment today for free</h3>
                                    </div>
                                    <div className="flex justify-center">
                                        <AppointmentCalendar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Booking Widget */}
                    <div className="lg:col-span-1">
                        {/* Booking Card */}
                        <div className='w-full flex justify-center'>
                            <div className="bg-white rounded-lg shadow-lg max-w-[400px]">
                                <div className="bg-primary p-4 w-full rounded-t-md">
                                    <h3 className="text-2xl font-bold text-center md:text-left text-white">Book your Appointment today for free</h3>
                                </div>
                                <div className="flex justify-center">
                                    <AppointmentCalendar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section></>
    );
};

export default ConsultantsCustomersSection;
