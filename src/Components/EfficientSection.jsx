import setting from '../assets/setting.png'
import click from '../assets/click.png'
import post from '../assets/post.png'
import translate from '../assets/translate.png'

const EfficientSection = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center font-bold my-8">Quick and efficient support</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 border shadow-xl rounded-lg p-8 '>
                <div className='flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md'>
                    <img className='w-16 h-16' src={setting} alt="" />
                    <div>
                        <h2 className='text-2xl font-semibold'>Powerful Customizer</h2>
                        <p className='text-slate-600 mt-2'>Using the Customizer you can change site layout, colors, typhograpy, show or hide specific content.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md'>
                    <img src={click} alt="" />
                    <div>
                        <h2 className='text-2xl font-semibold'>One Click Demo Importer</h2>
                        <p className='text-slate-600 mt-2'>Impost demo in a click, it will take only a few minutes to finish work best with a fresh install of WordPress.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md'>
                    <img className='w-16 h-16' src={post} alt="" />
                    <div>
                        <h2 className='text-2xl font-semibold'>Post Formats Support</h2>
                        <p className='text-slate-600 mt-2'>Make your content standout by using supported post format like Quote, Video, Gallery and Audio.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 items-center bg-gray-100 p-6 rounded-lg shadow-md'>
                    <img src={translate} alt="" />
                    <div>
                        <h2 className='text-2xl font-semibold'>Translatable</h2>
                        <p className='text-slate-600 mt-2'>Ready to be translated with all multilingual plugins and software pot files are included in the pakeage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EfficientSection;