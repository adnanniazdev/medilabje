'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const PreFooter: FC = () => {
    return (
        <section className="py-6 border-t" style={{ backgroundColor: '#2f3437', borderColor: '#4a4e52' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Contact - inline list */}
                    <div className="min-w-0">
                        <h3 className="text-base text-primary font-semibold mb-2">Get in touch</h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                            <span className="flex items-center gap-2">
                                <Mail className="text-primary-light" size={16} />
                                <Link href="mailto:info@medilab.je" className="hover:underline">info@medilab.je</Link>
                            </span>
                            <span className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-light">
                                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.33-1.73a11.86 11.86 0 0 0 5.71 1.49h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.32ZM12.05 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.76 1.03 1.01-3.66-.22-.38a9.42 9.42 0 1 1 8.11 4.52Zm5.47-7.09c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.31-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.31-.02-.48.13-.63.13-.13.3-.35.45-.53.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.55-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.39-.27.31-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                                </svg>
                                <Link href="https://wa.me/447797818021" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp: 07797 818021</Link>
                            </span>
                            <span className="flex items-center gap-2">
                                <Phone className="text-primary-light" size={16} />
                                <Link href="tel:+447797818021" className="hover:underline">Mobile: 07797 818021</Link>
                            </span>
                        </div>
                    </div>

                    {/* Opening Times - single line */}
                    <div className="min-w-0">
                        <h3 className="text-base text-primary-light font-semibold mb-2">Opening Times</h3>
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="text-primary-light" size={16} />
                            <p>
                                Mon-Fri 9am-9pm <span className="mx-1">·</span> Sat-Sun 9am-6pm <span className="mx-1">·</span> Bank Holidays 9am-4pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreFooter;


