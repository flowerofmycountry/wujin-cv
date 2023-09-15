import Avatar from './components/Avatar';
import CommonCard from './components/CommonCard';
import bgNormal from './assets/docs.avif';
import bgDark from './assets/docs-dark.avif';
import getReactDom from './utils/parseMarkdownToReactDom';
import infoMdString from './cv/personal/info.md?raw';

const educationFiles = import.meta.glob('./cv/educations/*.md', { as: 'raw', eager: true });
const projectFiles = import.meta.glob('./cv/projects/*.md', { as: 'raw', eager: true });
const conpanyFiles = import.meta.glob('./cv/companies/*.md', { as: 'raw', eager: true });

// console.log(educations);

function App() {
  const photoObj = import.meta.glob('./cv/avatar/photo.png', { as: 'url', eager: true });

  const avatar =
    Object.keys(photoObj).length > 0
      ? photoObj[Object.keys(photoObj)[0]]
      : 'https://img0.baidu.com/it/u=1770506385,1568367831&fm=253&fmt=auto&app=138&f=JPEG?w=729&h=500';

  const educations = Object.values(educationFiles).map((content) =>
    getReactDom(content),
  ) as JSX.Element[];
  const companies = Object.values(conpanyFiles).map((content) =>
    getReactDom(content),
  ) as JSX.Element[];
  const projects = Object.values(projectFiles).map((content) =>
    getReactDom(content),
  ) as JSX.Element[];

  const infoDom = getReactDom(infoMdString);

  return (
    <>
      <div className=' bg-gray-200 overflow-hidden'>
        <div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none'>
          <div className='w-[108rem] flex-none flex justify-end'>
            <picture>
              <source type='image/avif' srcSet={bgNormal} />
              <img
                src={bgNormal}
                alt=''
                className='w-[71.75rem] flex-none max-w-none dark:hidden'
                decoding='async'
              />
            </picture>
            <picture>
              <source type='image/avif' srcSet={bgDark} />
              <img
                src={bgDark}
                alt=''
                className='w-[90rem] flex-none max-w-none hidden dark:block'
                decoding='async'
              />
            </picture>
          </div>
        </div>
        <div className=' my-4 px-3 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3'>
          <div className='bg-white mx-2 shadow-xl rounded-lg overflow-hidden'>
            <Avatar avatar={avatar} />
            <div className='markdown-body px-4 py-4'>{infoDom}</div>
          </div>
          <div className='mt-4 md:col-span-2 md:mt-0'>
            <div className='bg-white mx-2 shadow-xl rounded-lg overflow-hidden '>
              <CommonCard title='项目经历' data={projects}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mr-4 fill-sky-400'
                >
                  <path d='M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z' />
                  <path d='M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z' />
                  <path d='M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z' />
                </svg>
              </CommonCard>
            </div>
            <div className='bg-white mx-2 shadow-xl rounded-lg overflow-hidden mt-4 md:col-span-2'>
              <CommonCard title='公司' data={companies}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mr-4 fill-sky-400'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z'
                    clipRule='evenodd'
                  />
                </svg>
              </CommonCard>
            </div>
            <div className='bg-white mx-2 shadow-xl rounded-lg overflow-hidden mt-4 md:col-span-2'>
              <CommonCard title='教育经历' data={educations}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mr-4 fill-sky-400'
                >
                  <path d='M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z' />
                  <path d='M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z' />
                  <path d='M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z' />
                </svg>
              </CommonCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
