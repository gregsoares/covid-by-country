import { fetchData } from './assets/api/coronaNinja';
function App() {
  return (
    <div className='py-8 text-xl text-center text-gray-100 bg-gray-500 App'>
      App is Online
      <div className=' flex min-h-screen bg-gray-300 shadow-sm rounded-lg min-w-full py-3 px-2'>
        <div
          className='justify-around border rounded-xl bg-gray-300 shadow-xl'
          id='countryContainerOne'
        ></div>
        <div
          className='justify-around border rounded-xl bg-gray-300 shadow-xl'
          id='countryContainerTwo'
        ></div>
      </div>
    </div>
  );
}

export default App;
