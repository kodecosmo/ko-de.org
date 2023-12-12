import React from 'react'
import Navbar from '../components/Navbar'


function page() {
    return (
        <div>
            <Navbar />

            <div className="flex flex-col justify-center items-center h-screen mt-[110px]">
                <h1 className=' text-4xl m-6 text-primary-700'>
                    Registration
                </h1>
                <p className=' mb-3'>
                    Please fill out form below to register for the CodeFest.
                </p>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefHJer1I_AQWWO_cquFzXKkJeV2R9E8-jqd9r8eiLv6pggmQ/viewform?embedded=true" width="840" height="3000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default page
