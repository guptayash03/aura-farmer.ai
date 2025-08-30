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

              <div className="hidden lg:block absolute top-[30%] left-0 -translate-x-10 z-10 ">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    Can you design an intuitive user interface for a fitness
                    app?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:block absolute top-[50%] right-0 translate-x-10 z-10">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    <strong>Brainwave:</strong> I created one inspired by modern
                    fitness apps.
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>

              <div className="border-2 rounded-2xl mt-16 overflow-hidden border-gradient relative ">
                <Image src={robotImg} alt="robot image" className="" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full px-4 flex items-center justify-center">
                  <div className="bg-gray-950/80 flex justify-center items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <LoaderCircle className="text-violet-400 animate-spin " />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating
                      <span className="animate-cursor-blink font-thin">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>