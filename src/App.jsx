import {useEffect,useState} from 'react'
import './App.css'
import Card from '../components/card'
import axios from 'axios';
import Alert from '../components/alert';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCardClick = (cardInfo) => {
    setAlertData(cardInfo);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertData({});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <header className='text-center p-8 w-full max-w-4xl mx-auto'>
        <h1 className='text-5xl font-extrabold text-gray-900 mb-4 leading-tight'>Choose Your Perfect Skip Size</h1>
        <p className='text-xl text-gray-600'>Select the skip size that best suits your needs for waste disposal.</p>
      </header>

      {data? <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto'>
        {data.map(item => (
          <Card key={item.id} data={item} onClick={handleCardClick} />
        ))}
      </section>
      : <div className='p-5'>
          <p className='text-red-600'>unable to load the available skips</p>
      </div>
      }

      {showAlert && (
        <Alert 
          title={alertData.size ? `${alertData.size} Yard Skip` : ''}
          titlePrice={alertData.price_before_vat ? `£${alertData.price_before_vat}` : ''}
          description={alertData.hire_period_days ? `${alertData.hire_period_days}`:  ''}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  )
}

export default App
