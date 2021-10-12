import React from 'react'
import CountUp from "react-countup"
import VisibilitySensor from 'react-visibility-sensor';


function HomeCounter() {
    return (
        <section className="text-gray-900 bg-white body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <CountUp end={2500} redraw={true} duration={5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    {/* <span ref={countUpRef} /> */}
                                    <h2 ref={countUpRef} className="title-font font-medium sm:text-4xl text-3xl text-gray-900" />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p className="leading-relaxed">Students</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <CountUp end={240} redraw={true} duration={5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    {/* <span ref={countUpRef} /> */}
                                    <h2 ref={countUpRef} className="title-font font-medium sm:text-4xl text-3xl text-gray-900" />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p className="leading-relaxed">Live Classes</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                    <CountUp end={354} redraw={true}  duration={5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    {/* <span ref={countUpRef} /> */}
                                    <h2 ref={countUpRef} className="title-font font-medium sm:text-4xl text-3xl text-gray-900"/>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p className="leading-relaxed">Class Note</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                    <CountUp end={70} redraw={true}  duration={5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    {/* <span ref={countUpRef} /> */}
                                    <h2 ref={countUpRef} className="title-font font-medium sm:text-4xl text-3xl text-gray-900"/>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p className="leading-relaxed">Exams</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCounter
