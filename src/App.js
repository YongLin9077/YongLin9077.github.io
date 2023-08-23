import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  deved,
  mullet_roe,
  naruto,
  tailwindcss_practice,
  in_time,
  tree,
  react_js,
  axios_logo,
  tailwindcss_logo,
  html5_logo,
  css3_logo,
  javascript_logo,
  npm_logo,
  sass_logo,
  less_logo,
  node_js,
  git_logo
} from './assets'
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ darkMode? "dark" : ""}>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>Lin</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode) } className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2  ml-8'
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Wang Yong Lin</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Frontend Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>
              本科為資工系，不過在大三時發現前端這片大海，不知不覺就越陷越深，
              也發覺自身還有許多不足，在自學的道路上前進，期許自己有朝一日也能成為理想中的樣子...
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://github.com/YongLin9077" target='_blank'>
              <BsGithub />
            </a>
            
            <a href="mailto:YongLin9077@gmail.com">
              <MdEmail />
            </a>
            
          </div>
          <div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 
            mt-20 flex justify-center items-center overflow-hidden md:w-96 md:h-96'>
              <img src={deved} alt='deved' className='w-full h-full object-cover'/>
            </div>
          </div>
        </section>

        <section>
          <div >
            <h3 className='text-3xl py-1 dark:text-white'>關於我</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200 text-2xl">
              畢業於國立臺南大學資訊工程學系，目前致力於前端技術，喜歡遊戲，研究不同的前端技術，也做過大大小小的專案，不過對於設計用的工具跟設計的思路與原則，還在努力學習中。
            </p>
            
            <h3 className='text-3xl py-1 dark:text-white'>技能樹 (可滑上去看細節)</h3>
            <div className='relative'>
              <img src={tree} alt="" className='w-full h-full' />
              
              <div className='lg:flex flex-col absolute z-10 left-1/2 -translate-x-1/2 top-[8%]
                bg-blue-0 w-[60%] h-[60%] hidden'>
                <div className='flex-1 flex justify-center items-center'>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='react_js' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={react_js} alt="react_js" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-16 lg:px-11 md:px-7 li1'>hooks</li>
                        <li className='bg-[#E8F8FD] li2'>狀態管理</li>
                    </ul>
                  </div> 
                </div>
                <div className='flex-1 flex justify-around items-center'>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='axios_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={axios_logo} alt="axios_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-16 lg:px-11 md:px-7 li1'>攔截器</li>
                        <li className='bg-[#E8F8FD] li2'>例外處理</li>
                    </ul>
                  </div> 
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='tailwindcss_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={tailwindcss_logo} alt="tailwindcss_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-16 lg:px-11 md:px-7 li1'>config</li>
                        <li className='bg-[#E8F8FD] li2'>基本語法</li>
                        <li className='bg-[#E8F8FD] li3'>插件</li>
                    </ul>
                  </div> 
                </div>
                <div className='flex-1 inline-flex justify-around items-center'>
                <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='git_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={git_logo} alt="git_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-[4.5rem] lg:px-11 md:px-7 li1'>版控</li>
                        <li className='bg-[#E8F8FD] li2'>github</li>
                        <li className='bg-[#E8F8FD] li3'>git指令</li>
                    </ul>
                  </div> 
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='node_js' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={node_js} alt="node_js" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-16 lg:px-11 md:px-7 li1'>Express</li>
                        <li className='bg-[#E8F8FD] li2'>安裝</li>
                    </ul>
                  </div> 
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='npm_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={npm_logo} alt="npm_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-16 lg:px-11 md:px-7 li1'>標籤</li>
                        <li className='bg-[#E8F8FD] li2'>配置包</li>
                    </ul>
                  </div> 
                </div>
                <div className='flex-1 inline-flex justify-around items-center'>
                <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='less_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={less_logo} alt="less_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-[4.5rem] lg:px-11 md:px-7 li1'>語法</li>
                        <li className='bg-[#E8F8FD] li2'>變數</li>
                    </ul>
                  </div>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='sass_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={sass_logo} alt="sass_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-[4.5rem] lg:px-11 md:px-7 li1'>SCSS</li>
                        <li className='bg-[#E8F8FD] li2'>變數</li>
                        <li className='bg-[#E8F8FD] li3'>語法</li>
                    </ul>
                  </div>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='html5_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={html5_logo} alt="html5_logo" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[90%] h-[90%] object-contain pt-2' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-11 lg:px-5 md:px-2 li1'>多媒體標籤</li>
                        <li className='bg-[#E8F8FD] li2'>SEO</li>
                        <li className='bg-[#E8F8FD] li3'>表單</li>
                    </ul>
                  </div>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='css3_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={css3_logo} alt="css3_logo" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-[4.5rem] lg:px-[2.5rem] md:px-7 li1'>flow</li>
                        <li className='bg-[#E8F8FD] li2'>flex</li>
                        <li className='bg-[#E8F8FD] li3'>grid</li>
                        <li className='bg-[#E8F8FD] li4'>RWD</li>
                        <li className='bg-[#E8F8FD] li5'>動畫</li>
                    </ul>
                  </div>
                  <div className='relative w-[20%] h-full si flex justify-center items-center'>
                    <div id='javascript_logo' className="w-full h-[80%] rounded-2xl relative overflow-hidden">
                      <img src={javascript_logo} alt="javascript_logo" className='absolute top-0 left-0 z-10 w-full h-full object-contain' />  
                      <div className='absolute w-full h-full left-0 bottom-full z-0 rounded-2xl ani invisible'></div>
                    </div>
                    <ul className='absolute top-[90%] text-center text-xl text-black invisible detail z-30'>
                        <li className='bg-[#E8F8FD] xl:px-[3rem] lg:px-[2rem] md:px-7 li1'>事件處理</li>
                        <li className='bg-[#E8F8FD] li2'>DOM</li>
                        <li className='bg-[#E8F8FD] li3'>BOM</li>
                        <li className='bg-[#E8F8FD] li4'>Ajax</li>
                        <li className='bg-[#E8F8FD] li5'>模組化</li>  
                    </ul>
                  </div>

                </div>
              </div>
              

            </div>
          </div>
          <div className='flex gap-10 justify-center items-center lg:hidden flex-col'>
            <div className='flex items-center justify-center flex-col shadow-lg p-10 rounded-xl dark:bg-white'>
              <img src={html5_logo} alt="design" className='w-60 h-60' />
              <h3 className='text-lg font-medium pt-8 pb-2'>基本布局、插件使用、環境設定、表單</h3>
              <p className='py-2'>
                了解常見的網頁布局以及相關的環境配置，以及方便的前端插件
              </p>
              <h4 className='py-4 text-teal-600'>我所使用的插件</h4>
              <p className='text-gray-800 py-1'>swiper</p>
              <p className='text-gray-800 py-1'>animate.css</p>
              <p className='text-gray-800 py-1'>Vscode各式插件</p>
            </div>
            <div className='flex items-center justify-center flex-col shadow-lg p-10 rounded-xl dark:bg-white'>
              <img src={git_logo} alt="code" className='w-60 h-60' />
              <h3 className='text-lg font-medium pt-8 pb-2'>git版控</h3>
              <p className='py-2'>
                了解基本git指令去做版本控制，也可以部屬網頁到github pages
              </p>
              <h4 className='py-4 text-teal-600'>git相關</h4>
              <p className='text-gray-800 py-1'>git</p>
              <p className='text-gray-800 py-1'>github</p>
              <p className='text-gray-800 py-1'>github pages</p>
            </div>
            <div className='flex items-center justify-center flex-col shadow-lg p-10 rounded-xl dark:bg-white'>
              <img src={react_js} alt="consulting" className='w-60 h-60' />
              <h3 className='text-lg font-medium pt-8 pb-2'>React、tailwindcss</h3>
              <p className='py-2'>
                能利用當代熱門前端框架實作出市場所需的產品，以及相關配置
              </p>
              <h4 className='py-4 text-teal-600'>我所使用的前端庫</h4>
              <p className='text-gray-800 py-1'>react</p>
              <p className='text-gray-800 py-1'>tailwindcss</p>
            </div>
          </div>
        </section>
        <section className='mt-3'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>我所做過的專案</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              這裡匯集了從大學專題到自學前端的種種大大小小的專案，每個專案所著重的技術也都大不相同，
              在這裡可以看到我的學習路徑跟成長曲線，從最基本的html、css、javascript跟
              沒有響應式的網頁到使用框架React跟tailwindcss以及響應的網頁，也理解了很多以前在書上所讀到的種種理念在實際上的應用。
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div
            className='basis-1/3 flex-1 relative w-full transition-all duration-700 mask_trigger rounded-lg overflow-hidden'
            >
              <img src={in_time} alt="" className='w-full h-full object-cover rounded-lg image_scale'/>
              <a href="">
                <div className='mask w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 
                rounded-lg text-white p-20 text-center'>
                  <h3 className='xl:text-4xl lg:text-2xl ss:text-4xl xs:text-2xl'>專題名稱:</h3>
                  <h3 className='xl:text-4xl lg:text-2xl ss:text-4xl xs:text-2xl'>基於深度學習去除人物產生無遮蔽影片之研究</h3>
                  <ul className=''>
                    <li className='my-5'>(此為大學專題)</li>
                    <li className='text-red-600 xl:text-3xl lg:text-2xl ss:text-3xl xs:text-xl'>*注意:必須有視訊鏡頭才可以玩</li>
                    <li className='text-red-600 xl:text-3xl lg:text-2xl ss:text-3xl xs:text-xl'>TensorFlow.js</li>
                  </ul>
                </div>
              </a>
            </div>
            <div
            className='basis-1/3 flex-1 relative w-full transition-all duration-700 mask_trigger rounded-lg overflow-hidden'
            >
              <img src={mullet_roe} alt="" className='w-full h-full object-cover rounded-lg image_scale'/>
              <a href="https://pinzhuanoishii.github.io/">
                <div className='mask w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 
                rounded-lg text-white p-20 text-center'>
                  <h3 className='xl:text-4xl lg:text-3xl ss:text-4xl xs:text-3xl'>專題名稱:</h3>
                  <h3 className='xl:text-4xl lg:text-3xl ss:text-4xl xs:text-3xl'>品饌烏魚子官方網頁</h3>
                  <ul className=''>
                    <li className='my-5'>傳統零售商轉型</li>
                    <li className='text-red-600 xl:text-3xl lg:text-2xl ss:text-3xl xs:text-2xl'>響應式網頁、動畫</li>
                  </ul>
                </div>
              </a>
            </div>
            <div
            className='basis-1/3 flex-1 relative w-full transition-all duration-700 mask_trigger rounded-lg overflow-hidden'
            >
              <img src={tailwindcss_practice} alt="" className='w-full h-full object-cover rounded-lg image_scale'/>
              <a href="">
                <div className='mask w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 
                rounded-lg text-white p-20 text-center'>
                  <h3 className='text-4xl'>專題名稱:</h3>
                  <h3 className='text-4xl'>Tailwind切版練習</h3>
                  <ul className=''>
                    <li className='my-5'>學習用tailwindcss進行切版</li>
                    <li className='text-red-600  text-3xl'>TailwindCss、React</li>
                  </ul>
                </div>
              </a>
            </div>
            <div
            className='basis-1/3 flex-1 relative w-full transition-all duration-700 mask_trigger rounded-lg overflow-hidden'
            >
              <img src={naruto} alt="" className='w-full h-full object-cover rounded-lg image_scale'/>
              <a href="https://stumail.nutn.edu.tw/s10859018/index.html" target='_blank'>
                <div className='mask w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 
                rounded-lg text-white p-20 text-center'>
                  <h3 className='text-4xl'>專題名稱:</h3>
                  <h3 className='text-4xl'>火影忍者網站</h3>
                  <ul className=''>
                    <li className='my-5'>html、css、javascript的第一個作品(無RWD)</li>
                    <li className='text-red-600  text-3xl'>基本布局、插件使用、環境設定、表單</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer className='flex items-center justify-center text-teal-500 '>
          <div className='my-10'>
            Copyright &copy; 2023 Wang Yong Lin All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
