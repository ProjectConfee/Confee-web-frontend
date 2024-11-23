const App = () => (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('src/assets/icter_banner.jpg')" }}>
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div> 
  
      {/* Container for content */}
      <div className="relative z-10 flex h-full items-center px-8">
        {/* Text Section */}
        <div className="flex-grow flex items-center justify-start pr-8">
          <div className="text-white text-lg max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum labore libero sint expedita consequuntur aliquam magni, officia saepe quo ipsam laudantium mollitia voluptatem pariatur voluptatum numquam modi provident repellendus accusantium.
          </div>
        </div>
  
        {/* Image Section */}
        <div className="flex-shrink-0 w-1/2 flex items-center justify-end">
          <img src="src/assets/icter2024-noBg.png" alt="ICter Logo" className="h-3/4 w-auto" />
        </div>
      </div>
    </div>
  );
  
  export default App;
  