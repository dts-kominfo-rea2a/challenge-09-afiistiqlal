import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const contactList = contacts.map(contact => 
    <Contact data={contact} key={contact.name}/> 
  );
  return (
    <div className="App">
      <Header />
      {contactList}
    </div>
  );
}

export default App;
