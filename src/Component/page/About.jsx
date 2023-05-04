
import image from '../../assets/pexels-ash-376464.jpg';


const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img src={image} alt="Profile Picture" className="w-32 h-32 rounded-full mb-4" />
        </div>
        <h1 className="text-2xl font-bold mb-2">About Me</h1>
        <p className="text-gray-700 text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nunc vel enim fringilla luctus. 
          Etiam hendrerit, mi at consequat pharetra, enim nulla placerat neque, id vestibulum eros turpis eget ex.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Fusce blandit rhoncus leo, sed pellentesque magna pharetra a. Quisque at velit at dolor vulputate eleifend
          vitae sed lorem. Aenean accumsan lorem eu enim faucibus, ut rhoncus felis euismod. Nam vitae malesuada nisi.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Praesent vestibulum arcu a luctus tincidunt. Nullam consectetur enim a lacinia tincidunt. Nullam 
          consequat ipsum ac eros bibendum, eu feugiat mi gravida. In non efficitur libero.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
