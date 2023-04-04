import React from 'react';
import { FaBook, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-zinc-900 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white mt-20">
                <div className='flex justify-center items-center bg-gray-800 py-10'>
                    <div className='w-56'>
                        <h3 className='text-center mb-5'>CONTACT US</h3>
                        <p className='text-sm text-center'>
                            123 ABC Street, Uni 21, Bangladesh
                            +88 012 345 6789
                            <br />
                            Mon - Fri: 08:00 - 22:00
                            <br />
                            Sat - Sun: 10:00 - 23:00
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center p-10 bg-gray-900'>
                    <div className='w-56'>
                        <h3 className='text-center mb-5'>Follow US</h3>
                        <p className='text-sm text-center mb-3'>
                            Join us on social medias
                        </p>
                        <div className='flex justify-around mx-auto w-28 '><FaFacebookF className='' /><FaInstagram /><FaTwitter /></div>
                    </div>
                </div>

            </div>
            <small className='flex justify-center py-2'>Copyright © BistroBoss. All rights reserved.</small>
        </div>
    );
};

export default Footer;