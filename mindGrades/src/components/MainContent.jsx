import React from 'react';

const MainContent = () => {

  return (
    <div className="pt-8 pl-32 pr-4">
      <div className="flex justify-between items-start">
        <div class="container mx-auto">
          <h1 class="text-3xl font-bold font-Satoshi-Variable mb-4">Community</h1>

          <div>
            <div class="flex justify-start mb-4">
              <button class="bg-white-200 hover:text-blue-700 text-gray-700  py-2 px-4 border-2 border-blue-600  rounded-full inline-flex items-center">
                <span>All</span>
              </button>
              <button class="bg-white-200 hover:text-blue-700 text-gray-700  py-2 px-4 border-2 border-blue-600  rounded-full inline-flex items-center ml-2">
                <span>Preparation Strategy</span>
              </button>
              <button class="bg-white-200 hover:text-blue-700 text-gray-700  py-2 px-4 border-2 border-blue-600  rounded-full inline-flex items-center ml-2">
                <span>Interview Experience</span>
              </button>

            </div>
            <div class="flex justify-end mb-4">
              <button class=" hover:bg-gray-300  py-2 px-4 rounded inline-flex  ml-2">
                <img src=".\images\write.png" alt="write" />
              </button>
            </div>
          </div>

          <hr className='my-2 border-gray-300' />

          <div class="grid grid-cols-1 gap-4">
            <div class="border-2 border-blue-700 rounded-lg shadow-md p-4">
              <div class="flex items-center mb-2">
                <div class="bg-orange-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">A</div>
                <div>
                  <h2 class="text-lg font-bold mb-1">Rahul Singh</h2>
                  <p class="text-gray-600 text-sm">2 hours ago</p>
                </div>
                <div class="ml-auto flex items-center">
                  <img src="./images/Eye.png" alt="Views" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">125</span>
                </div>
              </div>

              <div class="mb-2 flex items-center">
                <img src="./images/bluedot.png" alt="Dot" class="w-4 h-4 mr-2" />
                <h3 class="text-xl font-bold">Preparation Strategy</h3>
              </div>
              <p class="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>

              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <img src="./images/Square Arrow Up.svg" alt="Upvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">100</span>
                  <img src="./images/ArrowDown.svg" alt="Downvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">13</span>
                  <img src="./images/Chat Line.svg" alt="Comments" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">25</span>
                </div>

                <p class="text-gray-600 text-sm">New comment 5 min ago</p>

                <div class="flex space-x-2">
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Strategy</span>
                  </button>
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Preparation</span>
                  </button>
                </div>
              </div>
            </div>



            <div class="border-2 border-blue-700 rounded-lg shadow-md p-4">
              <div class="flex items-center mb-2">
                <div class="bg-orange-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">A</div>
                <div>
                  <h2 class="text-lg font-bold mb-1">Rahul Singh</h2>
                  <p class="text-gray-600 text-sm">2 hours ago</p>
                </div>
                <div class="ml-auto flex items-center">
                  <img src="./images/Eye.png" alt="Views" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">125</span>
                </div>
              </div>

              <div class="mb-2 flex items-center">
                <img src="./images/bluedot.png" alt="Dot" class="w-4 h-4 mr-2" />
                <h3 class="text-xl font-bold">Preparation Strategy</h3>
              </div>
              <p class="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>

              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <img src="./images/Square Arrow Up.svg" alt="Upvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">100</span>
                  <img src="./images/ArrowDown.svg" alt="Downvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">13</span>
                  <img src="./images/Chat Line.svg" alt="Comments" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">25</span>
                </div>

                <p class="text-gray-600 text-sm">New comment 5 min ago</p>

                <div class="flex space-x-2">
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Strategy</span>
                  </button>
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Preparation</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="border-2 border-blue-700 rounded-lg shadow-md p-4">
              <div class="flex items-center mb-2">
                <div class="bg-orange-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">A</div>
                <div>
                  <h2 class="text-lg font-bold mb-1">Rahul Singh</h2>
                  <p class="text-gray-600 text-sm">2 hours ago</p>
                </div>
                <div class="ml-auto flex items-center">
                  <img src="./images/Eye.png" alt="Views" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">125</span>
                </div>
              </div>

              <div class="mb-2 flex items-center">
                <img src="./images/bluedot.png" alt="Dot" class="w-4 h-4 mr-2" />
                <h3 class="text-xl font-bold">Preparation Strategy</h3>
              </div>
              <p class="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>

              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <img src="./images/Square Arrow Up.svg" alt="Upvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">100</span>
                  <img src="./images/ArrowDown.svg" alt="Downvote" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm mr-4">13</span>
                  <img src="./images/Chat Line.svg" alt="Comments" class="w-4 h-4 mr-1" />
                  <span class="text-gray-600 text-sm">25</span>
                </div>

                <p class="text-gray-600 text-sm">New comment 5 min ago</p>

                <div class="flex space-x-2">
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Strategy</span>
                  </button>
                  <button class="bg-orange-200 hover:bg-gray-300 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Preparation</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-orange-100 p-4 rounded-md shadow-md  bg-gradient-to-r from-orange-100 to-orange-50">

            <div className="flex items-center">
              <div className="relative inline-block">

                <img src="/images/bgFire.png" alt="promotion" className="w-24 h-24" />
                <img src="/images/fire.png" alt="fire" className="absolute top-0 left-0 w-12 h-12" />
              </div>

              <div>
                <p>Achieve Your Goals with Keep The Streak Alive</p>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-full mt-2">Start Practicing</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>

            {/*
            <div>
              <div className="flex items-center border-2 border-gray-300 rounded-lg p-2 shadow-md">
                <input type="text" className="flex-grow p-2 text-gray-700 rounded-l-lg focus:outline-none" placeholder="Search..."> </input>
                <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none">Search</button>
              </div>
            </div> */}


            <div className="flex flex-wrap">
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Interview</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Economics</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
              <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainContent;
