import CustomBulled from '@/components/CustomBulled';
import { male_health_tests, mediManPackage } from '@/utils/constans';
import { FC } from 'react';

const MaleHealthPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/images/test-bg-img.jpg')] object-contain text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Male Health</h1>
        </div>
      </section>

      <div className="px-4 py-12 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {male_health_tests.map((test) => (
            <div
              key={test.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={test.image}
                alt={test.title}
                className="w-full h-48 object-contain"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-primary-light mb-2">{test.title}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-1">{test.description}</p>
                <p className="text-4xl font-semibold text-secondary mb-4">{test.fees}</p>

                <a
                  href={test.href}
                  className="mt-auto inline-block text-white bg-primary-dark transition-colors duration-200 text-center py-3 px-3"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        <div id="PSA" className='mt-20'>
          <hr className="border-t-1 border-black w-80 mx-auto" />
        </div>
      </div>
      <section >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-start md:space-x-8">

            {/* Left Column: Test Details */}
            <div className="md:w-1/2 w-full text-secondary-light mb-6 md:mb-0 text-secondary-light">
              <div className='relative'>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-light">
                  PROSTATE-SPECIFIC ANTIGEN (PSA)
                </h2>
                <span className="absolute -top-10  md:-top-3 right-2 bg-black text-white md:text-md font-semibold p-3 rounded-4xl z-10">
                  £40
                </span>

              </div>

              <p className="mb-4 text-sm md:text-base">
                Prostate-Specific Antigen (PSA) is specific to the prostate and can be detected in the blood. This can show any prostate abnormality. Getting your prostate checked should be an essential part of your routine health.
              </p>
              {/* Points */}
              <h3 className="font-semibold mb-2">Points:</h3>
              <ul className="space-y-2 mb-10">
                <li className="flex items-center">
                  <CustomBulled />
                  Results in 2 working days from sample taken
                </li>
                <li className="flex items-center">
                  <CustomBulled />
                  Prostate Specific Antigen (PSA)
                </li>
              </ul>

              {/* Book Now Button */}
              <button className="bg-primary-dark text-white font-semibold p-4 px-10 rounded-xs hover:bg-primary-dark transition-colors duration-200 mb-6">
                Book Now
              </button>

              {/* How it works */}
              <h3 className="font-semibold mb-2">How it works:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
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
              <div className='w-full flex justify-center'>
                <img
                  src="/images/ML-prost.png"
                  alt="PSA Test"
                  className="w-80 max-w-md object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-md">Why get tested?</h3>
                <p className="mb-4 text-sm md:text-base">
                  PSA is specific to the Prostate and this test will measure the level of Prostate-Specific Antigen in the blood. PSA is a protein produced by cells of the prostate gland. These levels tend to increase with age and size of the prostate.
                </p>
                <h3 className="font-semibold mb-2 text-md">What do the results mean?</h3>
                <p className="mb-4 text-sm md:text-base">
                  PSA is highly specific for prostate disease, but it is not specific for prostate cancer. Often a raised PSA can may indicate something else, such as an enlarged prostate, prostatitis, or a urinary tract infection.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div id="MediMaleBasic" className='mt-10 mb-10'>
        <hr className="border-t-1 border-black w-80 mx-auto" />
      </div>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-start md:space-x-8">

            {/* Left Column: Test Details */}
            <div className="md:w-1/2 w-full text-secondary-light mb-6 md:mb-0 text-secondary-light">
              <div className='relative'>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-light">
                  MEDIMALE BASIC
                </h2>
                <span className="absolute -top-10  md:-top-3 right-2 bg-black text-white md:text-md font-semibold p-3 rounded-4xl z-10">
                  £120
                </span>

              </div>

              <p className="mb-4 text-sm md:text-base">
                Hormone balance is essential for energy levels, regulating mood, sports performance and sex drive. With our simple blood test you can find out if your hormone levels are in balance, and be in control of your health. We test for male testosterone to give you a comprehensive overview of your hormonal health.
              </p>
              {/* Points */}
              <h3 className="font-semibold mb-2">Points:</h3>
              <ul className="space-y-2 mb-10">
                <li className="flex items-center">
                  <CustomBulled />
                  Results in 2 working days from sample taken
                </li>
                <li className="flex items-center">
                  <CustomBulled />
                  Testosterone
                </li>
              </ul>

              {/* Book Now Button */}
              <button className="bg-primary-dark text-white font-semibold p-4 px-10 rounded-xs hover:bg-primary-dark transition-colors duration-200 mb-6">
                Book Now
              </button>

              {/* How it works */}
              <h3 className="font-semibold mb-2">How it works:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
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
              <div className='w-full flex justify-center'>
                <img
                  src="/images/ML-male-01.png"
                  alt="Male Test"
                  className="w-80 max-w-md object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-md">Why get tested?</h3>
                <p className="mb-4 text-sm md:text-base">
                  Male hormones such as testosterone support many bodily functions which play an essential role in the production of sperm, having a health libido and also building and maintaining muscle mass and strength, which is vitally important for any man in training. A lower testosterone level can therefore result in lack of energy and sex drive, feeling tired, loss of hair, erectile dysfunction, anxiety/depression and increased body fat.
                </p>
                <h3 className="font-semibold mb-2 text-md">What do the results mean?</h3>
                <p className="mb-4 text-sm md:text-base">
                  Levels will begin to decrease naturally after the age of 30. Other potential causes of low testosterone include; alcohol abuse, obesity, uncontrolled diabetes, medication and over training.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div id="MediMan" className='mt-10 mb-10'>
        <hr className="border-t-1 border-black w-80 mx-auto" />
      </div>

      <section >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-start md:space-x-8">

            {/* Left Column: Test Details */}
            <div className="md:w-1/2 w-full text-secondary-light mb-6 md:mb-0 text-secondary-light">
              <div className='relative'>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-light">
                  MEDIMAN
                </h2>
                <span className="absolute -top-10  md:-top-3 right-2 bg-black text-white md:text-md font-semibold p-3 rounded-4xl z-10">
                  £345
                </span>

              </div>

              <p className="mb-4 text-sm md:text-base">
                Hormone balance is essential for energy levels, regulating mood, sports performance and sex drive. With our simple blood test you can find out if your hormone levels are in balance, and be in control of your health. We test for male testosterone to give you a comprehensive overview of your hormonal health.
              </p>
              {/* Points */}
              <h3 className="font-semibold mb-2">Points:</h3>
              <ul className="space-y-2 mb-16">
                <li className="flex items-center">
                  <CustomBulled />
                  Results in 2 working days from sample taken
                </li>
                <li className="flex items-center">
                  <CustomBulled />
                  Get a deep insight into your health and wellbeing
                </li>
                <li className="flex items-center">
                  <CustomBulled />
                  Up to 100 data points linked to key health areas are measured from a simple blood test
                </li>
              </ul>

              {/* Book Now Button */}
              <button className="bg-primary-dark text-white font-semibold p-4 px-10 rounded-xs hover:bg-primary-dark transition-colors duration-200 mb-6">
                Book Now
              </button>

              {/* How it works */}
              <h3 className="font-semibold mb-2">How it works:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base mb-18">
                <li className="flex items-center">
                  <CustomBulled />Book an appointment</li>
                <li className="flex items-center">
                  <CustomBulled />Visit MediLab to have your blood sample taken</li>
                <li className="flex items-center">
                  <CustomBulled />Receive a personalised report within 2 days</li>
              </ul>
              <h2 className='text-xl font-bold mb-4'>What tests are included?</h2>
              {mediManPackage.slice(0, 6).map((section) => (
                <div key={section.title} className='mb-3'>
                  <h3 className='font-semibold'>{section.title}</h3>
                  <ul className='text-sm md:text-base'>
                    {section.tests.map((test, idx) => (
                      <li key={idx}>{test}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Right Column: Image */}
            <div className="md:w-1/2 w-full  text-secondary-light">
              <div className='w-full flex justify-center'>
                <img
                  src="/images/ML-man-01.png"
                  alt="Man Test"
                  className="w-80 max-w-md object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-md">Why get tested?</h3>
                <p className="mb-4 text-sm md:text-base">
                  Male hormones such as testosterone support many bodily functions which play an essential role in the production of sperm, having a health libido and also building and maintaining muscle mass and strength, which is vitally important for any man in training. A lower testosterone level can therefore result in lack of energy and sex drive, feeling tired, loss of hair, erectile dysfunction, anxiety/depression and increased body fat.
                </p>
                <h3 className="font-semibold mb-2 text-md">What do the results mean?</h3>
                <p className="mb-8 text-sm md:text-base">
                  Levels will begin to decrease naturally after the age of 30. Other potential causes of low testosterone include; alcohol abuse, obesity, uncontrolled diabetes, medication and over training.
                </p>
                {mediManPackage.slice(6).map((section) => (
                  <div key={section.title} className='mb-3'>
                    <h3 className='font-semibold'>{section.title}</h3>
                    <ul className='text-sm md:text-base'>
                      {section.tests.map((test, idx) => (
                        <li key={idx}>{test}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MaleHealthPage;
