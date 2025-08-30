'use client';

import { Button } from '@/components/Button';
// import robotImg from '@/assets/images/robot.jpg';
import underlineImage from '@/assets/images/underline.svg?url';
// import Image from 'next/image';
// import { LoaderCircle } from 'lucide-react';
import { Orbit } from '@/components/Orbit';
import { Planet } from '@/components/Planet';
import { SectionBorder } from '@/components/SectionBorder';
import { SectionContent } from '@/components/SectionContent';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMousePosition } from '@/utils/hooks';
import Features from '@/sections/Features';

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();

  const sectionRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ['end start', 'start end'],
  // });

  // const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);

  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);

  const translateSmallX = useTransform(springX, [0, 1], ['-100%', '100%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-100%', '100%']);
  return (
    <section ref={sectionRef} >
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold text-gray-100 text-center leading-tight">
              The AI Co-Creator for{' '}
              <span className="relative">
                <span>Social Media</span>
                <span
                  className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h1>
            {/* <p className="text-center text-lg md:text-xl mt-8 lg:max-w-3xl lg:mx-auto">
              Instagram, Linkedin, Facebook, Twitter, Reddit etc
            </p> */}
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Start Creating Posts</Button>
            </div>
            <Features/>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="translate-x-[300px] -translate-y-[170px] -rotate-135 "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-x-[500px] -translate-y-[370px] rotate-135 "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="translate-x-[470px] -translate-y-[350px] -rotate-135 "
                  />
                </motion.div>
              </div>


            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
